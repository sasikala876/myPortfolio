import React from 'react';
import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import './mediaIcons.css';

const MediaIcons = () => {
    return (
        <div className='wrapper'>
            <ul className='list_wrapper'>
                <li className='list'><a href="https://www.linkedin.com/in/sasikala-s-4099271b1/" target="_blank"><FaLinkedin className='icon' /></a></li>
                <li className='list'><a href="https://github.com/sasikala876" target="_blank"><BsGithub className='icon' /></a></li>
                <li className='list'><a href="https://twitter.com/sasikala850835" target="_blank"><AiFillTwitterCircle className='icon' /></a></li>
                <li className='list'><a href="https://web.telegram.org/z/#1316051665" target="_blank"><FaTelegram className='icon' /></a></li>
            </ul>
        </div>
    )
}

export default MediaIcons;