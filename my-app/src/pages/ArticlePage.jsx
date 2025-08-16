import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ARTICLE, AUTHOR, PAGES } from "../data";
import ReactionGroup from "../components/ReactionGroup";
import Comment from "../components/Comment";

const COMMENTS_PER_PAGE = 2;

export default function ArticlePage() {
  const [postReaction, setPostReaction] = useState(null);
  const [postReactions, setPostReactions] = useState({
    like: 42,
    love: 156,
    angry: 8,
    sad: 12
  });

  const [comments, setComments] = useState(PAGES[0].comments);
  const [commentReactions, setCommentReactions] = useState(() =>
    Object.fromEntries(
      PAGES[0].comments.map((c) => [
        c.id,
        { ...c.reactionCounts }
      ])
    )
  );

  // Pagination for comments
  const [commentPage, setCommentPage] = useState(1);
  const totalCommentPages = Math.ceil(comments.length / COMMENTS_PER_PAGE);
  const shownComments = comments.slice(
    (commentPage - 1) * COMMENTS_PER_PAGE,
    commentPage * COMMENTS_PER_PAGE
  );

  // Write-a-comment
  const [newComment, setNewComment] = useState("");
  function handleAddComment() {
    const text = newComment.trim();
    if (!text) return;
    const i = comments.length;
    const newCommentObj = {
      id: `c-${i + 1}`,
      author: `Commenter ${i + 1}`,
      authorId: `commenter-${i + 1}`,
      authorImage:
        [
          "https://randomuser.me/api/portraits/women/50.jpg",
          "https://randomuser.me/api/portraits/men/51.jpg",
          "https://randomuser.me/api/portraits/women/52.jpg",
          "https://randomuser.me/api/portraits/men/53.jpg",
          "https://randomuser.me/api/portraits/women/54.jpg",
          "https://randomuser.me/api/portraits/men/55.jpg",
          "https://randomuser.me/api/portraits/women/56.jpg",
          "https://randomuser.me/api/portraits/men/57.jpg"
        ][i % 8],
      authorBio:
        [
          "Frontend enthusiast interested in UI performance and accessibility.",
          "Full-stack developer who loves scalable solutions and cloud integrations.",
          "React specialist and testing advocate. Always learning new best practices.",
          "Web developer passionate about developer tooling and team productivity.",
          "Backend engineer focused on APIs and data modeling.",
          "Design-minded coder bridging UX and engineering.",
          "DevOps practitioner automating deployments.",
          "Mobile-first developer, crafting PWA experiences."
        ][i % 8],
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      }),
      text: text,
      reactionCounts: { like: 0, love: 0, angry: 0, sad: 0 },
      likes: 0,
      dislikes: 0
    };
    setComments(prev => [...prev, newCommentObj]);
    setCommentReactions(prev => ({
      ...prev,
      [newCommentObj.id]: { ...newCommentObj.reactionCounts }
    }));
    setNewComment("");
    setCommentPage(Math.ceil((comments.length + 1) / COMMENTS_PER_PAGE));
  }

  // Post reactions: only one can be chosen per user
  const handlePostReaction = (r) => {
    if (!postReaction) {
      setPostReaction(r);
      setPostReactions((prev) => ({
        ...prev,
        [r]: prev[r] + 1
      }));
    }
  };

  // Comment reactions: increase count, unclick does nothing
  const handleCommentReaction = (commentId, key) => {
    setCommentReactions((prev) => ({
      ...prev,
      [commentId]: {
        ...prev[commentId],
        [key]: prev[commentId][key] + 1
      }
    }));
  };

  return (
    <div className="container">
      <nav className="breadcrumbs">
        <a href="#" onClick={e => e.preventDefault()}>{ARTICLE.section}</a>
        <span>›</span>
        <a href="#" onClick={e => e.preventDefault()}>{ARTICLE.subSection}</a>
      </nav>
      {/* Website About Headline */}
      <div className="site-headline">
        <h2>
          Welcome to the React Blog Showcase! Explore practical tips, patterns, and user discussions on scaling modern React applications.
        </h2>
      </div>
      {/* Entire post box */}
      <div className="card main-post-card">
        <figure className="hero" style={{ marginTop: "0", marginBottom: "24px" }}>
          <img src={ARTICLE.image} alt="" />
        </figure>
        <div className="author-row">
          <Link
            to={`/author/${AUTHOR.id}`}
            state={{
              name: AUTHOR.name,
              image: AUTHOR.image,
              bio: AUTHOR.bio
            }}
            className="avatar"
            aria-label={`View ${AUTHOR.name}'s profile`}
            style={{
              backgroundImage: `url(${AUTHOR.image})`,
              backgroundSize: "cover"
            }}
          ></Link>
          <div className="author-meta">
            <Link
              to={`/author/${AUTHOR.id}`}
              state={{
                name: AUTHOR.name,
                image: AUTHOR.image,
                bio: AUTHOR.bio
              }}
              className="author-link"
            >
              {AUTHOR.name}
            </Link>
            <div className="date">{ARTICLE.date}</div>
          </div>
        </div>
        <h1 className="title" style={{ color: "#7a0a0a", marginBottom: "8px", fontWeight: "800", fontSize: "32px", textAlign: "left" }}>
          {ARTICLE.title}
        </h1>
        <p className="subtitle" style={{ color: "#444", marginBottom: "20px", fontSize: "18px", textAlign: "left" }}>
          {ARTICLE.caption}
        </p>
        <article className="body" style={{
          fontFamily: '"Georgia", "Times New Roman", serif',
          fontSize: "20px",
          margin: "0 0 28px 0",
          color: "#262626",
          lineHeight: "1.7",
          textAlign: "left"
        }}>
          {ARTICLE.body}
        </article>
        <ReactionGroup
          value={postReaction}
          onChange={handlePostReaction}
          reactionCounts={postReactions}
          showPercents={true}
          disabled={!!postReaction}
        />
        <hr className="rule" style={{ margin: "28px 0 20px 0" }} />

        {/* Comments Section */}
        <div className="comments-section">
          <div className="comments-header" style={{ marginBottom: "24px" }}>
            <strong style={{ fontSize: "20px" }}>{comments.length} Comments</strong>
          </div>
          {/* Write-a-comment UI */}
          <div style={{ marginBottom: "24px" }}>
            <textarea
              placeholder="Write your comment..."
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                resize: "none",
                fontSize: "14px",
                fontFamily: "inherit",
                outline: "none"
              }}
              rows="3"
            />
            <button
              onClick={handleAddComment}
              style={{
                marginTop: "8px",
                padding: "8px 16px",
                backgroundColor: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "14px"
              }}
            >
              Post Comment
            </button>
          </div>
          {shownComments.map((c, idx) => (
            <Comment
              key={c.id}
              data={{
                ...c,
                reactionCounts: commentReactions[c.id],
                index: (commentPage - 1) * COMMENTS_PER_PAGE + idx
              }}
              onReaction={key => handleCommentReaction(c.id, key)}
            />
          ))}
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "24px" }}>
            {[...Array(totalCommentPages)].map((_, i) => (
              <button
                key={i}
                className="page-btn"
                style={{
                  background: commentPage === i + 1 ? "#e5e7eb" : "#fff",
                  fontWeight: commentPage === i + 1 ? "700" : "400"
                }}
                onClick={() => setCommentPage(i + 1)}
                aria-current={commentPage === i + 1 ? "page" : undefined}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}