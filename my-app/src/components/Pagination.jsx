import React from "react";

export default function Pagination({ total, current, onChange }) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <div className="pagination">
      {pages.map((p) => (
        <button
          key={p}
          className={`page-btn ${p === current ? "current" : ""}`}
          onClick={() => onChange(p)}
          type="button"
          aria-current={p === current ? "page" : undefined}
        >
          {p}
        </button>
      ))}
    </div>
  );
}
