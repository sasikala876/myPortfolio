import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import particlesJson from "./config/particlesjson";
import axios from "axios";
import './home.css';
import MediaIcons from "../MediaIcons";
import Typical from 'react-typical';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import hii_img from '../../images/hii_img.jpg';
// import FileDownload from "js-file-download";

const Home = () => {
    // const [data,setData] = useState([]);

    // useEffect(()=>{
    //   axios.get("http://localhost:4000/fetch/2")
    //   .then(response => {
    //     setData(response.data);
    //   })
    //     }, []);
    //     console.log("data",data);



    // const downloadFile = (e) => {
    //     e.preventDefault();
    //     axios({
    //         url:"http://localhost:4000/fetchall",
    //         method:"GET",
    //         responseType:"blob"
    //     }).then((res)=>{
    //         console.log(res);
    //         FileDownload(res.data,"resume.docx")
    //     })
    // }

    return (
        <>
            <section id="Home">
                {/* <Particles params={particlesJson}> */}
                <Container>
                    <Row>
                        <Col sm={2} md={2}>
                            <div className="media_icons">
                                <MediaIcons />
                            </div>
                        </Col>
                        <Col sm={10} md={4} style={{ paddingTop: "50px" }}>
                            <p className="intro">Hi there,</p>
                            <p className="intro">I'm Sasikala</p>
                            <Typical
                                loop={Infinity}
                                steps={[
                                    "Enthusiastic Dev",
                                    1000,
                                    "MERN Stack Dev",
                                    1000,
                                    "Freelancer",
                                    1000
                                ]}
                                className="typeEffect"
                            />
                            <a href="#About" className="aboutMe-text"><button className="btn primary">About Me<BsFillArrowDownCircleFill className="home-arrow" /></button></a>                    </Col>
                        <Col sm={12} md={6} style={{ textAlign: "center" }}>
                            <img src={hii_img} alt="hiiImage" height="320px" width="300px" />
                        </Col>
                    </Row>
                </Container>
                {/* {
                data.map(item => (
                    <div>
                        <p>{item.id}</p>
                        <p>{item.name}</p>
                        <p>{item.designation}</p>
                        <p>{item.bio}</p>
                    </div>
                ))
            } */}
                {/* </Particles>   */}
            </section>
        </>
    )
}

export default Home;

//  https://drive.google.com/file/d/1yzg6EFpNf1FiYiGfRWqMa5BXuA0K23ea
// <img src="https://drive.google.com/uc?export=view&id=INSERT_HERE_YOUR_GOOGLE_DRIVE_IMAGE_ID" alt="drive image"/>

// https://drive.google.com/file/d/1qJhjJP7A8xzYHZowfUS3mn7KLQhtRADm/view
// https://drive.google.com/uc?export=view&id=1qJhjJP7A8xzYHZowfUS3mn7KLQhtRADm


