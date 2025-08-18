import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';
import estate from '../assets/images/estate.png'
import crud from '../assets/images/crud.jpeg'
import auth from '../assets/images/auth.png';
import blogify from '../assets/images/blogify.jpeg'
import travel from '../assets/images/travel.png'
function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
 <a href="https://mern-real-estate-s2ne.vercel.app/" target="_blank" rel="noreferrer">
    <img src={estate} className="zoom" alt="estate thumbnail" width="100%" />
  </a>                <a href="https://mern-real-estate-s2ne.vercel.app/" target="_blank" rel="noreferrer"><h2>Real Estate MERN Project</h2></a>
                <p>Developed a full-stack real estate web application using the MERN stack, enabling users to create, browse, and manage property listings with secure authentication and image uploads via Cloudinary. Implemented features like property search, filtering, and user-specific listing management to enhance usability."</p>
            </div>
            <div className="project">
 <a href="https://gentle-horse-ad2ff7.netlify.app/" target="_blank" rel="noreferrer">
    <img src={auth} className="zoom" alt="estate thumbnail" width="100%" />
  </a>                  <a href="https://gentle-horse-ad2ff7.netlify.app/" target="_blank" rel="noreferrer"><h2>MERN Authorization Project</h2></a>
                <p>Built a secure full-stack authentication system with the MERN stack, featuring user registration/login, OTP-based email verification, and password reset via email. Implemented bcrypt for password hashing and HTTP-only cookies for safe session management.</p>
            </div>
            <div className="project">
 <a href="https://codesandbox.io/p/github/Rasha110/travel-tour-React-Js" target="_blank" rel="noreferrer">
    <img src={travel} className="zoom" alt="crud thumbnail" width="100%" />
  </a>                 <a href="https://codesandbox.io/p/github/Rasha110/travel-tour-React-Js" target="_blank" rel="noreferrer"><h2>Travel Tour Website</h2></a>
                <p>Built it using HTML, CSS, and React Js, a responsive design.</p>
            </div>
            <div className="project">
 <a href="https://github.com/Rasha110/CRUD_MERN" target="_blank" rel="noreferrer">
    <img src={crud} className="zoom" alt="crud thumbnail" width="100%" />
  </a>                 <a href="https://github.com/Rasha110/CRUD_MERN" target="_blank" rel="noreferrer"><h2>CRUD APP</h2></a>
                <p>A full-stack CRUD  application that allows users to manage their data efficiently through a user-friendly interface. This project is built using the MERN stack which enables seamless integration between the frontend and backend.</p>
            </div>
            <div className="project">
 <a href="https://github.com/Rasha110/Blogify" target="_blank" rel="noreferrer">
    <img src={blogify} className="zoom" alt="crud thumbnail" width="100%" />
  </a>                 <a href="https://github.com/Rasha110/Blogify" target="_blank" rel="noreferrer"><h2>Blogify</h2></a>
                <p>It's a simple blog website where users can sign up, create blog posts, upload cover images, and view posts by others.</p>
            </div>
            
            
           
           
        </div>
    </div>
    );
}

export default Project;