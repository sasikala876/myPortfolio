import React, { useEffect, useState } from "react";
import './projects.css';
import ModalComp from './Modal.js';
import { AiOutlineSearch } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import ProjectData from './Data.js';
import { AiFillEye } from "react-icons/ai";
import { CgCodeSlash } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Projects = () => {
    const [showModal, setShowModal] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [box, setBox] = useState(-1);
    const [miniBox, setMiniBox] = useState(false);
    const [searchItem, setSearchItem] = useState("");
    const [btn1Color, setBtn1Color] = useState(true);
    const [btn2Color, setBtn2Color] = useState(false);
    const [btn3Color, setBtn3Color] = useState(false);
    const [data, setData] = useState(ProjectData);
    const navigate = useNavigate();

    useEffect(() => {
      window.scrollTo(0, 0);
    },[]);

    function ChooseImg(val) {
        setProjectName(val);
    }
    const MouseEnter = (id) => {
        setBox(id);
        setMiniBox(true)
    }
    const MouseLeave = (val) => {
        setBox(val);
        setMiniBox(false)
    }
    const filterCategory = (categ) => {
        if (categ === "All")
            setData(ProjectData);
        else {
            const result = ProjectData.filter(item => {
                return item.category === categ;
            });
            setData(result);
        }
    }
    function btn1() {
        filterCategory("All");
        setBtn1Color(true);
        setBtn2Color(false);
        setBtn3Color(false);
    }
    function btn2() {
        filterCategory("frontend");
        setBtn2Color(true);
        setBtn1Color(false);
        setBtn3Color(false);
    }
    function btn3() {
        filterCategory("fullstack");
        setBtn3Color(true);
        setBtn1Color(false);
        setBtn2Color(false);
    }
    return (
        <section id="Projects">
            <h3 className="projects__text"><span className="title__icon"><MdComputer className="icon__size" /></span>Projects</h3>
            <p>Check my projects</p>
            <div className="container">
                <div className="search-box">
                    <input type="text" className="text-box" onChange={(e) => setSearchItem(e.target.value)} placeholder="Search" />
                    <AiOutlineSearch className="search-icon" />
                </div>
                <div className="tabs">
                    <button onClick={btn1} className={`category-btn ${btn1Color ? "btn-active" : ""}`}>All</button>
                    <button onClick={btn2} className={`category-btn ${btn2Color ? "btn-active" : ""}`}>Frontend</button>
                    <button onClick={btn3} className={`category-btn ${btn3Color ? "btn-active" : ""}`}>Fullstack</button>
                </div>

                <div className="projects__section">
                    {
                        data.filter(item => {
                            if (searchItem == "")
                                return item;
                            else if (item.name.toLowerCase().includes(searchItem.toLowerCase()))
                                return item;
                        })
                            .map((item, id) => (
                                <div className="main-div" key={item.id}>
                                    <img src={item.image} alt="image1" className="img" onMouseEnter={() => MouseEnter(id)} onMouseLeave={() => MouseLeave(-1)} />
                                    <div className="btns">
                                        <button className="button__hover"><a href={item.liveLink} target="_blank"><AiFillEye className="project_icon" />view</a></button>
                                        <button className="button__hover"><a href={item.github} target="_blank"><CgCodeSlash className="project_icon" />source</a></button>
                                    </div>
                                    <div className="bottom__sec">
                                        <div>
                                            <p id="techUsed__text">Technology used</p>
                                            {item.tech1 && <img src={item.tech1} className="logo" alt="tech" />}
                                            {item.tech2 && <img src={item.tech2} className="logo" alt="tech" />}
                                            {item.tech3 && <img src={item.tech3} className="logo" alt="tech" />}
                                            {item.tech4 && <img src={item.tech4} className="logo" alt="tech" />}
                                            {item.tech5 && <img src={item.tech5} className="logo" alt="tech" />}
                                            {item.tech6 && <img src={item.tech6} className="logo" alt="tech" />}
                                            {item.tech7 && <img src={item.tech7} className="logo" alt="tech" />}
                                            {item.tech8 && <img src={item.tech8} className="logo" alt="tech" />}
                                        </div>
                                        <p className="plus" onClick={() => { setShowModal(true); ChooseImg(item.id) }}>+</p>
                                    </div>
                                </div>
                            ))
                    }
                </div>
                {
                    showModal && <ModalComp showModal={showModal} setShowModal={setShowModal} projectName={projectName} />
                }
                <button className="forward_back" onClick={() => navigate(-1)}><AiOutlineArrowLeft className="bth_icon"/>Back To Home</button>
            </div>
        </section>
    )
}

export default Projects;