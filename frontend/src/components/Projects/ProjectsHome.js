import React,{ useState } from 'react';
import { MdComputer } from "react-icons/md";
import './projects.css';
import ModalComp from './Modal.js';
import { AiOutlineSearch } from "react-icons/ai";
import ProjectData from './Data.js';
import { AiFillEye } from "react-icons/ai";
import { CgCodeSlash } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const ProjectsHome = () => {
    
    const [showModal, setShowModal] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [open,setOpen] = useState(false);
    const [searchItem, setSearchItem] = useState("");
    const [btn1Color, setBtn1Color] = useState(true);
    const [btn2Color, setBtn2Color] = useState(false);
    const [btn3Color, setBtn3Color] = useState(false);
    const [data, setData] = useState(ProjectData);

    const navigate = useNavigate();
    const viewAll = () => {
        navigate('/projects');
    }
    function ChooseImg(val) {
        setProjectName(val);
    }

    return (
        <section id="projects">
         <h3 className="projects__text"><span className="title__icon"><MdComputer className="icon__size" /></span>Projects</h3>
            <p>Check my projects</p>
            <div className="container">
            <div className="projects__section">
                    {
                        data.slice(0,3).map((item, id) => (
                                <div className="main-div" key={item.id}>
                                    <div className='projectContainer'>
                                        <img src={item.image} alt="image1" className="img" onMouseOver={()=>setOpen(true)} onMouseOut={()=>setOpen(false)}/>
                                    <div className={`btns ${open ? `show`: `hide`}`}>
                                        {/* <button className="button__hover"><a href={item.liveLink} target="_blank"><AiFillEye className="project_icon" />view</a></button>
                                        <button className="button__hover"><a href={item.github} target="_blank"><CgCodeSlash className="project_icon" />source</a></button> */}
                                    </div>
                                    </div>
                                    <div className="bottom__sec">
                                        <div>
                                            <p id="techUsed__text">Technology used</p>
                                           {item.tech1 && <img src={item.tech1} className="logo" alt="tech" />}
                                            {item.tech2 && <img src={item.tech2} className="logo" alt="tech" />}
                                            {item.tech3 && <img src={item.tech3} className="logo" alt="tech" />}
                                            {item.tech4 && <img src={item.tech4} className="logo" alt="tech" />}
                                            {item.tech5 &&<img src={item.tech5} className="logo" alt="tech" />}
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
                            </div>
                            <button onClick={()=>navigate('/projects')} className='forward_back'>View All<AiOutlineArrowRight className='viewAll_icon'/></button>

        </section>
    )
}

export default ProjectsHome