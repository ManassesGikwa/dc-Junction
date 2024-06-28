import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPray, faBible, faMoon } from '@fortawesome/free-solid-svg-icons';
import '../index.css'; // Ensure your index.css has necessary styles

const OurServices = () => {
  return (
    <div className="our-services-container">
      <h2>Order of Our Services</h2>
      <div className="grid-container">
        <div className="card">
          <h3>Sunday Services</h3>
          <hr />
          <p>
            <FontAwesomeIcon icon={faClock} /> <span className="service-name"><u>Youth Online Service</u></span><br /> 7:30am - 8:30am<br /><br />
            <FontAwesomeIcon icon={faClock} /> <span className="service-name"><u>1st Service</u></span><br /> 9:00am - 10:30am<br /><br />
            <FontAwesomeIcon icon={faClock} /> <span className="service-name"><u>2nd Service</u></span><br /> 11:00am - 1:30pm
          </p>
        </div>
        <div className="card">
          <h3>Midweek Services</h3>
          <hr />
          <p>
            <FontAwesomeIcon icon={faPray} /> <span className="service-name"><u>Evening Prayers</u></span><br />Monday 5:30pm - 7:00pm<br /><br />
            <FontAwesomeIcon icon={faBible} /> <span className="service-name"><u>Bible Study</u></span><br />Wednesday 5:30pm - 7:00pm<br /><br />
            <FontAwesomeIcon icon={faMoon} /> <span className="service-name"><u>Overnight Prayer Vigil Kesha</u></span><br /> Friday 9:00pm - 5:00am
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
