import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./components/layout/Layout";
import PageTransition from "./components/layout/PageTransition";
import { useLenis } from "./hooks/useLenis";
import { useTheme } from "./context/ThemeContext";

import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  useLenis();
  const { theme } = useTheme();

  return (
    <>
      <PageTransition />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
      <ToastContainer position="bottom-right" theme={theme} />
    </>
  );
};

export default App;
