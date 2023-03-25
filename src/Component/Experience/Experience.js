import React from 'react';
import theme from '../../Data/Theme';
import './Experience.css'
import EducationCard from './ExperienceCard';

import { experienceData } from '../../Data/experienceData'

function Education() {
    return (
        <div className="education" id="resume" style={{backgroundColor: theme.primary}}>
           
            <div className="education-body">
                <div className="education-description">
                <h1 style={{color:theme.secondary}}>Experience</h1>
                    {experienceData.map(edu => (
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
