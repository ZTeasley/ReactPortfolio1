import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "../Services/resume.odt";

const Services = () => {
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span>My</span>
        <span>Specialties</span>
        <span>
          Lorem ipsum dolor sit, amet consectetur
          <br />
          adipisicing elit. Mollitia non quia enim iure saepe.
        </span>

        <a href={Resume} download>
          <button className="button s-btton">Download Resume</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>

      </div>
      {/* right side */}
      <div className="cards">
        <div style={{ left: "22rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Adobe XD, Photoshop"}
          />
        </div>

        {/* second card */}

        <div style={{ top: "0rem", left: "8rem" }}>
          <Card
            emoji={Glasses}
            heading={"Front-End"}
            detail={"HTML, CSS, SASS, JavaScript, ReactJS"}
          />
        </div>

        {/* third card */}

        <div style={{ top: "0rem", left: "36rem" }}>
          <Card
            emoji={Humble}
            heading={"UX & UI"}
            detail={"Material UI, Chakra UI, Bootstrap,"}
          />
        </div>

        <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>

      </div>
    </div>
  );
};

export default Services;
