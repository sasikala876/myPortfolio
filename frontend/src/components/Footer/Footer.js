import React from "react";
import { FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import './footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillPhone } from "react-icons/ai";
import { IoMailSharp } from "react-icons/io5";
import { ImLocation2 } from "react-icons/im";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col md={4} sm={12}>
                        <h3 className="footer-subtitle">Sasikala's Portfolio</h3>
                        <p id="tq-msg">Thank you for visiting my personal <span className="text-span">portfolio website.Connect with me </span>over socials.</p>
                    </Col>
                    <Col md={4} sm={12}>
                        <h3 className="footer-subtitle">Quick Links</h3>
                        <ul className="main-lists">
                            <li className="bookmark"><a href="#Home" className="scroll-to-page"><IoIosArrowDroprightCircle className="arrow" />Home</a></li>
                            <li className="bookmark"><a href="#About" className="scroll-to-page"><IoIosArrowDroprightCircle className="arrow" />About</a></li>
                            <li className="bookmark"><a href="#Skills" className="scroll-to-page"><IoIosArrowDroprightCircle className="arrow" />Skills</a></li>
                            <li className="bookmark"><a href="#Projects" className="scroll-to-page"><IoIosArrowDroprightCircle className="arrow" />Projects</a></li>
                            <li className="bookmark"><a href="#Contact" className="scroll-to-page"><IoIosArrowDroprightCircle className="arrow" />Contact</a></li>
                        </ul>
                    </Col>
                    <Col md={4} sm={12}>
                        <h3 className="footer-subtitle">Contact Info</h3>
                        <ul className="main-lists">
                            <li className="contact-list"><AiFillPhone className="contact-icon" /><span>+91 8760368450</span></li>
                            <li className="contact-list"><IoMailSharp className="contact-icon" /><span>sasikala850835@gmail.com</span></li>
                            <li className="contact-list"><ImLocation2 className="contact-icon" /><span>Tamil Nadu,India-637211</span></li>
                            <li className="contact-list-social">
                                <ul className="social-lists">
                                    <li className="social-icons-list"><a href="https://www.linkedin.com/in/sasikala-s-4099271b1/" target="_blank"><div className="rounded-icon"><FaLinkedin className="media-icon" /></div></a></li>
                                    <li className="social-icons-list"><a href="https://github.com/sasikala876" target="_blank"><div className="rounded-icon"><BsGithub className="media-icon" /></div></a></li>
                                    <li className="social-icons-list"><a href="https://twitter.com/sasikala850835" target="_blank"><div className="rounded-icon"><AiOutlineTwitter className="media-icon" /></div></a></li>
                                    <li className="social-icons-list"><a href="https://web.telegram.org/z/#1316051665" target="_blank"><div className="rounded-icon"><FaTelegramPlane className="media-icon" /></div></a></li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="bottom-text">
                    <p>Designed With ❤️ By <span id="my-name"><a href="https://www.linkedin.com/in/sasikala-s-4099271b1/" target="_blank">Sasikala</a></span></p>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;