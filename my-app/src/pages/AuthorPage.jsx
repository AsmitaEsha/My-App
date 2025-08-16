import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";

export default function AuthorPage() {
  const { id } = useParams();
  const loc = useLocation();
  const name = loc.state?.name || "Author";
  const image =
    loc.state?.image ||
    "https://via.placeholder.com/200x200.png?text=Author";
  const bio = loc.state?.bio || "No bio available.";

  return (
    <div className="container author-page">
      <Link to="/" className="link-subtle">
        ← Back to article
      </Link>

      <div className="author-card">
        <img src={image} alt={name} className="author-photo" />
        <div className="author-details">
          <h2>{name}</h2>
          <p className="muted">Profile ID: {id}</p>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
}