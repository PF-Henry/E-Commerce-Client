import React from "react";
import { FaHeart, FaBars } from "react-icons/fa";

const Main = ({ handleToggleSidebar }) => {
  return (
    <main>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <header>
        <div className="social-bagdes">
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="GitHub stars"
              src="https://img.shields.io/github/stars/azouaoui-med/react-pro-sidebar?style=social"
            />
          </a>
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="GitHub forks"
              src="https://img.shields.io/github/forks/azouaoui-med/react-pro-sidebar?style=social"
            />
          </a>
        </div>
      </header>

      <footer>
        <small>
          © {new Date().getFullYear()} made with{" "}
          <FaHeart style={{ color: "red" }} /> by -{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://azouaoui.netlify.com"
          >
            Mohamed Azouaoui
          </a>
        </small>
        <br />
      </footer>
    </main>
  );
};

export default Main;
