import React from "react";
import { Link } from "react-router-dom";
import ReactionGroup from "./ReactionGroup";

export default function Comment({ data, onReaction, activeReaction }) {
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
          reactionCounts={reactionCounts}
          activeCommentReaction={activeReaction}
          onCommentReaction={onReaction}
          showPercents={false}
        />
        <div className="comment-reaction-counts">
          Like: {reactionCounts.like} &nbsp; Love: {reactionCounts.love} &nbsp; Angry: {reactionCounts.angry} &nbsp; Sad: {reactionCounts.sad}
        </div>
      </div>
    </div>
  );
}