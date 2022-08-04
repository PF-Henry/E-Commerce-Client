import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import { VscAccount, VscGithubInverted } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import gustavoImg from "../../assets/gustavo.jpg";
import richyImg from "../../assets/Richy.jpg";
import sneiderImg from "../../assets/Sneider.jpg";
import victorImg from "../../assets/Victor.jpg";
import gerardoImg from "../../assets/Gerardo.jpg";
import yohanalyImg from "../../assets/Yoha.jpeg";
import "./AboutUs.css";

const AboutUs = () => {
  const TEAM = [
    {
      name: "Gerardo Graziano",
      github: "https://github.com/gerardograziano",
      linkedin: "https://www.linkedin.com/in/gerardo-graziano-35177799/",
      img: gerardoImg,
    },
    {
      name: "Gustavo Leyria",
      github: "https://github.com/gustavoleyria",
      linkedin: "https://www.linkedin.com/in/gustavo-leyria-1980/",
      img: gustavoImg,
    },
    {
      name: "Ricardo Vargas",
      github: "https://github.com/Vartro09",
      linkedin:
        "https://www.linkedin.com/in/ricardo-andr%C3%A9s-vargas-n%C3%A1jar-%F0%9F%87%A8%F0%9F%87%B7-313573194/?midToken=AQESPCuIWlCs0A&midSig=1Msje_T5y-pWk1&trk=eml-jobs_applicant_applied-header-27-profile&trkEmail=eml-jobs_applicant_applied-header-27-profile-null-cnxwcf%7El58al42q%7Ee5-null-neptune%2Fprofile%7Evanity%2Eview",
      img: richyImg,
    },
    {
      name: "Sneider Gallegos",
      github: "https://github.com/Satronic",
      linkedin: "https://www.linkedin.com/in/sneider-gallegos-marin/",
      img: sneiderImg,
    },
    {
      name: "Victor Arias",
      github: "https://github.com/VicTips",
      linkedin: "https://www.linkedin.com/in/victips/",
      img: victorImg,
    },
    {
      name: "Yohanaly Palma",
      github: "https://github.com/Ypalma876",
      linkedin: "https://www.linkedin.com/in/yohanaly-palma/?locale=en_US",
      img: yohanalyImg,
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="container-md min-vh">
        <div className="fs-1 text-start formH1-2 mb-3 pb-xxl-5">Our Team</div>
        <div className="d-flex flex-wrap gap-5 pb-5 justify-content-center align-items-center">
          {TEAM.map((member, index) => (
            <div key={index} className="member-card">
              <div className="member-photo">
                {member.img === "" ? (
                  <VscAccount size={"10rem"} />
                ) : (
                  <img src={member.img} alt={member.name} />
                )}
              </div>
              <div className="fw-bold mt-1 fs-5 member-name">{member.name}</div>
              <div className="d-flex align-items-center justify-content-center gap-2 mt-1">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-aqua rounded-circle text-purple btn-redes d-flex align-items-center justify-content-center"
                >
                  <VscGithubInverted size={"2rem"} />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
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
