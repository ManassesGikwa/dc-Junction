import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faTiktok, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../index.css'; // Ensure your index.css has necessary styles

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2>About Us</h2>
      <p>We are the House Of Worship And Healing. Where we worship and we are Healed, then worship again, healed and the cycle continues! We are under the spiritual cover of the Holy Spirit and Rev. James & Margaret Gikwa and we are a Visionary Church.</p>

      <h2>Get in Touch with us on all our socials</h2>
      <div className="social-links">
        <a href="https://facebook.com/dcjunction/app/212104595551052" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://twitter.com/howhdcjunction" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://vm.tiktok.com/ZMrMWW6Cw/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} size="2x" />
        </a>
        <a href="https://www.instagram.com/dcjunctionhowh?igsh=YzljYTk1ODg3Zg%3D%3D" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.youtube.com/@dcjunction5722" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default AboutUs;
