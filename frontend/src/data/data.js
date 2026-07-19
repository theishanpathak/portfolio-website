export const profileData = {
  name: "Ishan Pathak",
  title: "Full-Stack Developer",
  bio: "Senior CS student passionate about building web applications and creating solutions that are accessible and user-friendly. I enjoy tackling challenges, collaborating with others, and learning new technologies along the way.",
  email: "pathakishan333@gmail.com",
  github: "https://github.com/theishanpathak",
  linkedin: "https://www.linkedin.com/in/ishan-pathak333/"
};


export const projectsData = [
  {
    id: 1,
    title: "CommitMate ⚙️",
    description: "Published Python CLI tool that generates Conventional Commits messages from staged git changes using a local LLM (Ollama) — no API keys, no cloud calls. Features structured JSON validation, retry logic, and an interactive accept/edit/cancel flow.",
    technologies: ["Python", "Ollama", "Rich", "GitHub Actions", "PyPI"],
    githubUrl: "https://github.com/theishanpathak/commitmate",
    liveUrl: "https://pypi.org/project/commitmate/",
    imageUrl: "commitmate.png"
  },
  {
    id: 2,
    title: "Sift 🔍",
    description: "AI-powered startup due diligence agent that researches a company in real time and generates a structured investment brief — market analysis, competitive landscape, founder background, and risk flags — in seconds. Combines live web research with LLM synthesis instead of relying on stale training data.",
    technologies: ["FastAPI", "GPT-4o mini", "Tavily API", "React", "Python", "Render"],
    githubUrl: "https://github.com/theishanpathak/sift",
    liveUrl: "https://sift-7xp1.onrender.com/",
    imageUrl: "sift.png"
  },
  {
    id: 3,
    title: "FinAssist AI 💰",
    description: "AI-powered finance tutor chatbot with real-time streaming responses, conversation memory, and smart token management. Built with Server-Sent Events for ChatGPT-like word-by-word responses and PostgreSQL for persistent chat history.",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "OpenAI API", "Spring WebFlux"],
    githubUrl: "https://github.com/theishanpathak/finassist-ai",
    liveUrl: "https://finassist-ai.netlify.app/",
    imageUrl: "finassist.png"
  },
  {
    id: 4,
    title: "AI Prompt Tester 🧪",
    description: "Test OpenAI prompts and see what they actually cost in real-time. Running on $5 OpenAI credit with funny error messages when broke. Features real-time metrics, cost tracking, temperature adjustment, and dark mode UI.",
    technologies: ["Java", "Spring Boot", "OpenAI API", "Thymeleaf", "Docker", "CSS"],
    githubUrl: "https://github.com/theishanpathak/prompt-tester",
    liveUrl: "https://ai-prompt-tester-0jub.onrender.com/",
    imageUrl: "prompt-tester.png"
  },
  {
    id: 5,
    title: "VotoSecure 🗳️",
    description: "A modern, accessible online voting platform for university clubs and student organizations. Features role-based access control, anonymous voting, real-time results, and full WCAG 2.1 AA accessibility compliance.",
    technologies: ["Python", "Django", "PostgreSQL", "Chart.js", "CSS"],
    githubUrl: "https://github.com/theishanpathak/votosecure",
    liveUrl: "https://votosecure.onrender.com/", 
    imageUrl: "votosecure.png"
  },
  {
    id: 6,
    title: "ERISA Recovery Claims Management Demo",
    description: "Functional web app for analyzing insurance claims. Includes real-time claim detail views, flagging and annotation, search and filter, and admin dashboard analytics—all powered with HTMX for zero page reloads.",
    technologies: ["Python", "Django", "SQLite", "HTMX", "Alpine.js", "Chart.js", "CSS"],
    githubUrl: "https://github.com/theishanpathak/erisa_project",
    liveUrl: "https://erisa-project.onrender.com/",
    imageUrl: "erisa.png"
  },
];