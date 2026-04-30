export const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact",
            getInTouch: "Get In Touch",
        },
        hero: {
            available: "Available for work",
            hi: "Hi, I'm",
            typing: "Student Developer • Unity / Web / Python / Dart",
            bio: "I build interactive experiences and web apps. I like making prototypes fast and polishing UX. Currently focused on creating delightful digital experiences.",
            viewWork: "View My Work",
            letsTalk: "Let's Talk",
            scroll: "Scroll",
        },
        about: {
            badge: "About Me",
            heading1: "Crafting",
            heading2: "Digital Experiences",
            hello: "Hello! I'm",
            bio1: "I'm a Computer Science student at Waseda University, passionate about building interactive experiences. I started programming at 14 and have been exploring game dev, web apps, and creative coding ever since.",
            bio2: "Currently working at Life is Tech!, inspiring the next generation of developers. I love hackathons, rapid prototyping, and turning ideas into reality through code.",
            stats: [
                { value: "6+", label: "Years Coding" },
                { value: "🏆", label: "Hackathon Win" },
                { value: "∞", label: "Curiosity" },
            ],
            myJourney: "My Journey",
            downloadResume: "Download Resume",
        },
        projects: {
            badge: "My Work",
            heading1: "Featured",
            heading2: "Projects",
            description: "A collection of projects I've built, from games to web applications. Each one represents a learning journey and creative exploration.",
            categories: {
                all: "All Projects",
                mobile: "Mobile",
                game: "Games",
                web: "Web",
                tool: "Tools",
            },
            viewAll: "View all projects on GitHub",
            featured: "Featured",
            viewProject: "View Project",
            descriptions: {
                5: "An educational game that teaches effective prompt engineering to middle and high school students. Players write prompts to recreate a given product; an AI scores how faithfully it reproduces the target. Instant feedback and a second attempt encourage iterative learning. Won the AI Award at GDGoC Hackathon 2026.",
                6: "A design-focused sneaker enthusiast site built from scratch. Wireframed and designed in Figma applying the four principles of design (repetition, proximity, contrast, alignment), then implemented in vanilla HTML/CSS/JS.",
                2: "This is a memory-based escape game where players must memorize the layout and mechanisms of the building within five seconds and navigate through the darkness. I implemented physics, a particle system, and shaders using C#. Additionally, placing a strong emphasis on the pixel-art aesthetic, I used a pixel art tool called Asperite to hand-draw the character and background images.",
                7: "A real-time multiplayer Tetris battle game. Built just to play Tetris against a friend online — two players compete head-to-head via WebSocket.",
                1: "A hackathon-built mobile app using Flutter + Dart, scraping news articles and summarizing them via Gemini API, then converting the summary into a playable podcast. Won GDGC Summer Hackathon 2024 (Audience Prize).",
                4: "A Python tool that calculates the total viewing time from your YouTube watch-history.html file. Analyze your viewing habits.",
                3: "This very portfolio! Built with Next.js, featuring ASCII text animations, dithered backgrounds, and a sleek cyberpunk design.",
            },
        },
        skills: {
            badge: "Skills",
            heading1: "What I",
            heading2: "Bring",
            description: "Technologies and tools I use to bring ideas to life.",
            proficiency: "Proficiency Levels",
            expertise: "Areas of Expertise",
            categories: [
                { name: "Game Development", icon: "🎮", skills: ["Unity", "C#", "Game Design", "Physics", "Shaders"] },
                { name: "Web Development", icon: "🌐", skills: ["React", "Next.js", "TypeScript", "Tailwind", "Node.js"] },
                { name: "Creative Coding", icon: "🎨", skills: ["p5.js", "Generative Art", "WebGL", "Canvas", "Animations"] },
                { name: "Tools & Others", icon: "🛠️", skills: ["Git", "Figma", "VS Code", "Blender", "Notion"] },
            ],
            funStats: [
                { icon: "☕", value: "500+", label: "Cups of Coffee" },
                { icon: "🐛", value: "∞", label: "Bugs Squashed" },
                { icon: "💡", value: "24/7", label: "Learning Mode" },
            ],
        },
        contact: {
            badge: "Get In Touch",
            heading1: "Let's",
            heading2: "Connect",
            description: "Have a project idea or just want to chat? Feel free to reach out. I'm always excited to explore new opportunities.",
            contactInfo: "Contact Info",
            available: "Currently available for new projects",
            formHeading: "Send a Message to Kei Tanaka",
            name: "Your Name",
            email: "Your Email Address",
            message: "Your Message",
            send: "Send Message",
            success: "✓ Message sent successfully! I'll get back to you soon.",
            error: "✗ Failed to send message. Please try again or email me directly.",
        },
        footer: {
            tagline: "Building interactive experiences and web apps. Always learning, always creating.",
            quickLinks: "Quick Links",
            connect: "Connect",
            copyright: (year: number) => `© ${year} aiouku. All rights reserved.`,
            builtWith: "Built with",
        },
        journey: {
            backToAbout: "Back to About",
            highlights: "Highlights",
            links: "Links",
            backToHome: "Back to Home",
            items: {
                "life-is-tech": {
                    title: "Joined Life is Tech!",
                    description: "Started working as a mentor providing IT education to teenagers.",
                    detailedDescription: `As a mentor at Life is Tech!, I guide middle and high school students through their programming journey. I teach web development, game development with Unity, and help students build their first apps.

This role has taught me the importance of clear communication and breaking down complex concepts. Seeing students go from zero coding experience to building their own projects is incredibly rewarding.`,
                    highlights: [
                        "Teaching web development and Unity",
                        "Mentoring 20+ students",
                        "Developing curriculum materials",
                    ],
                    links: [] as { label: string; url: string }[],
                },
                "gdsc-hackathon": {
                    title: "Won GDSC Hackathon",
                    description: "Won the Audience Prize at GDSC Japan Summer Hackathon with News Podcaster app.",
                    detailedDescription: `At the GDSC Japan Summer Hackathon, our team built "News Podcaster" - an app that transforms news articles into personalized podcast episodes using AI.

The app uses natural language processing to summarize articles and text-to-speech to create audio content. Users can customize the voice, pace, and length of their news podcasts.

We won the Audience Prize, voted by fellow hackers and attendees, which was an amazing validation of our idea and execution.`,
                    highlights: [
                        "Built AI-powered news-to-podcast converter",
                        "48-hour hackathon sprint",
                        "Implemented NLP summarization and TTS",
                    ],
                    links: [{ label: "Project GitHub", url: "https://github.com/aiouku/news_podcaster" }],
                },
                "waseda-university": {
                    title: "Entered Waseda University",
                    description: "Started studying Computer Science at Waseda University.",
                    detailedDescription: `I began my undergraduate studies in Computer Science at Waseda University, one of Japan's leading private universities.

My coursework covers algorithms, data structures, computer architecture, and software engineering. Outside of classes, I'm actively involved in programming competitions and tech communities on campus.`,
                    highlights: [
                        "Computer Science major",
                        "Active in tech communities",
                        "Participating in programming competitions",
                    ],
                    links: [] as { label: string; url: string }[],
                },
                "started-programming": {
                    title: "Started Programming",
                    description: "Began my coding journey at age 14, learning Python and building tools for games.",
                    detailedDescription: `At 14, I wrote my first lines of code in Python. It started with simple scripts to automate repetitive tasks in games I played.

From there, I discovered the joy of building things from scratch. I moved on to web development, game development with Unity, and eventually fell in love with creating interactive experiences.

This was the beginning of a journey that would define my career path and passion.`,
                    highlights: [
                        "First language: Python",
                        "Built game automation tools",
                        "Self-taught through online resources",
                    ],
                    links: [] as { label: string; url: string }[],
                },
            },
        },
    },
    ja: {
        nav: {
            home: "Home",
            about: "About",
            projects: "Projects",
            skills: "スキル",
            contact: "Contact",
            getInTouch: "Get in Touch",
        },
        hero: {
            available: "仕事募集中",
            hi: "こんにちは",
            typing: "学生 • Unity / Web / Python / Dart",
            bio: "常日頃からプログラミングを触っています。素早く作品を作り、UI、UXを磨くのが好きです。加えて、ハッカソンなどのチーム開発をすることが大好きです。",
            viewWork: "作品を見る",
            letsTalk: "コンタクト",
            scroll: "",
        },
        about: {
            badge: "自己紹介",
            heading1: "これまでの",
            heading2: "経歴",
            hello: "",
            bio1: "早稲田大学で情報工学を学ぶ学生です。14歳からプログラミングを始め、ゲーム開発、Webアプリを探求してきました。",
            bio2: "現在はLife is Tech!でメンターとして中高生をサポートしています。ハッカソン、チーム開発、アイデアをコードで実現することが大好きです。",
            stats: [
                { value: "6+", label: "コーディング歴" },
                { value: "🏆", label: "ハッカソン優勝" },
                { value: "∞", label: "好奇心" },
            ],
            myJourney: "経歴",
            downloadResume: "履歴書をダウンロード",
        },
        projects: {
            badge: "作品",
            heading1: "注目の",
            heading2: "プロジェクト",
            description: "ゲームからWebアプリまで、私が制作したプロジェクト集です。現在進行形でさまざまなアプリ、プロダクトを開発しています。",
            categories: {
                all: "All",
                mobile: "Mobile",
                game: "Game",
                web: "Web",
                tool: "Tool",
            },
            viewAll: "GitHubですべての作品を見る",
            featured: "注目",
            viewProject: "詳細を見る",
            descriptions: {
                5: "プロンプトの書き方がわからない中高生に向けた教育ゲームです。お題のプロダクトを再現するプロンプトを書き、AIがどれだけ忠実に再現できるかをスコアで競います。フィードバックと再挑戦の機会により、効果的なプロンプトエンジニアリングを楽しく学べます。GDGoC Hackathon 2026でAI賞を受賞しました。",
                6: "スニーカーマニア向けのデザイン重視のサイトをゼロから制作しました。Figmaでワイヤーフレーム・デザインカンプを作成し、デザインの4原則（反復・近接・対比・整列）を意識したUIを、HTML/CSS/JSで実装しました。",
                2: "5秒間で館の構造やギミックを記憶し、暗闇の中を進む記憶探索脱出ゲームです。C#での物理演算とパーティクルシステム、そしてシェーダーを実装しました。また、ピクセルで表される世界観を重視し、Asperiteというドット絵ツールを使用し、キャラ画像や背景画像を手書きしました。",
                7: "友人とオンラインでテトリス対戦をしたいという動機から生まれたリアルタイム対戦テトリスゲームです。WebSocketを使って2人でリアルタイム対戦できます。",
                1: "Flutter + Dartで開発したハッカソン作品です。ニュース記事をスクレイピングしGemini APIで要約、音声ポッドキャストに変換するアプリです。GDGC Summer Hackathon 2024で観客賞を受賞しました。",
                4: "YouTubeのwatch-history.htmlファイルから総視聴時間を計算するPythonツールです。自分の視聴習慣を分析できます。",
                3: "このポートフォリオサイト本体！Next.jsで構築し、ASCIIテキストアニメーション、ディザリング背景、スタイリッシュなサイバーパンクデザインが特徴です。",
            },
        },
        skills: {
            badge: "スキル",
            heading1: "私の",
            heading2: "強み",
            description: "アイデアを形にするために使う技術とツール。",
            proficiency: "熟練度",
            expertise: "得意分野",
            categories: [
                { name: "ゲーム開発", icon: "🎮", skills: ["Unity", "C#", "Game Design", "Physics", "Shaders"] },
                { name: "Web開発", icon: "🌐", skills: ["React", "Next.js", "TypeScript", "Tailwind", "Node.js"] },
                { name: "クリエイティブコーディング", icon: "🎨", skills: ["p5.js", "Generative Art", "WebGL", "Canvas", "Animations"] },
                { name: "ツール・その他", icon: "🛠️", skills: ["Git", "Figma", "VS Code", "Blender", "Notion"] },
            ],
            funStats: [
                { icon: "☕", value: "500+", label: "コーヒーの杯数" },
                { icon: "🐛", value: "∞", label: "潰したバグ" },
                { icon: "💡", value: "24/7", label: "学習モード" },
            ],
        },
        contact: {
            badge: "お問い合わせ",
            heading1: "さあ",
            heading2: "繋がりましょう",
            description: "プロジェクトのアイデアがある方も、ただ話したい方も、気軽にご連絡ください。新しい機会にいつでも興味があります。",
            contactInfo: "連絡先",
            available: "新規プロジェクト受付中",
            formHeading: "Kei Tanakaへメッセージを送る",
            name: "お名前",
            email: "メールアドレス",
            message: "メッセージ",
            send: "送信する",
            success: "✓ メッセージを送信しました！すぐにご返信します。",
            error: "✗ 送信に失敗しました。もう一度お試しいただくか、直接メールでご連絡ください。",
        },
        footer: {
            tagline: "インタラクティブな体験とWebアプリを制作しています。常に学び、常に創り続けています。",
            quickLinks: "クイックリンク",
            connect: "リンク",
            copyright: (year: number) => `© ${year} aiouku. All rights reserved.`,
            builtWith: "制作環境：",
        },
        journey: {
            backToAbout: "自己紹介に戻る",
            highlights: "ハイライト",
            links: "リンク",
            backToHome: "ホームに戻る",
            items: {
                "life-is-tech": {
                    title: "Life is Tech!で働く",
                    description: "中高生へのIT教育を提供するメンターとして勤務を開始しました。",
                    detailedDescription: `Life is Tech!のメンターとして、中学・高校生のプログラミングの旅をサポートしています。Web開発やUnityを使ったゲーム開発を教え、生徒が初めてのアプリを作るお手伝いをしています。

この役割から、明確なコミュニケーションとタスクを分解する重要性を学びました。コーディング経験ゼロの生徒が自分でプロジェクトを作れるようになる姿を見ることで、やりがいを感じております。`,
                    highlights: [
                        "Web開発とUnityを指導",
                        "20名以上の生徒をメンタリング",
                        "カリキュラム教材の開発",
                    ],
                    links: [] as { label: string; url: string }[],
                },
                "gdsc-hackathon": {
                    title: "GDSCハッカソン優勝",
                    description: "News PodcasterアプリでGDSC Japan Summer Hackathon 2024のオーディエンス賞を受賞しました。",
                    detailedDescription: `GDSC Japan Summer Hackathonで、チームはNews Podcasterを制作しました。AIを使ってニュース記事をパーソナライズされたポッドキャストエピソードに変換するアプリです。

NLPで記事を要約し、テキスト読み上げで音声コンテンツを生成します。ユーザーは音声、速度、ポッドキャストの長さをカスタマイズできます。

参加者の投票によるオーディエンス賞を受賞し、アイデアと実装の素晴らしい評価を得ました。`,
                    highlights: [
                        "AIニュース→ポッドキャスト変換機能の開発",
                        "48時間のハッカソンスプリント",
                        "NLP要約とTTSの実装",
                    ],
                    links: [{ label: "プロジェクトGitHub", url: "https://github.com/aiouku/news_podcaster" }],
                },
                "waseda-university": {
                    title: "早稲田大学に入学",
                    description: "早稲田大学基幹理工学部情報理工学科に所属しました。",
                    detailedDescription: `日本トップクラスの私立大学である早稲田大学で情報工学の授業を受けています。

アルゴリズム、データ構造、コンピュータアーキテクチャ、ソフトウェアエンジニアリングを学んでいます。授業外では、プログラミングコンテストやキャンパス内のテクノロジーコミュニティに積極的に参加しています。`,
                    highlights: [
                        "コンピュータサイエンス専攻",
                        "コミュニティに積極参加",
                        "プログラミングコンテストに参加中",
                    ],
                    links: [] as { label: string; url: string }[],
                },
                "started-programming": {
                    title: "プログラミング開始",
                    description: "14歳でコーディングの旅を始め、Pythonを学びゲーム用ツールを作りました。",
                    detailedDescription: `14歳でPythonで初めてのコードを書きました。最初はプレイしていたゲームの繰り返し作業を自動化する簡単なスクリプトから始まりました。

そこからDiscordのbotだったり、何かを作ることの楽しさを発見しました。Web開発、Unityを使ったゲーム開発へと進み、デジタルの体験を作ることに夢中になりました。

これがキャリアの方向性と情熱を形作る旅の始まりでした。`,
                    highlights: [
                        "最初の言語：Python",
                        "ゲーム自動化ツールの制作",
                        "オンラインリソースで独学",
                    ],
                    links: [] as { label: string; url: string }[],
                },
            },
        },
    },
};
