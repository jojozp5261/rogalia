"use strict";
function News() {
    var news = [
        [
            "Аккаунты, лобби и алхимия",
            "10.06.2015",
            "Одном аккаунте теперь может быть до 4 персонажей.",
            "После авторизации отображается лобби в котором можно выбрать имеющегося персонажа или создать нового.",
            "Переработана алхимия:",
            "Шансы выпадения атомов на примере предметов (уровень, качество)",
            "<pre>(1, 1) | (50, 50) | (100, 100)</pre>",
            "<pre>\
R:  1%  ?%  ?%\n\
O:  2%  ?%  ?%\n\
G:  3%  ?%  ?%\n\
A:  5%  ?%  ?%\n\
L:  8%  ?%  ?%\n\
I: 13%  ?%  ?%\n\
K: 21%  ?%  ?%</pre>",
            "Помимо этого время разбития теперь также зависит от уровня и качества предмета.",
            "Перемешивание атомов (shuffle) теперь работает очень быстро и дает следущие результаты:",
            [
                "С небольшой вероятностью можно получить любой атом от R до I внезависимости от исходных ингредиентов",
                "Три атома одного типа превращаются в атом следующего типа, например (A+A+A) => G",
                "Три атома R с 50% вероятностью превратятся в энергию",
            ],
        ],
        [
            "Новые треки",
            "03.06.2015",
            "Добавлены девять новых музыкальных композиций.",
            "<a href='http://vk.com/ivancelt' target='_blank'>Группа автора</a>",
        ],
        [
            "Смерть и прочее",
            "22.05.2015",
            "Теперь при смерти с персонажа падают все вещи",
            "а также появляется черех указывающий в направлении трупа, пропадающая через 30 минут.",
            "При поднятии предмета он будет автоматически экипирован в подходящий слот.",
            "И ctrl+click автоматически оденет предмет, если это возможно."
        ],
        [
            "Клеймы",
            "22.05.2015",
            "Теперь на территории личного клейма нельзя уничтожать предметы, брать предметы из контейнеров и поднимать таскаемые вещи.",
            "Так же у клеймов появились настройки доступа в тестовом режиме.",
            "Они распространяются на друзей, которым по умолчанию ничего не разрешено.",
            "Пока не готов нормальный интерфейс можно сделать следущее:",
            "ПКМ по клейму, пункт Permissions, ввести 255, нажать ок.",
            "Это разрешит друзьям то что запрещено по умолчанию",
        ],
        [
            "Разведение грибов",
            "15.04.2015",
            "Так как теперь грибы используются в рецептах пилюль, реализована возможность их разводить.",
            "Покупайте споры на рынке.",
            "P.S. механика разведения временная"
        ],
        [
            "Добавлены описания предметов",
            "06.04.2015",
            "В окошке информации о предмете, а также в окне крафта теперь отображается текстовое описание предмета."
        ],
        [
            "Больше нямки!",
            "21.03.2015",
            "С овец, лошадей и коров при потрошении выпадают кишки.",
            "Кишки идут на производство Баварских сосисок.",
            "А из сосискок, яиц, картошечки и пиваса можно замутить отличный Английский завтрак.",
        ],
        [
            "Колеса",
            "28.03.2015",
            "Добавлены таблеки снижающие аттрибуты.",
            "Добавлен активированный уголь обнуляющий витамины.",
        ],
        [
            "Новая еда и предметы",
            "25.03.2015",
            "Добавлены:",
            [
                "Супы: луковый, тыквенный, овощной, солянка",
                "Хлеб",
                "Яблочны джем",
                "Тосты с джемом",
                "Пицца",
                "Настенный факел",
                "Мясорубка",
                "Новый алтарь",
            ]
        ],
        [
            "Карта, клейм и Чарльз",
            "17.03.2015",
            "Переработан код отрисовки карты. ФПС должен немного подрасти",
            "Выключена старая защита. Теперь только клейм, только хардкор.",
            "Переработано меню Чарльза. Теперь с ним можно невозбранно поговорить в более цивилизованном интерфейсе",
        ],
        [
            "Это победа!",
            "14.03.2015",
            "Исправлен злосчастный баг с раздвоением предмета в сумках, с невозможностью с ним что-либо сделать."
        ],
        [
            "Мам, я не такой как все!",
            "11.03.2015",
            "Для животных (кроликов) введен пол. Совокуплятся смогут только разнополые особи.",
            "Как определить пол? Да черт его знает, они все одинаковые.",
        ],
        [
            "Клетки",
            "10.03.2015",
            "Мелких животных, а именно куриц и кроликов теперь можно ловить в клетки и носить в рюкзаке.",
        ],
        [
            "Помещики и налоги",
            "10.03.2015",
            "У каждой фракции теперь есть помещик. Это игрок с наибольшим рангом внутри фракции и лучшими показателями среди равных себе.",
            "Помещик получает 10% со всех продаж торговцев, казино, продажных женщин, а также налогов.",
            "Текущих помещиков можно посмотреть на странице со <a href='/status' target=_blank>статусом сервера</a>"
        ],
        [
            "Кролилки и любовь.",
            "10.03.2015",
            "Кролики будучи сытыми и при наличии пары, устроят любовный переполох, расширив свою популяцию."
        ],
        [
            "Клеймы!",
            "09.03.2015",
            "Получить клейм можно у Чарльза на рынке.",
            "Расширение клейма происходит через контекстное меню.",
            "Сумма налога начисляется при строительстве клейма, при его расширении, а так же при каждом списании средств",
            "Клейм перестает работать при отрицательном балансе "+
                "через 30 дней после последнего платежа.",
        ],
        [
            "Новые предметы",
            "22.02.2015",
            "Добавлены:",
            [
                "Флакон",
                "Пробка",
                "Цветочная эссенция",
                "Лекарство от чумы",
            ],
            "Помимо этого обновлены рецепты некоторых старых предметов."
        ],
        [
            "Продажа сундуков!",
            "19.02.2015",
            "Теперь можно продавать и покупать переносимые предметы типа сундуков и стульев.",
            "Для этого просто подойдите к торговцу с нужным предметом в руках",
        ],
        [
            "Куриный голод и однорукий бандит",
            "09.02.2015",
            "Курицы теперь едят как и лошади пока не насытяться.",
            "Помимо этого они несут яйца только если сытые.",
            "Домашние курицы теперь умирают с голоду.",
            "Однорукий бандит ждет ваши деньги в городе."
        ],
        [
            "Поиск пути",
            "02.02.2015",
            "Поиск пути по умолчанию включен для всех персонажей.",
            "Отключить его можно в настройках",
            "<code>[gameplay :: pathfinding</code>]",
        ],
        [
            "Ссылки на рецепты и вики",
            "28.01.2015",
            "Теперь поиск по рецептам работает на любом языке.",
            "Ссылки на рецепты (shift+click по имени рецепта в списке) теперь кликабельные.",
            "Ссылку на рецепт можно написать прямо в чате: <code>${recipe:PATTERN}</code>, " +
                "где PATTERN — шаблон для поиска предмета. " +
                "Предмет выберется только при полном совпадении имени предмета и шаблона. " +
                "В противном случае будет запущен поиск по шаблону.",
            "Примеры:",
            "<textarea style='height:80px'>${recipe:Iron axe}\n" +
                "${recipe: Железный топор}\n" +
                "${recipe:axe}\n" +
                "${recipe:топор}<textarea>",
        ],
        [
            "Смена пароля",
            "27.01.2015",
            "Чтобы сменить пароль в чате введите <code>*set-password PASSWORD PASSWORD</code>",
            "Где PASSWORD = новый пароль.",
        ],
        [
            "Обновлен перевод и оптимизирована загрузка ресурсов",
            "25.01.2015",
            "Переведены названия почти всех предметов и действий на них," +
                " а так же часть сообщений от сервера. Огромное спасибо товарищу Руту!",
            "Теперь большинство ресурсов загружается по требованию, " +
                "что должно сильно ускорить загрузку игры.",
        ],
        [
            "Костер, щиты, декор и пони",
            "24.01.2015",
            "Обновлен костер. Теперь в него можно докидывать топливо и заново разжигать.",
            "Добавлены щиты и различные элементы декора: статуи, картины и настенные украшения.",
            "Старые лошади переименованы в пони. Вместо них добавлены новые.",
        ],
        [
            "Слава",
            "11.01.2015",
            "Слава обнулена",
            "Теперь слава дается за убийство игроков отличной от вашей фракции, при условии что разница уровней между вами не более 10.",
        ],
        [
            "Фракции и квесты",
            "11.01.2015",
            "Добавлена возможность выбирать фракцию. " +
            "После этого можно будет выполнять ежедневный квест дающий очки статуса. " +
            "Набрав определенное количество очков, вы получаете новый ранг. " +
            "В дальнейшем члены лидирующей фракции будут получать различные бонусы.",
        ],
        [
            "Жареная рыба и рыбалка",
            "09.01.2015",
            "Обновлена механика рыбалки.",
            "Добавлено жареное рыбное филе.",
            "Добавлено новое знамя.",
        ],
        [
            "Рыбалка!",
            "08.01.2015",
            "Добавлена рыбалка.",
            "Сбор с деревьев теперь зависи от выживания.",
        ],
        [
            "Восприятие и мудрость",
            "05.01.2015",
            "Добавлены два новых атрибута: восприятие и мудрость, и два соответствующих витамина.",
            "Помимо этого изменены связи между витаминами и атрибутами.",
            "Также пересмотрены привязки навыков к атрибутам. Скажем, фермерство теперь зависит от восприятия, а кулинария от мудрости.",
            "Увеличин прирост количества витаминов при повышении качества еды.",
            "Почти вся сырая еда больше не дает никаких витаминов.",
            "Повышение навыка больше не вызывает понижение связанного. Вместо этого на повышение навыка теперь требуется больше витаминов, пропорционально уровню связанного навыка."
        ],
        [
            "Баланс",
            "04.01.2015",
            "Уменьшен эффект замедления от переедания жажды до 45%. Таким образом персонаж может двигаться, хотя и очень медленно, при наличии обоих эффектов.",
            "Постройка респауна стала еще легче",
        ],
        [
            "Автокрафт и автоперемещение",
            "03.01.2015",
            "Добавлена кнопка перемещения всего содержимого контейнера.",
            "Добавлена кнопка запускающая автоматический крафт, пока не кончатся ресурсы.",
        ],
        [
            "Лук, стены и знамена",
            "03.01.2015",
            "Добавлены:",
            [
                "Лук репчатый и зеленый",
                "Знамена",
                "Новые книжки",
            ],
            "Библиотека при имперской канцелярии открыта для всех желающих на рыночной площади."
        ],
        [
            "Обновление предметов",
            "02.01.2015",
            "Добавлены:",
            [
                "плетеный забор",
                "книжный шкаф",
            ],
            "Обновлены рецепты некоторых предметов.",
            "На бумаге теперь можно писать.",
        ],
        [
            "Плуг и каменные стены",
            "30.12.2014",
            "Добавлены:",
            [
                "плуг",
                "новые каменные стены в ассортименте",
                "поленница",
                "настройка разрешающая выделять себя",
            ],
        ],
        [
            "Новогодний ивент",
            "29.12.2014",
            "Дед Мороз и снегурка выдают подарки на рыночной площади в обмен на этомы.",
            "Нафарми елку — создай праздничное настроение :3",
        ],
        [
            "Можно копать землю",
            "25.12.2014",
            "Лопатой можно копать землю получая соответствующий предмет. " +
                "Затем полученной землей можно засыпать вспаханную землю и неглубокую воду.",
            "Также копание теперь можно ставить в очередь используя шифт+пробел+клик.",
        ],
        [
            "Новости",
            "25.12.2014",
            "Добавлены внутреигровые новости.",
            "Так же читайте новости в нашей <a href=http://vk.com/rogalik_mmo target=_blank>группе вк</a>.",
        ],
    ];

    var lsKey = "news.viewed";
    var viewed = localStorage.getItem(lsKey) || news.length;
    var list = document.createElement("ul");

    function makeList(items) {
        var list = document.createElement("ul");
        items.forEach(function(html) {
            var item = document.createElement("li");
            item.innerHTML = html;
            list.appendChild(item);
        })
        return list;
    }

    this.show = function() {
        localStorage.setItem(lsKey, news.length);
        news.forEach(function(record, i) {
            var title = record.shift();
            var date = record.shift();

            var item = document.createElement("li");
            if (i < news.length - viewed)
                item.classList.add("unread");

            var time = document.createElement("time");
            time.textContent = date;
            item.appendChild(time);

            var summary = document.createElement("div");
            summary.className = "summary";
            summary.textContent = title;
            item.appendChild(summary);


            var details = document.createElement("div");
            details.className = "details";
            record.forEach(function(row) {
                if (Array.isArray(row)) {
                    details.appendChild(makeList(row));
                } else {
                    var p = document.createElement("p");
                    p.innerHTML = row;
                    details.appendChild(p);
                }

            });
            item.appendChild(details);

            list.appendChild(item);
        });
        this.panel.hooks.show = null;
    }.bind(this);

    this.panel = new Panel("news", "Good news, everyone!", [list]);
    if (this.panel.visible)
        this.show();
    else
        this.panel.hooks.show = this.show;

    if (viewed < news.length)
        this.panel.show();
}
