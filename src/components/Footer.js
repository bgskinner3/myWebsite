import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="footer justify-center  p-10 bg-base-100 shadow-xl md:px-10 text-neutral-content bottom-0">
      <div className="flex ">
        <span className="footer-title text-xl"></span>

        <div className="grid grid-flow-col gap-16">
          <a href="https://github.com/bgskinner3">
            <GitHubIcon
              sx={{ fontSize: 50 }}
              className="hover:scale-110 hover:animate-bounce"
            />
          </a>
          <a href="https://www.linkedin.com/in/brennan-skinner-642783a3/">
            <LinkedInIcon
              sx={{ fontSize: 50 }}
              className="hover:scale-110 hover:animate-bounce"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
