import React, { useState } from 'react';
import './skills.css';
import { MdComputer } from "react-icons/md";
import data from './Data';
import skills from './images/skills.jpg';

const Skills = () => {
    const options = ["All", "Frontend", "Backend", "Tools"];
    const [items, setItems] = useState("All");
    const [datas, setDatas] = useState(data);
    function handleCategoryChange(category) {
        let result;
        if (category === "All")
            setDatas(data);
        else {
            result = data.filter(item => {
                return item.category === category;
            });
            setDatas(result);
        }

    }
    return (
        <>
            <section id="Skills">
                <h3 className='skills__text'><span className='title__icon'><MdComputer className='icon__size' /></span>Skills</h3>
                <p>My technical level</p>
                <div className='container skills__container'>
                    <div className='skills__left'>
                        <div className='dropdown'>
                            <select onChange={(e) => setItems(e.target.value)} onClick={() => handleCategoryChange(items)}>
                                {
                                    options.map(item => (
                                        <option value={item}>{item}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='skills__cards'>
                            {
                                datas.map(item => (
                                    <div key={item.id}>
                                        <a href={item.link} target="_blank">
                                            <img src={item.image} alt={item.name} className="skills__image" />
                                        </a>
                                        <p className='skills__name'>{item.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='skills__right'>
                        <img src={skills} alt="skills" className='skills__right__image' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills;