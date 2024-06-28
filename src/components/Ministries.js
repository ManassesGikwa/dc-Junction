import React from 'react';
import '../index.css'; // Ensure your index.css has necessary styles

const Ministries = () => {
  return (
    <div className="ministries-container">
      <h2><center>Ministries</center></h2>
      <div className="grid-container">
        <div className="card">
          <h3>Youths of Excellence</h3>
          <hr />
          <p>
            Description of Youths of Excellence ministry.
          </p>
        </div>
        <div className="card">
          <h3>Men of Purpose</h3>
          <hr />
          <p>
            Description of Men of Purpose ministry.
          </p>
        </div>
        <div className="card">
          <h3>Blessed to Bless</h3>
          <hr />
          <p>
            Description of Blessed to Bless ministry.
          </p>
        </div>
        <div className="card">
          <h3>Children Ministry</h3>
          <hr />
          <p>
            Description of Children Ministry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ministries;
