import React from 'react';

import './About.css';

import theme from '../../Data/Theme';



function About() {


    return (
        <div className="about" id="about" style={{ backgroundColor: theme.primary }}>
            <div className="line-styling">
                <div className="style-circle" style={{ backgroundColor: theme.orange }}></div>
                <div className="style-circle" style={{ backgroundColor: theme.orange }}></div>
                <div className="style-line" ></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{ color: theme.secondary }}>Hi, Folks</h2>
                    <p style={{ color: theme.tertiary }}>
                    I'm a skilled full-stack developer with expertise in Java, JavaScript, HTML, CSS, Spring, Hibernate, and REST API. I specialize in building high-performance web applications while adhering to industry best practices and standards. With a strong foundation in object-oriented programming and data structures and algorithms, I'm able to solve complex problems efficiently and creatively. Additionally, I have experience in React, enabling me to build dynamic user interfaces. I'm committed to delivering high-quality software products within tight deadlines, and I excel in collaboration and problem-solving.
                    <br /><br /></p>
                </div>
            </div>
        </div>

    )
}

export default About
