import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import rsha from '../assets/images/rsha.jpeg';
function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={rsha} alt='Avatar'/>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="http://github.com/Rasha110/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rasha-faheem-0bb94a319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h2>Rasha Faheem</h2>
          <p>MERN Stack Developer</p>

          <div className="mobile_social_icons">
            <a href="http://github.com/Rasha110/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rasha-faheem-0bb94a319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;