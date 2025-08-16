import React from "react";

const options = [
  { key: "like", label: "Like", icon: "👍" },
  { key: "love", label: "Love", icon: "❤️" },
  { key: "angry", label: "Angry", icon: "😠" },
  { key: "sad", label: "Sad", icon: "😢" }
];

export default function ReactionGroup({
  reactionCounts,
  activeReactions,
  onCommentReaction,
  compact = false,
  showPercents = true,
}) {
  // For comments (toggle reactions, pill style, increment/decrement)
  if (reactionCounts && onCommentReaction) {
    return (
      <div className="reactions comment-reactions-row">
        {options.map((opt) => (
          <button
            key={opt.key}
            className={`reaction-btn${activeReactions && activeReactions[opt.key] ? " active" : ""}`}
            type="button"
            title={opt.label}
            onClick={() => onCommentReaction(opt.key)}
            style={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              color: activeReactions && activeReactions[opt.key] ? "#2563eb" : "#374151"
            }}
          >
            <span className="reaction-icon">{opt.icon}</span>
            <span className="reaction-label">{opt.label}</span>
          </button>
        ))}
      </div>
    );
  }

  return null;
}