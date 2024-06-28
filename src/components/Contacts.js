import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faDirections } from '@fortawesome/free-solid-svg-icons';
import '../index.css'; // Ensure your index.css has necessary styles

const Contacts = () => {
  return (
    <div className="contacts-container">
      <h2>Contact Us</h2>
      <div className="grid-container">
        <div className="card">
          <h3><FontAwesomeIcon icon={faPhone} /> Phone</h3>
          <hr />
          <p><strong>0726885106</strong></p>
        </div>
        <div className="card">
          <h3><FontAwesomeIcon icon={faEnvelope} /> Email</h3>
          <hr />
          <p><strong>junctiondc@gmail.com</strong></p>
        </div>
        <div className="card">
          <h3><FontAwesomeIcon icon={faDirections} /> Directions</h3>
          <hr />
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} />{' '}
            <a href="https://maps.app.goo.gl/PHce1FJVBozihz2c6" target="_blank" rel="noopener noreferrer">
              <strong>DC JUNCTION</strong>
            </a>
          </p>
        </div>
        <div className="card">
          <h3><FontAwesomeIcon icon={faDirections} />  Directions</h3>
          <hr />
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} />{' '}
            <a href="https://maps.app.goo.gl/EvwepwwtHRQgNvCc7" target="_blank" rel="noopener noreferrer">
              <strong>JVCC</strong>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
