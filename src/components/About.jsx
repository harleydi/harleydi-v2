import React from "react";
import "../styles/about.scss";
import homepic from "../assets/images/adventureMe.jpg";

export default function About() {
  return (
    <div className="aboutSection">
      <div className="pic">
        <img src={homepic} alt="pic" />
      </div>
      <div className="introSection">
        <h3 className="introTitle">a little about disney</h3>
        <p className="intro">
          I am a motivated software engineer who is eager to expand my knowledge
          and connections to make a technical impact in the world. Over time, I
          gained skills to maintain focus, attention to detail and
          problem-solving skills. I have a passion for adventure, experiencing
          different cultures and ways of life. I plan to use these skills and
          dedication to help to make dynamic and user-friendly web applications
          while exploring the world of development.
        </p>
      </div>
    </div>
  );
}
