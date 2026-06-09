export interface JourneyItem {
    id: number;
    slug: string;
    year: string;
    title: string;
    description: string;
    detailedDescription: string;
    type: "work" | "achievement" | "education" | "milestone";
    highlights?: string[];
    links?: { label: string; url: string }[];
    image?: string;
    showInTimeline?: boolean;
}

export const journeyData: JourneyItem[] = [
    {
        id: 0,
        slug: "thirdscope-intern",
        year: "2026",
        title: "Interning at ThirdScope",
        description: "Joined ThirdScope as an intern in the Quality Assurance division, contributing to Katana — an AI business support platform.",
        detailedDescription: `In May 2026, I joined ThirdScope as an intern in the Quality Assurance division, working on Katana, an AI-powered platform designed to streamline business operations.

In QA, my work goes beyond testing — I evaluate the product from a user and business perspective, collect feedback, and help figure out what to work on next.

Working on a real product has taught me how software actually gets used.`,
        type: "work",
        highlights: [
            "Joined Quality Assurance division at ThirdScope",
            "Contributing to Katana — AI business support platform",
            "Evaluating product quality and gathering user feedback",
            "Shaping next goals and business direction from insights"
        ],
    },
    {
        id: 1,
        slug: "life-is-tech",
        year: "2025",
        title: "Joined Life is Tech!",
        description: "Started working as a mentor providing IT education to teenagers.",
        detailedDescription: `As a mentor at Life is Tech!, I guide middle and high school students through their programming journey. I teach web development, game development with Unity, and help students build their first apps.

Seeing a student ship their first project is always the best part.`,
        type: "work",
        highlights: [
            "Teaching web development and Unity",
            "Mentoring 20+ students",
            "Developing curriculum materials"
        ],
        image: "/images/LitCampspr.jpg"
    },
    {
        id: 2,
        slug: "gdsc-hackathon",
        year: "2024",
        title: "GDSC Hackathon",
        description: "Won the Audience Prize at GDSC Japan Summer Hackathon with News Podcaster app.",
        detailedDescription: `At the GDSC Japan Summer Hackathon, our team built "News Podcaster" - an app that transforms news articles into personalized podcast episodes using AI.

The app uses natural language processing to summarize articles and text-to-speech to create audio content. Users can customize the voice, pace, and length of their news podcasts.

We won the Audience Prize, voted by fellow hackers and attendees, which was an amazing validation of our idea and execution.`,
        type: "achievement",
        highlights: [
            "Built AI-powered news-to-podcast converter",
            "Won Audience Prize among 30+ teams",
            "48-hour hackathon sprint",
            "Implemented NLP summarization and TTS"
        ],
        links: [
            { label: "Project GitHub", url: "https://github.com/aiouku/news_podcaster" }
        ],
        image: "/images/gdsc-hackathon.jpg",
        showInTimeline: false,
    },
    {
        id: 3,
        slug: "gdgoc-hackathon-2026",
        year: "2026",
        title: "GDGoC Hackathon 2026",
        description: "Won the AI Prize at GDGoC Hackathon 2026 with an AI education game for students.",
        detailedDescription: `At GDGoC Hackathon 2026, our team built an educational game designed to help middle and high school students learn prompt engineering in a fun, interactive way.

Players are given a product brief and must write prompts that guide an AI to reproduce it as closely as possible. The game scores fidelity, encourages iteration, and provides feedback loops so students can improve their prompting skills naturally.

We won the AI Prize, recognizing the project's creative use of AI for education.`,
        type: "achievement",
        highlights: [
            "Won AI Prize at GDGoC Hackathon 2026",
            "Built AI prompt-engineering education game",
            "Targeted at middle and high school students",
            "Designed feedback loop for iterative learning"
        ],
        links: [
            { label: "Project GitHub", url: "https://github.com/aiouku/prompt-game" }
        ],
        image: "/images/projects/promptmaster.png",
        showInTimeline: false,
    },
    {
        id: 4,
        slug: "waseda-university",
        year: "2024",
        title: "Entered Waseda University",
        description: "Started studying Computer Science at Waseda University.",
        detailedDescription: `I began my undergraduate studies in Computer Science at Waseda University, one of Japan's leading private universities.

My coursework covers algorithms, data structures, computer architecture, and software engineering. Outside of classes, I'm actively involved in programming competitions and tech communities on campus.`,
        type: "education",
        highlights: [
            "Computer Science major",
            "Active in tech communities",
            "Participating in programming competitions"
        ]
    },
    {
        id: 5,
        slug: "started-programming",
        year: "2019",
        title: "Started Programming",
        description: "Began my coding journey at age 14, learning Python and building tools for games.",
        detailedDescription: `At 14, I wrote my first lines of code in Python. It started with simple scripts to automate repetitive tasks in games I played.

From there, I got into building things from scratch — web stuff, Unity games, whatever looked interesting.

That's where it all started.`,
        type: "milestone",
        highlights: [
            "First language: Python",
            "Built game automation tools",
            "Self-taught through online resources"
        ]
    }
];

export function getJourneyBySlug(slug: string): JourneyItem | undefined {
    return journeyData.find(item => item.slug === slug);
}

export function getAllJourneySlugs(): string[] {
    return journeyData.map(item => item.slug);
}
