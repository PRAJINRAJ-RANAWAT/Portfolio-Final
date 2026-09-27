import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import DotGround from "./DotGround";
import MusicWidget from "../music/MusicWidget";

const Layout = ({ children }) => (
  <div className="relative min-h-screen w-full bg-light dark:bg-dark text-dark dark:text-light font-space">
    <Header />
    <main className="relative z-10 pt-[100px] sm:pt-[88px]">
      <DotGround />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-6 md:px-8 lg:px-10 xl:px-6">{children}</div>
    </main>
    <MusicWidget />
    <Footer />
  </div>
);

export default Layout;
