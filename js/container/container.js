"use strict";
function Container(entity) {
    this.entity = entity;
    this.id = +entity.Id;

    this.button = null;
    this.fuel = null;
    this.name = "";

    // copy if entity.Props data or players.Equp
    this._slots = [];
    this._slotsWidth = null;
    this._slotsHeight = null;

    this.slots = [];

    this.panel = null;
    this.init();
    this.createContainerPanel();
    this.update();

    this._syncReq = false;
};

Container.SLOT_SIZE = 52; // .slot:width + 2*slot:margin

Container.show = function(entity) {
    Container.open(entity).panel.show();
};

Container.open = function(entity) {
    var container = Container.get(entity);
    if (!container) {
        container = new Container(entity);
        game.containers[container.id] = container;
    }
    return container;
};

Container.get = function(entity) {
    return game.containers[entity.Id];
};

Container.move = function(entity, toContainer, slotIndex) {
    game.network.send("entity-move", {
        Id: +entity.Id,
        ToId: +toContainer.id,
        toSlot: (slotIndex === undefined) ? -1 : slotIndex,
    });
};

Container.updateVisibility = function() {
    for(var id in game.containers)
        game.containers[id].updateVisibility();
};

Container.save = function() {
    localStorage.setItem("containers", JSON.stringify(Object.keys(game.containers)));
};

Container.load = function() {
    var saved = JSON.parse(localStorage.getItem("containers"));
    if (saved) {
        saved.filter(Entity.exists).map(Entity.get).forEach(Container.open);
    }
};

Container.bag = function() {
    var bag = game.player.bag();
    return (bag) ? Container.open(bag) : null;
};

Container.forEach = function(callback) {
    for (var i in game.containers) {
        var cnt = game.containers[i];
        callback(cnt);
    }
};

