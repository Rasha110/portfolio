import React from "react";
import { Box, Paper } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        padding: "3rem 1rem",
        textAlign: "center",
      }}
    >
      <h2>Contact</h2>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        {/* LinkedIn */}
        <Paper
          className="contact-card"
          component="a"
          href="https://www.linkedin.com/in/rasha-faheem-0bb94a319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            textDecoration: "none",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          <LinkedInIcon color="success" /> &nbsp; linkedin.com/in/rasha-faheem
        </Paper>

        {/* GitHub */}
        <Paper
          className="contact-card"
          component="a"
          href="https://github.com/Rasha110"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            textDecoration: "none",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          <GitHubIcon color="success" /> &nbsp; github.com/Rasha110
        </Paper>

        {/* Email */}
        <Paper
          className="contact-card"
          component="a"
          href="mailto:hussain@example.com"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            textDecoration: "none",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          <EmailIcon color="success" /> &nbsp; fahimrsha3@gmail.com
        </Paper>

        {/* Phone */}
        <Paper
          className="contact-card"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <PhoneIcon color="success" /> &nbsp; +92 315 4741516
        </Paper>
      </Box>
    </Box>
  );
};

export default Contact;
