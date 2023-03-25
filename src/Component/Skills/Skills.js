import React,{ useContext } from 'react';
import Marquee from "react-fast-marquee";

import './Skills.css'

import theme from '../../Data/Theme';
import { skillsData } from '../../Data/skillsData'
import { skillsImage } from '../../Data/skillsImage'

function Skills() {


    return (
        <div className="skills" style={{backgroundColor: theme.primary}}>
            <div className="skillsHeader">
                <h2 style={{color: theme.secondary}}>Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{color: theme.grey}}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills
