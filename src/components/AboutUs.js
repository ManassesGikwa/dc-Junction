import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../index.css'; // Ensure your index.css has necessary styles

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2>About Us</h2>
      <p>We are the House Of Worship And Healing. Where we worship and we are Healed, then worship again, healed and the cycle continues! We are under the spiritual cover of the Holy Spirit and Rev. James & Margaret Gikwa and we are a Visionary Church.</p>

      <h2>Get in Touch with us on all our socials</h2>
      <div className="social-links">
        <a href="https://facebook.com/dcjunction/app/212104595551052" target="_blank" rel="noopener noreferrer" className="social-card">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          <span>HOWH Facebook</span>
        </a>
        <a href="https://twitter.com/howhdcjunction" target="_blank" rel="noopener noreferrer" className="social-card">
          <FontAwesomeIcon icon={faTimes} size="2x" />
          <span>X</span>
        </a>
        <a href="https://vm.tiktok.com/ZMrMWW6Cw/" target="_blank" rel="noopener noreferrer" className="social-card">
          <FontAwesomeIcon icon={faTiktok} size="2x" />
          <span>TikTok</span>
        </a>
        <a href="https://www.instagram.com/dcjunctionhowh?igsh=YzljYTk1ODg3Zg%3D%3D" target="_blank" rel="noopener noreferrer" className="social-card">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          <span>Instagram</span>
        </a>
        <a href="https://www.youtube.com/@dcjunction5722" target="_blank" rel="noopener noreferrer" className="social-card">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
          <span>HOWH YouTube</span>
        </a>
        <a href="https://web.facebook.com/profile.php?id=61557171786786" target="_blank" rel="noopener noreferrer" className="social-card">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          <span>JVCC Facebook</span>
        </a>
        <a href="https://www.youtube.com/@Jvcc-hj9dv" target="_blank" rel="noopener noreferrer" className="social-card">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
          <span>JVCC YouTube</span>
        </a>
      </div>
    </div>
  );
}

export default AboutUs;
