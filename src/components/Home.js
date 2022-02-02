import React from "react";
import Intro from './Intro';
import logo from "../assets/EduhubLogo.png";
import "./styles/Home.css";

const Home = props => {
  return (
    <div className="main-content">
      <header className="page-header">
        <img
          src={logo}
          className="logo"
          alt="logo"
        />
        <h1 className="header-title">Vizualize & Analyze To Cognize</h1>
      </header>
      <div className="content-sub text-center">
        An initialization to make learning easy by simplify, exemplify and intensify
        the vizualization of core concepts..
      </div>
      <div id="intro">
        <Intro />
      </div>
    </div>
  );
};

export default Home;
