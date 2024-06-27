import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div>
          <h2>GET IN TOUCH</h2>
          <p>Deliverance Church Dagoretti Junction</p>
          <p>P.O Box 103-00605</p>
          <p>Uthiru</p>
          <p>Phone: +254 726 885 106</p>
          <p>Email: pastorgikwa@gmail.com</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/live">Livestream</a></li>
            <li><a href="/announcements">Announcements</a></li>
            <li><a href="/contacts">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3>Resources</h3>
          <ul>
            <li><a href="/crisis-counselling">Crisis Counselling</a></li>
            <li><a href="/ministries">Ministries</a></li>
            <li><a href="/giving">Giving</a></li>
          </ul>
        </div>
        <div>
          <h3>About</h3>
          <ul>
            <li><a href="/rev-james-gikwa">Rev James Gikwa</a></li>
            <li><a href="/leadership">Leadership</a></li>
            <li><a href="/about-us">Who We Are</a></li>
            <li><a href="/the-journey">The Journey</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
