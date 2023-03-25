import React from 'react';
import theme from '../../Data/Theme';
import './Education.css'
import eduImg from './eduGreen.svg';
import EducationCard from './EducationCard';

import { educationData } from '../../Data/educationData'

function Education() {
    return (
        <div className="education" id="resume" style={{backgroundColor: theme.primary}}>
           
            <div className="education-body">
                <div className="education-description">
                <h1 style={{color:theme.secondary}}>Education</h1>
                    {educationData.map(edu => (
                        <EducationCard 
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Education
