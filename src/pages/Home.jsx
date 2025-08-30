import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="w-full h-screen flex items-start justify-between p-8 text-[#cfcfcf] bg-[#131313]">
        <nav className="flex items-center">
          <img
            src="/logo.svg"
            alt="logo"
            className="w-32 [filter:brightness(0)_sepia(0)_saturate(0)_invert(81%)_grayscale(0%)_contrast(92%)]"
          />
        </nav>
        <div className="flex space-x-6">
          <Link
            to="/projects"
            className="text-[4vw] w-fit border-3 rounded-full px-10 py-0 font-[font1]"
          >
            PROJECTS
          </Link>
          <Link
            to="/about"
            className="text-[4vw] w-fit border-3 rounded-full px-16 py-0 font-[font1]"
          >
            ABOUT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
