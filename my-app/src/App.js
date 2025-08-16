import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";
import AuthorPage from "./pages/AuthorPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ArticlePage />} />
      <Route path="/author/:id" element={<AuthorPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
