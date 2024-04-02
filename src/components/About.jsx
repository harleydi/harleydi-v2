import React from "react";
import "../styles/about.scss";
import homepic from "../assets/images/adventureMe.jpg";
import Marquee from "react-fast-marquee";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { SiExpress, SiRubyonrails, SiMysql, SiPython, SiMongodb } from "react-icons/si";

const languages = ['Html']

export default function About() {
  return (
    <div className="aboutSection">
      <div className="intro-container">
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
      <Marquee className="marquee">
        <SiMongodb className="icon" />
        <SiExpress className="icon" />
        <FaReact className="icon" />
        <FaNodeJs className="icon" />
        <SiRubyonrails className="icon" />
        <SiMysql className="icon" />
        <SiPython className="icon" />
        <IoLogoJavascript className="icon" />
      </Marquee>
    </div>
  );
}
