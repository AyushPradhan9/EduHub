import React from "react";
import Intro from './Intro';
import logo from "../assets/EduhubLogo.png";
import "./styles/Home.css";

const Home = props => {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-12 my-3">
          <img
            src={logo}
            className="logo"
            alt="logo"
          />
        </div>
        <div className="col-12 my-3">
          <h4 className="font-weight-normal">Vizualize & Analyze To Cognize</h4>
        </div>
        <div className="col-12 my-3">
          <hr className="font-weight-bold" />
          <h4 className="font-weight-bold font-italic">An initialization to make learning easy by simplify, exemplify and intensify the vizualization of core concepts...</h4>
          <hr />
        </div>
        <div className="col-12">
          <Intro />
        </div>
      </div>
    </div>
  );
};

export default Home;
