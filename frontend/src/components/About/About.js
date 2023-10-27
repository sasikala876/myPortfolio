import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import './about.css';
import AboutImage from '../../images/hii_image.jpg';
import { RiUser3Fill } from "react-icons/ri";
import data from './Data.js';
import Card from "./Card";

const About = () => {
  return (
    <section id="About">
      <h3 className="aboutme__text"><span className="title__icon"><RiUser3Fill className="icon__size" /></span>About Me</h3>
      <p>My introduction</p>
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} width="100%" height="350" alt="About" />
          </div>
        </div>
        <div className="about__right">
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className="about__card-icon">{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>I am a passionate frontend developer with 1.8+ years of
            experience in frontend technologies such as HTML,CSS,JS,
            React and Redux.I am very passionate about improving my coding skills & developing applications & websites. I build webApps and websites using MERN Stack. working for myself to improve my skills. Love to build Full-Stack clones.</p>
          {/* <a href="2139749_sasikala_resume.pdf" download className="btn primary">Get Resume<AiOutlineFilePdf /></a> */}
          <a href="Resume_Sasikala.pdf" download className="btn primary">Get Resume<AiOutlineFilePdf /></a>
        </div>
      </div>
    </section>
  )
}
export default About;


