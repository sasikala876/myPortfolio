import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';
import { RxCross1 } from "react-icons/rx";

const HeaderOne = () => {
  const [showToggle,setShowToggle] = useState(false);
  const [activeHome,setActiveHome] = useState(false);
  const [activeAbout,setActiveAbout] = useState(false);
  const [activeSkills,setActiveSkills] = useState(false);
  const [activeProject,setActiveProject] = useState(false);
  const [activeContact,setActiveContact] = useState(false);
  const applyBorderBottom = () =>{
    if(window.scrollY >=0 && window.scrollY <= 549){
    setActiveHome(true);
    setActiveAbout(false);
    setActiveSkills(false);
    setActiveProject(false);
    setActiveContact(false);
    }
    else if(window.scrollY >= 550 && window.scrollY <= 1145){
    setActiveAbout(true);
    setActiveHome(false);
    setActiveSkills(false);
    setActiveProject(false);
    setActiveContact(false);
    }
    else if(window.scrollY >= 1146 && window.scrollY <= 1760){
      setActiveSkills(true);
      setActiveHome(false);
      setActiveAbout(false);
      setActiveProject(false);
      setActiveContact(false);
    }
    else if(window.scrollY >= 1761 && window.scrollY <= 2349){
      setActiveProject(true);
      setActiveHome(false);
      setActiveAbout(false);
      setActiveSkills(false);
      setActiveContact(false);
    }
    else if(window.scrollY >= 2350){
      setActiveContact(true);
      setActiveHome(false);
      setActiveAbout(false);
      setActiveSkills(false);
      setActiveProject(false);
    }
  }
  window.addEventListener('scroll',applyBorderBottom);

    return(
        <div className='container'>
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#Home">Portfolio</Navbar.Brand>
        <Nav className={showToggle?"active":"no-active"}>
          <div onClick={()=>setShowToggle(!showToggle)}>
            {
          showToggle ? <RxCross1 className="cross-icon" /> : <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
            }
          </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
          <Nav>
            {/* <Nav.Link href="#Home" onClick={()=>setActiveNav("#Home")} className={activeHome ? "active_menu" : "nav-link" && activeNav === "#Home" ? "active" : ""}>Home</Nav.Link> */}
            <Nav.Link href="#Home" className={activeHome ? "active_menu" : ""}>Home</Nav.Link>
            <Nav.Link href="#About" className={activeAbout ? "active_menu" : ""}>About</Nav.Link>
            <Nav.Link href="#Skills" className={activeSkills ? "active_menu" : ""}>Skills</Nav.Link>
            <Nav.Link href="#Projects" className={activeProject ? "active_menu" : ""}>Projects</Nav.Link>
            <Nav.Link href="#Contact" className={activeContact ? "active_menu" : ""}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Nav>
      </Container>
    </Navbar>
        </div>
    )
}

export default HeaderOne;