import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactionGroup from "./ReactionGroup";

export default function Comment({ data, onReaction }) {
  const {
    author,
    authorId,
    authorImage,
    authorBio,
    date,
    text,
    reactionCounts,
    index
  } = data;

  // Local reaction state for immediate UI update
  const [localReactions, setLocalReactions] = useState({ ...reactionCounts });
  const [activeReactions, setActiveReactions] = useState({
    like: false,
    love: false,
    angry: false,
    sad: false
  });

  function handleReaction(key) {
    setLocalReactions(prev => ({
      ...prev,
      [key]: activeReactions[key] ? prev[key] - 1 : prev[key] + 1
    }));
    setActiveReactions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
    if (onReaction) onReaction(key);
  }

  return (
    <div className="comment comment-blue">
      <Link
        to={`/author/${authorId}`}
        state={{ name: author, image: authorImage, bio: authorBio }}
        className="avatar"
        aria-label={`View ${author}'s profile`}
        style={{ backgroundImage: `url(${authorImage})`, backgroundSize: "cover" }}
      ></Link>
      <div className="comment-main">
        <div className="comment-head">
          <div className="meta">
            <Link
              to={`/author/${authorId}`}
              state={{ name: author, image: authorImage, bio: authorBio }}
              className="comment-author"
              style={{ color: "#2563eb", textDecoration: "underline", fontWeight: "700" }}
            >
              {author}
            </Link>
            <span className="comment-date"> {date}</span>
          </div>
        </div>
        <p className="comment-text">{text}</p>
        <div className="comment-actions">
          <button className="link-subtle">Reply</button>
        </div>
        <ReactionGroup
          compact
          reactionCounts={localReactions}
          activeReactions={activeReactions}
          onCommentReaction={handleReaction}
          showPercents={false}
        />
        <div className="comment-reaction-counts">
          Like: {localReactions.like} &nbsp; Love: {localReactions.love} &nbsp; Angry: {localReactions.angry} &nbsp; Sad: {localReactions.sad}
        </div>
      </div>
    </div>
  );
}