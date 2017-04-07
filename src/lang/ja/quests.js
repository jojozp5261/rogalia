/* global Quest */

Quest.quests =  {
    "tutorial-start": {
        name: "開始",
        desc: [
            "ようこそ、開拓者！",
            "ここに訪れたすべての人が私のアカデミーを受講します。 私の仕事はサバイバルの基礎を教えることです。",
        ],
        final: "素晴らしい！",
    },
    "craft-1": {
        name: "リソースの採取",
        desc: "この自然の地を生き残るためには道具が必要です。 道具にはリソースが必要です。 四つの石と二つの枝と小枝を選びなさい。",
        tip: "木を右クリックしてください <rmb>枝/小枝を取る</rmb>. 取った枝を右クリックして<rmb>加工</rmb> すれば要らない葉が取れクラフトに使えるようになります, 石は地面から拾ってください。 <lmb></lmb>.",
    },
    "craft-1-2": {
        name: "ナイフの柄を作る",
        desc: "枝と小枝から木の棒を作ってください。 私たちはそれらを使ってハンドルを作ります。",
        tip: "<rmb>加工</rmb> 周囲にある木から枝や小枝を採取してください、そのあと枝を右クリックして<rmb>加工</rmb> ",
    },
    "craft-2": {
        name: "ナイフの刃を作る",
        desc: "ナイフには刃をつけないといけません。 鋭い石からそれを作るようにしてください。",
        tip: "<lmb></lmb> 鋭い石のアイコン。",
    },
    "craft-2-1": {
        name: "ナイフの作成",
        desc: "用意はできました。 これらのリソースを使って、あなたはナイフを作成することができます。",
    },
    "craft-3": {
        name: "武器の作成",
        desc: "さてと、私はあなたへ最初の武器である鋭いスティックをの作成を教えます。",
    },
    "stat-1": {
        name:  "喉の渇き",
        desc: "これから私は食べ物と水の取得方法を教えます。 次の部屋には小さな水源があります。 木から樹皮を剥がしてマグカップを作ってから、水源に立ち水を汲んでください。 心配しないでいいですよ、ここの水は奇麗ですから。",
        tip: "<rmb>ドリンクを</rmb> 飲むことでスタミナは回復するでしょう、 <br>マグカップを満たすために浅瀬にいなければならない、<br>キャラクタのデータを取得するには、左上のアバターをクリックしてください。",
    },
    "stat-2": {
        name: "空腹",
        desc: "そろそろおなかが減ってくる頃じゃないですか？ ニワトリを殺してそれを刈り取ったり、木からリンゴをむしり取るのも自由です。ですが注意してください、必要以上に食べていまうと食料からビタミンの効力が発揮されません。 ステータスやスキルを向上させるためにはビタミンの効力が必要です。 もし食べ過ぎたのなら、私の隣にあるトイレを使いなさい。見たりしませんよ。",

    },
    "fight": {
        voice: true,
        name: "戦闘中のコンボ",
        desc: "さてと、私はあなたへ最初の戦いの準備をしました。 次の部屋に戦闘訓練用のマネキンがあります。 右手にあなたの鋭い棒を持って、それを切ったり叩いたりしてください。",
    },
    "finish": {
        name: "これでチュートリアルは終了です。",
        desc: "とりあえず",
        final: "仕事も終わったことですし。 町に戻る時間です。",
    },
    "claim-get-license": {
        name: "License",
        desc: "Hello newbie. Money run this world, got it? And you better not leave your money on a road. I'm gonna teach you to protect your privacy. You know you can keep cash in my bank, right? But you also have to keep your belongings safe. That's what Claim is for.",
        tip: "You can get a license from Scrooge (see Bank).",
    },
    "claim-build": {
        name: "Build",
        desc: [
            "It will cost you some, yeah, but safety worth it.",
            "You can protect any free place with Claim and further extend it.",
            "Don't rush, choose wisely. Anytime you want to move it or buy another, we'll charge you.",
            "Place a respawn stone nearby - that's how you won't lose the place and get to it quickly.",
        ],
    },
    "claim-extend": {
        name: "Extend",
        desc: "Good for ya. You can extend your claim but don't forget that rent enlarges too. Always keep an eye on your bank account and check if there's enough to pay a rent, otherwise you're at risk to lose the claim and turn unprotected.",
        final: "Seems to be done, yeah? Now you can settle and build on your own. Ofcourse, people still can rob you, but now you can punish the crime. The Law is on your side for now. By the way, go visit the butcher, he seems to have something to say you."
    },
    "tp-return-home": {
        name: "テレポート: リターン・ホーム" ,
        desc: "ポータルに興味はありますか？ 私はあなたが世界中を旅する方法を教えれる。<br>あなたが表面上にあってシノデ皇帝の領土内にのにいるかぎり、あなたは簡単にあなたの農場や家に帰ることができます。",
        "tip": "<rmb>左上のポートレイトをクリックしてください、それから</rmb> 帰還を選択",
    },
    "tp-respawn": {
        name: "テレポート:復活の石",
        desc: "町の復活の石はあなたの復活の石につながっています。<br>復活の石を使用して移動することができますが、主な任務は死後にあなたを再蘇生させることです。",
        tip: "<lmb></lmb> the closest respawn."
    },
    "tp-scrolls": {
        name: "テレポート・スクロール",
        desc: "テレポーテーションのスクロールは、非常に危険な場所から帰還することができます。地下を探索しているときなどの助けになります。 <br>あなたは自分でそれを購入したり作ることができます。",
    },
    "faction-daily-1": {
        name: "あなたの派閥を支援する(daily)",
        desc: "派閥内のあなたの地位を上げる",
    },
    "garland-daily": {
        name: "ガーランド (daily)",
        desc: "サンタが花輪を作るのを助ける",
    },
    "chrismas-flags-daily": {
        name: "フラグ (daily)",
        desc: "サンタが旗を作るのを助ける",
    },
    "chrismas-decoration-daily-1": {
        name: "デコレーション (daily)",
        desc: "サンタの紙で女の子の飾りを作るのを助ける",
    },
    "chrismas-decoration-daily-2": {
        name: "ガラス装飾 (daily)",
        desc: "サンタのガラスで女の子の飾りを作るのを助ける",
    },
    "chrismas": {
        name: "クリスマスの帽子",
        desc: "メリークリスマスと新年あけましておめでとうございます！ 私はあなたにクリスマスハットをプレゼント！",
        final: "ここに貴方の帽子があるよ",
        customReward: "クリスマスの帽子",
    },
    "chrismas-presents": {
        name: "クリスマスの贈り物だよ.",
        desc: "さ～クリスマスプレゼントが欲しいですか？?",
        final: "ここに貴方へのプレゼントがあります。",
    },

    "buy-small-indulgence": {
        name: "心からの贖罪",
        desc: [
            "真に悔い改めることは、貴方の魂を正しい道へ導くのに役立ちます。いつでも懺悔することができます。",
            "教会の仕事は、善と悪のバランスを維持することです。教会の翼の下に身を寄せるな、救済する術を教える事でしょう。" ,       ],
    },
        customReward: "+100 Karma",

    "buy-average-indulgence": {
        name: "命を懸けた贖罪",
        desc: [
            "真に悔い改めることは、貴方の魂を正しい道へ導くのに役立ちます。いつでも懺悔することができます。",
            "教会の仕事は、善と悪のバランスを維持することです。教会の翼の下に身を寄せるな、救済する術を教える事でしょう。",
        ],
        customReward: "+1000 Karma",
    },
    "buy-big-indulgence": {
        name: "魂をかけた贖罪",
        desc: [
            "真に悔い改めることは、貴方の魂を正しい道へ導くのに役立ちます。いつでも懺悔することができます。",
            "教会の仕事は、善と悪のバランスを維持することです。教会の翼の下に身を寄せるな、救済する術を教える事でしょう。",
        ],
        customReward: "+10000カルマ",
    }
};
