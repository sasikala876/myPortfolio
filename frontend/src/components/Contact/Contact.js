import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FiSend } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css';
import { SlEarphonesAlt } from "react-icons/sl";

const Contact = () => {
    const [values, setValues] = useState({
        user_name: "",
        user_email: "",
        message: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => {
            return {
                ...prevValues,
                [name]: value,
            }
        })
    }
    function validate(values) {
        let errors = {};
        if (!values.user_name) {
            errors.user_name = "Name is required";
        }
        else if (!/^[A-Z]*[a-zA-Z ]{3,30}$/.test(values.user_name)) {
            errors.user_name = "Please enter a valid name";
        }
        if (!values.user_email) {
            errors.user_email = "Please enter your email";
        }
        else if (!/^[\w.+\-]+@gmail\.com$/.test(values.user_email)) {
            errors.user_email = "Please enter a valid email";
        }
        if (!values.message) {
            errors.message = "Please enter a message";
        }
        if (!errors.user_name && !errors.user_email && !errors.message) {
            setErrors("");
        }
        else if (errors) {
            setErrors(errors);
            return false;
        }
        else {
            setErrors("");
        }
        return true;
    }
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        const valid = validate(values);
        if (valid == true) {
            emailjs.sendForm('service_0fjtbzo', 'template_c2exvih', form.current, 'RvKrUgBl0sC2wygPJ')
                .then((result) => {
                    console.log(result.text);
                    console.log("msg sent");
                    notify();
                }, (error) => {
                    console.log(error.text);
                });
        }
    };
    const notify = () => {
        clearState();
        toast.success("Your Mail sent successfully 😊", { theme: "dark" })
    };
    function clearState() {
        document.getElementById("form").reset();
    }
    return (
        <section id="Contact" >
            <h3 className='contact__text'><span className='title__icon'><SlEarphonesAlt className='icon__size' /></span>Get in touch</h3>
            <p>Contact me</p>
            <div className='container'>
                <Row >
                    <Col sm={12} md={6} className="column">
                        <iframe width="100%" height="445" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=47/9a,1st%20street,weaver's%20colony,tiruchengode,namakkal,tamil%20nadu+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            <a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a>
                        </iframe>
                    </Col>
                    <Col sm={12} md={6} className="column">
                        <Form ref={form} onSubmit={sendEmail} id="form">
                            <p className='title text'>Let's talk</p>
                            <Form.Group className="item">
                                <FaUserAlt className='icon-c' />
                                <Form.Control type="text" name="user_name" id="user_name" placeholder="Name" value={values.confirmEmail} onChange={handleChange} className="textarea"></Form.Control>
                            </Form.Group>
                            <Form.Group className='error'>
                                <Form.Text className='text-danger'>{errors.user_name}</Form.Text>
                            </Form.Group>
                            <Form.Group className="mt-2 item">
                                <MdEmail className='icon-c' />
                                <Form.Control type="email" name="user_email" id="user_email" placeholder="Email" value={values.confirmEmail} onChange={handleChange} className="textarea"></Form.Control>
                            </Form.Group>
                            <Form.Group className='error'>
                                <Form.Text className='text-danger'>{errors.user_email}</Form.Text>
                            </Form.Group>
                            <Form.Group className="mt-2 item">
                                <AiFillMessage className='icon-c icon-msg' />
                                <Form.Control as="textarea" rows={3} name="message" id="message" placeholder="Message" value={values.confirmEmail} onChange={handleChange} className="msg_border textarea" />
                            </Form.Group>
                            <Form.Group className='error'>
                                <Form.Text className='text-danger'>{errors.message}</Form.Text>
                            </Form.Group>
                            <Form.Group id="sub_btn">
                                <Button className="btn primary btn__submit" type="submit" >
                                    Send<FiSend className='ps-1 send_icon' />
                                </Button>
                            </Form.Group>
                        </Form>
                        <ToastContainer autoClose="1000" />
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Contact;