Container.prototype = {
    get visible() {
        return this.panel.visible;
    },
    set visible(v){
        this.panel.visible = v;
    },
    findSlot: function(entity) {
        var i = this._slots.indexOf(entity.Id);
        return (i != -1) ?  this.slots[i] : null;
    },
    forEach: function(callback)  {
        this.slots.forEach(callback);
    },
    createContainerPanel: function() {
        var slots = util.dom.div("slots-wrapper");
        this._slots.forEach(function(id, i) {
            var slot = new ContainerSlot(this, i);
            this.slots.push(slot);
            slots.appendChild(slot.element);
        }.bind(this));

        this.updateFuel();

        var id = this.id;

        var moveAll = new Image();
        moveAll.className = "icon-button";
        moveAll.src = "assets/icons/panel/move-all.png";
        moveAll.title = T("Move all");

        moveAll.onclick = function() {
            var top = this.getTopExcept(id);
            if (top)
                game.network.send("move-all", {From: id, To: top.id});
        }.bind(this);

        var sort = new Image();
        sort.className = "icon-button";
        sort.src = "assets/icons/panel/sort.png";
        sort.title = T("Sort");
        sort.onclick = function() {
            game.network.send("Sort", {Id: id});
        };

        this.panel = new Panel(
            "container-" + this.id,
            this.name,
            [slots, this.fuel, util.hr(), moveAll, sort],
            {
                mousedown: function(e) {
                    game.controller.highlight("inventory", false);
                    this.onmousedown(e);
                }.bind(this)
            }
        );
        this.panel.hooks.hide = this.markAllAsSeen.bind(this);
        this.panel.hooks.show = function() {
            if (this._syncReq) {
                this.update();
                this._syncReq = false;
            }
        }.bind(this);
        this.panel.element.classList.add("container");
        this.panel.container = this;

        this.panel.setWidth(this._slotsWidth * Container.SLOT_SIZE);
    },
    markAllAsSeen: function() {
        this.slots.forEach(function(slot) {
            slot.markAsSeen();
        });
    },
    onmousedown: function(e) {
        var slot = e.target.slot;

        if (!slot || slot.locked)
            return;

        var entity = slot.entity;
        //slot is empty
        if (!entity)
            return;

        slot.markAsSeen();

        if (e.button == game.controller.RMB) {
            game.menu.show(entity);
            return;
        }

        if (game.controller.hovered) // swap
            return;

        slot.lock();

        var mods = game.controller.modifier;

        if (mods.shift && !mods.ctrl) {
            game.chat.linkEntity(entity);
            return;
        }

        if (mods.ctrl) {
            this.dwim(slot);
            return;
        }

        e.stopPropagation();
        game.controller.cursor.set(entity, e.pageX, e.pageY, slot.unlock.bind(slot));
    },
    dwimCraft: function(slot) {
        if (!slot.entity) {
            console.log("dwimCraft: got empty slot");
            return false;
        }
        var entity = slot.entity;
        if (game.controller.craft.panel.visible) {
            var slots = game.controller.craft.slots;
            for(var i = 0, l = slots.length; i < l; i++) {
                if (!slots[i].used && entity.is(slots[i].group)) {
                    game.controller.craft.use(entity, slots[i]);
                    return true;
                }
            }
        }
        return false;
    },
    // dwim want slot with entity
    dwim: function(slot) {
        if (!slot.entity) {
            console.log("dwim: got empty slot");
            return;
        }

        if (this.dwimCraft(slot))
            return;

        var blank = game.controller.craft.blank;
        if (blank.panel && blank.panel.visible) {
            blank.use(slot.entity);
            return;
        }
        if (Panel.top.name == "blank-panel")
            return;

        var entity = slot.entity;
        var top = this.getTopExcept(entity.Container);
        if (top) {
            if (game.controller.modifier.ctrl && game.controller.modifier.shift) {
                game.network.send("move-all", {
                    From: entity.Container,
                    To: top.id,
                    Type: entity.Type,
                });
            } else {
                Container.move(entity, top);
            }
            return;
        }

        entity.dwim();
    },
    init: function() {
        var entity = this.entity;
        var props = entity.Props;
        this._slots = props.Slots;
        this._slotsWidth = props.SlotsWidth;
        this._slotsHeight = props.SlotsHeight;
        this.name = TS(entity.Name);
    },
    updateVisibility: function() {
        if (this.visible && !game.player.canUse(this.entity)) {
            this.panel.hide();
        }
    },
    // called on each Entity.sync()
    update: function() {
        this.sync();
        this.slots.forEach(function(slot, i) {
            var id = this._slots[i];
            // slot is empty
            if (id == 0) {
                slot.clear();
                return;
            }
            var entity = Entity.get(id);
            if (!entity) {
                game.sendErrorf("Entity with id %d is not found in container %d", id, this.id);
                return;
            }
            slot.set(entity);
        }.bind(this));

        this.updateFuel();
    },
    syncReq: function() {
        this._syncReq = true;
    },
    sync: function() {
        this._slots = this.entity.Props.Slots;
    },
    updateFuel: function() {
        var fuel = this.entity.Fuel;
        if (!fuel)
            return;

        // fast route; update current value
        if (this.fuel) {
            this.fuel.dataset.update(fuel);
            return;
        }

        this.fuel = document.createElement("div");
        this.fuel.title = T("Fuel");
        this.fuel.className = "fuel-wrapper";

        var current = util.dom.div("fuel-current");
        var max = util.dom.div("fuel-max");
        var slot = util.dom.slot();
        slot.canUse = this.container.canUse.bind(this.entity);
        slot.use = this.container.use.bind(this.entity);

        var update = function(fuel) {
            current.style.width = (fuel.Current/fuel.Max)*100 + "%";
        };
        update();
        this.fuel.dataset.update = update;

        this.fuel.appendChild(current);
        this.fuel.appendChild(max);
        this.fuel.appendChild(slot);
    },
    hasSpace: function() {
        return this._slots.find(function(id) { return id == 0; }) !== undefined;
    },
    getTopExcept: function(except) {
        for (var i = Panel.stack.length-1; i >= 0; i--) {
            var panel = Panel.stack[i];
            if (panel.visible && panel.container && panel.container.id != except && panel.container.hasSpace())
                return panel.container;
        };
        return null;
    },
};
