import React from 'react';
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const SocialMediaIcons = () => {
  return (
    <div >
      {/* <IconButton color="primary" aria-label="Facebook" href="https://facebook.com" target="_blank">
        <FacebookIcon />
      </IconButton>
      <IconButton color="primary" aria-label="Instagram" href="https://www.instagram.com/rishabh_rk_kanathe/" target="_blank">
        <InstagramIcon />
      </IconButton> */}
      <IconButton color="primary" aria-label="LinkedIn" href="https://www.linkedin.com/in/ashwini-patil-a16085230/" target="_blank">
        <LinkedInIcon />
      </IconButton>
      <IconButton color="primary" aria-label="GitHub" href="https://github.com/ashuupatil07" target="_blank">
        <GitHubIcon />
      </IconButton>
    </div>
  );
};

export default SocialMediaIcons;
