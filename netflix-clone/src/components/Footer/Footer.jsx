import React from "react";
import "./footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer-links">
          <a href="#">Audio and Subtitles</a>
          <a href="#">Audio Description</a>
          <a href="#">Help Center</a>
          <a href="#">Gift Cards</a>
          <a href="#">Media Center</a>
          <a href="#">Investor Relations</a>
          <a href="#">Jobs</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy</a>
          <a href="#">Legal Notices</a>
          <a href="#">Corporate Information</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="Service_code">
          <p>Service code</p>
        </div>
        <div className="footer-copyright">
          <span>&copy; 2024 Netflix, Inc.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
