import AsmitaPhoto from "./assets/Asmita.jpg";
import hero from "./assets/coffee-laptop.jpg";

// Internet images for commenters
const commenterImages = [
  "https://randomuser.me/api/portraits/women/50.jpg",
  "https://randomuser.me/api/portraits/men/51.jpg",
  "https://randomuser.me/api/portraits/women/52.jpg",
  "https://randomuser.me/api/portraits/men/53.jpg",
  "https://randomuser.me/api/portraits/women/54.jpg",
  "https://randomuser.me/api/portraits/men/55.jpg",
  "https://randomuser.me/api/portraits/women/56.jpg",
  "https://randomuser.me/api/portraits/men/57.jpg"
];

const commenterBios = [
  "Frontend enthusiast interested in UI performance and accessibility.",
  "Full-stack developer who loves scalable solutions and cloud integrations.",
  "React specialist and testing advocate. Always learning new best practices.",
  "Web developer passionate about developer tooling and team productivity.",
  "Backend engineer focused on APIs and data modeling.",
  "Design-minded coder bridging UX and engineering.",
  "DevOps practitioner automating deployments.",
  "Mobile-first developer, crafting PWA experiences."
];

const commentTexts = [
  "This article covers every pain point my team faced scaling our React app. The advice on modular architecture and custom hooks is especially practical.",
  "Code splitting transformed our project performance! The real-world tips here are gold.",
  "TypeScript and ESLint changed how my team works together. Love the focus on developer experience!",
  "Great write-up! Curious about your thoughts on using Zustand for shared state.",
  "Testing strategies here are clear and easy to follow. Thanks for making it simple.",
  "Documentation really does make onboarding easier. How do you keep docs up to date?",
  "The section on performance optimization is very relevant for our current sprint.",
  "Would love to read more about scaling React for mobile-first projects!"
];

export const AUTHOR = {
  id: "author-1",
  name: "Asmita Esha",
  image: AsmitaPhoto,
  bio: "Asmita Esha is a software engineer and tech writer focusing on scalable web architecture, frontend frameworks, and developer experience. She’s passionate about building open, inclusive communities and sharing practical insights for aspiring engineers."
};

export const ARTICLE = {
  section: "Programming",
  subSection: "Frontend Engineering",
  title: "5 Proven Ways to Scale Your React Project",
  caption: "Practical tips, patterns, and strategies for building robust React apps that grow with your team and users.",
  image: hero,
  date: "16 August 2025",
  body: `Scaling React applications demands thoughtful architecture, attention to developer experience, and continuous performance tuning. Start by grouping related logic and UI into feature modules, which makes your codebase easier to navigate and extend. Use custom hooks for reusable logic and keep contexts focused to avoid prop drilling. Code splitting and dynamic imports can dramatically improve load times, especially for large apps with many routes. Automated testing, both unit and integration, ensures reliability as your codebase grows, while consistent documentation and tools like TypeScript, ESLint, and Prettier make collaboration smooth and error-resistant. Investing in these strategies will help you build React apps that scale gracefully from prototypes to production, delighting both developers and users. — Asmita Esha`
};

const makeComment = (i) => ({
  id: `c-${i + 1}`,
  author: `Commenter ${i + 1}`,
  authorId: `commenter-${i + 1}`,
  authorImage: commenterImages[i % commenterImages.length],
  authorBio: commenterBios[i % commenterBios.length],
  date: "15 August 2025",
  text: commentTexts[i % commentTexts.length],
  reactionCounts: { like: 5 + i, love: 2 + i, angry: i % 2, sad: 0 },
  likes: 10 + i * 2,
  dislikes: i % 2
});

export const PAGES = [
  {
    id: 1,
    body: ARTICLE.body,
    comments: Array.from({ length: 8 }, (_, i) => makeComment(i))
  }
];