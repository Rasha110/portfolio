import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython,faGithub } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "JavaScript",
    
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Cloudinary",
    "JWT",
    "Tailwind CSS",
    "Insomnia",
    "Postman",
    "Firebase",
    
];

const labelsSecond = [
    "Git & GitHub",
    
    "Vercel",
    "Netlify",
    "Railway",
];

const labelsThird = [
    "Python",
    "Pandas",
    "Numpy",
    "Random Forests",
    "Regression"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">

                    {/* Full Stack */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Full Stack Development (MERN)</h3>
                        <p>
                            I build complete web applications using the MERN stack. 
                            From authentication systems to real estate listing platforms with Cloudinary integration, 
                            I can handle both frontend and backend development.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    {/* Deployment */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faGithub} size="3x" />
                        <h3>Deployment</h3>
                        <p>
                            I have experience deploying web applications on platforms like Vercel, Netlify, and Railway. 
                            
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tools:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    {/* AI + Python */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>Python & AI Basics</h3>
                        <p>
                            I have hands-on experience with Python for data handling,
                            and exploring basic AI Models to integrate intelligent features into applications.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;
