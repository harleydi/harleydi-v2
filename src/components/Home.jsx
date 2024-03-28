import React from "react";
import "../styles/home.scss";
import homepic from "../assets/images/adventureMe.jpg";
import { Link } from "react-router-dom";
import { MCTS } from "../PortfolioData";

export default function Home() {
  console.log(MCTS)
  return (
    <div className="homepage">
      <div className="info">
        <p className="nameTitle">Disney Harley</p>
        <h5 className="roleTitle">Full-Stack Developer</h5>
        <Link to="/work"><button>PROJECTS</button></Link>
      </div>
    </div>
  );
}
