import React from "react";
import "../Intro/Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import { FloatingDiv } from "../FloatingDIv/FloatingDiv";
// import {motion} from 'framer-motion';

const Intro = () => {
  // const transition = {duration: 2, type: 'spring'}

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi I Am</span>
          <span>Zion Teasley</span>
          <span>
            Full-Stack Web Devoloper with experience in Web Design
            <br />
            and development. I specialize in UI & UX Design.
          </span>
        </div>
        <a href="#contactDiv">
          <button className="button i-button">Hire Me</button>
        </a>
        <div className="i-icons">
          <a href="https://github.com/ZTeasley">
            <img src={Github} alt="" />
          </a>

          <a href="https://www.linkedin.com/in/zion-teasley-336109259/">
            <img src={LinkedIn} alt="" />
          </a>

          <a href="https://instagram.com/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />

        <div style={{ top: "-4%", left: "68%" }} className="floating-div">
          <FloatingDiv image={Crown} txt1={"Web"} txt2={"Developer"} />
        </div>

        <div style={{ top: "18.2rem", left: "2rem" }} className="floating-div">
          <FloatingDiv image={thumbup} txt1={"UI & UX"} txt2={"Design"} />
        </div>

        {/* blur div */}

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>

        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-8rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
