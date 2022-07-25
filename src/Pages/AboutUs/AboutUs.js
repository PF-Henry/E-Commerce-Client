import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import { VscAccount, VscGithubInverted } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import "./AboutUs.css";

const AboutUs = () => {
  const TEAM = [
    {
      name: "Gerardo Graziano",
      github: "https://github.com/gerardograziano",
      linkedin: "url",
    },
    { name: "Gustavo Leyria", github: "url", linkedin: "url" },
    {
      name: "Ricardo Vargas",
      github: "https://github.com/Vartro09",
      linkedin: "url",
    },
    {
      name: "Sneider Gallegos",
      github: "https://github.com/Satronic",
      linkedin: "url",
    },
    {
      name: "Victor Arias",
      github: "https://github.com/VicTips",
      linkedin: "https://www.linkedin.com/in/victips/",
    },
    {
      name: "Yohanaly Palma",
      github: "https://github.com/Ypalma876",
      linkedin: "url",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="container-md min-vh">
        <div className="fs-1 text-start formH1 mb-3 pb-xxl-5">Our Team</div>
        <div className="d-flex flex-wrap gap-5 pb-5 justify-content-center align-items-center">
          {TEAM.map((member, index) => (
            <div key={index} className="member-card">
              <div className="member-photo">
                <VscAccount size={"10rem"} />
              </div>
              <div className="fw-bold mt-1 fs-5 member-name">{member.name}</div>
              <div className="d-flex align-items-center justify-content-center gap-2 mt-1">
                <a
                  href={member.github}
                  target="_blank"
                  className="bg-aqua rounded-circle text-purple btn-redes d-flex align-items-center justify-content-center"
                >
                  <VscGithubInverted size={"2rem"} />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  className="bg-aqua rounded-circle text-purple btn-redes d-flex justify-content-center align-items-center"
                >
                  <FaLinkedinIn size={"1.4rem"} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
