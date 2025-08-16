import React from "react";

const options = [
  { key: "like", label: "Like", icon: "👍" },
  { key: "love", label: "Love", icon: "❤️" },
  { key: "angry", label: "Angry", icon: "😠" },
  { key: "sad", label: "Sad", icon: "😢" }
];

export default function ReactionGroup({
  value,
  onChange,
  reactionCounts,
  activeCommentReaction,
  onCommentReaction,
  compact = false,
  showPercents = true,
  disabled = false
}) {
  // Post reactions (single choice, percent)
  if (reactionCounts && !onCommentReaction) {
    const total =
      Object.values(reactionCounts).reduce((sum, n) => sum + n, 0) || 1;
    return (
      <div className={`reactions ${compact ? "reactions--compact" : ""}`}>
        {options.map((opt) => (
          <button
            key={opt.key}
            className={`reaction-btn${value === opt.key ? " active" : ""}`}
            type="button"
            disabled={disabled}
            title={opt.label}
            onClick={() => !disabled && onChange(opt.key)}
          >
            <span className="reaction-icon">{opt.icon}</span>
            <span className="reaction-label">{opt.label}</span>
            {showPercents && (
              <span className="reaction-percent">
                {Math.round((reactionCounts[opt.key] / total) * 100)}%
              </span>
            )}
          </button>
        ))}
      </div>
    );
  }

  // Comment reactions (single choice, toggle logic)
  if (reactionCounts && onCommentReaction) {
    return (
      <div className="reactions comment-reactions-row">
        {options.map((opt) => (
          <button
            key={opt.key}
            className={`reaction-btn${activeCommentReaction === opt.key ? " active" : ""}`}
            type="button"
            title={opt.label}
            onClick={() => onCommentReaction(opt.key)}
            style={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              color: activeCommentReaction === opt.key ? "#2563eb" : "#374151"
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