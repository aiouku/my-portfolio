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
}

export const journeyData: JourneyItem[] = [
    {
        id: 1,
        slug: "life-is-tech",
        year: "2025",
        title: "Joined Life is Tech!",
        description: "Started working as a mentor providing IT education to teenagers.",
        detailedDescription: `As a mentor at Life is Tech!, I guide middle and high school students through their programming journey. I teach web development, game development with Unity, and help students build their first apps.

This role has taught me the importance of clear communication and breaking down complex concepts. Seeing students go from zero coding experience to building their own projects is incredibly rewarding.`,
        type: "work",
        highlights: [
            "Teaching web development and Unity",
            "Mentoring 20+ students",
            "Developing curriculum materials"
        ]
    },
    {
        id: 2,
        slug: "gdsc-hackathon",
        year: "2024",
        title: "Won GDSC Hackathon",
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
        image: "/images/gdsc-hackathon.jpg"
    },
    {
        id: 3,
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
        id: 4,
        slug: "started-programming",
        year: "2019",
        title: "Started Programming",
        description: "Began my coding journey at age 14, learning Python and building tools for games.",
        detailedDescription: `At 14, I wrote my first lines of code in Python. It started with simple scripts to automate repetitive tasks in games I played.

From there, I discovered the joy of building things from scratch. I moved on to web development, game development with Unity, and eventually fell in love with creating interactive experiences.

This was the beginning of a journey that would define my career path and passion.`,
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
