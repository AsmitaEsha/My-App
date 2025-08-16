export const AUTHOR = {
  id: "author-1",
  name: "Author Name",
  image:
    "https://via.placeholder.com/120x120.png?text=AN" // placeholder avatar
};

export const ARTICLE = {
  section: "Section",
  subSection: "Sub-section",
  title: "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
  caption:
    "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
  hero:
    "https://via.placeholder.com/1000x450/7a0a0a/ffffff.png?text=Hero+Image",
  date: "7 January 2025"
};

const makeComment = (i) => ({
  id: `c-${i}`,
  author: "Author Name",
  date: "10 February 2025",
  text:
    "Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor.",
  reaction: null, // "like" | "love" | "angry" | "sad"
  likes: 12,
  dislikes: 1
});

export const PAGES = [
  {
    id: 1,
    body:
      "Lorem Ipsum Dolor ".repeat(70).trim(),
    comments: [makeComment(1), makeComment(2)]
  },
  {
    id: 2,
    body:
      "Page 2: ".concat("Lorem Ipsum Dolor ".repeat(50)).trim(),
    comments: [makeComment(3)]
  },
  {
    id: 3,
    body:
      "Page 3: ".concat("Lorem Ipsum Dolor ".repeat(40)).trim(),
    comments: [makeComment(4), makeComment(5), makeComment(6)]
  }
];
