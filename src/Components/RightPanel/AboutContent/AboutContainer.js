import React from 'react';
import './AboutContainer.css';
import SkillsProgress from './SkillProgressBar';
import TreeView from './TreeView';

export const content = "Hello there! I'm thrilled to welcome you to my portfolio. Enthusiastic and accomplished Full Stack Developer with a strong foundation.Eager to contribute technical expertise and passion for innovation to a dynamic software development team. I constantly strive to enhance my skills and learning new technology.";

export const AboutContainer = () => {
    
    return (
        <div className='dp-about-container'>
           
            <div className='dp-about-container__inner'>
                <div className='dp-about-container__left'>
                <h2 style={{ color: 'black' }}>About Me</h2>
                    <div className='dp-about-container__photo'>
                       {content}
                    </div>
                    <div className='dp-about-container__tree'><TreeView/></div>
                </div>
                <div className='dp-about-container__right'>
                    <SkillsProgress/>
                </div>
            </div>
            
        </div>
    );
};
