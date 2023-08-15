import React, { useState } from "react";
import './header.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { BsFillPaletteFill } from "react-icons/bs";
import ModalForPalette from './Modal';

const Header = ({ themeGetter, theme, setTheme }) => {
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [activeHome, setActiveHome] = useState(true);
  const [activeAbout, setActiveAbout] = useState(false);
  const [activeSkills, setActiveSkills] = useState(false);
  const [activeProject, setActiveProject] = useState(false);
  const [activeContact, setActiveContact] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const applyBorderBottom = () => {
    if (window.scrollY >= 0 && window.scrollY <= 549) {
      setActiveHome(true);
      setActiveAbout(false);
      setActiveSkills(false);
      setActiveProject(false);
      setActiveContact(false);
    }
    else if (window.scrollY >= 550 && window.scrollY <= 1145) {
      setActiveAbout(true);
      setActiveHome(false);
      setActiveSkills(false);
      setActiveProject(false);
      setActiveContact(false);
    }
    else if (window.scrollY >= 1146 && window.scrollY <= 1760) {
      setActiveSkills(true);
      setActiveHome(false);
      setActiveAbout(false);
      setActiveProject(false);
      setActiveContact(false);
    }
    else if (window.scrollY >= 1761 && window.scrollY <= 2349) {
      setActiveProject(true);
      setActiveHome(false);
      setActiveAbout(false);
      setActiveSkills(false);
      setActiveContact(false);
    }
    else if (window.scrollY >= 2350) {
      setActiveContact(true);
      setActiveHome(false);
      setActiveAbout(false);
      setActiveSkills(false);
      setActiveProject(false);
    }
  }
  window.addEventListener('scroll', applyBorderBottom);

  const changeTheme = (theme) => {
    console.log(theme);
    themeGetter(!theme);
  }

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header-menus">
            <div className="lists">
              <div className="logo menu">
                <p id="logo"><a href="#Home">Portfolio</a></p>
              </div>
              <div className="menus">
                <ul className="header-lists">
                  <li className="list-item"><a href="#Home" className={activeHome ? "active_menu" : ""} id="menu">Home</a></li>
                  <li className="list-item"><a href="#About" className={activeAbout ? "active_menu" : ""} id="menu">About</a></li>
                  <li className="list-item"><a href="#Skills" className={activeSkills ? "active_menu" : ""} id="menu">Skills</a></li>
                  <li className="list-item"><a href="#ProjectsHome" className={activeProject ? "active_menu" : ""} id="menu">Projects</a></li>
                  <li className="list-item"><a href="#Contact" className={activeContact ? "active_menu" : ""} id="menu">Contact</a></li>
                  <li className="list-item">

                    <input type="checkbox" onChange={() => changeTheme(theme)} checked={theme ? "true" : ""} />
                  </li>
                  <li className="list-item"> <BsFillPaletteFill className="palette" onClick={() => setModalOpen(true)} /></li>
                </ul>
              </div>
              <div className="ham-menu">
                {
                  toggle ? <RxCross1 onClick={() => { setShow(false); setToggle(false) }} /> : <GiHamburgerMenu onClick={() => { setShow(true); setToggle(true) }} />
                }
              </div>
            </div>
            {
              show ? (
                <div className="ham-lists">
                  <ul >
                    <li className="list-item"><a href="#Home" className={activeHome ? "active_menu" : ""} onClick={() => { setShow(false); setToggle(false) }}>Home</a></li>
                    <li className="list-item"><a href="#About" className={activeAbout ? "active_menu" : ""} onClick={() => { setShow(false); setToggle(false) }}>About</a></li>
                    <li className="list-item"><a href="#Skills" className={activeSkills ? "active_menu" : ""} onClick={() => { setShow(false); setToggle(false) }}>Skills</a></li>
                    <li className="list-item"><a href="#Projects" className={activeProject ? "active_menu" : ""} onClick={() => { setShow(false); setToggle(false) }}>Projects</a></li>
                    <li className="list-item"><a href="#Contact" className={activeContact ? "active_menu" : ""} onClick={() => { setShow(false); setToggle(false) }}>Contact</a></li>
                  </ul>
                </div>
              ) : " "
            }
          </div>
        </div>
      </div>
      {modalOpen ? <ModalForPalette modalOpen={modalOpen} setModalOpen={setModalOpen} /> : ""}
    </>
  )
}
export default Header;