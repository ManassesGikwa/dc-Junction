import React from 'react';
import '../index.css'; // Ensure your index.css has necessary styles

const Giving = () => {
  return (
    <div className="giving-container">
      <h2>General Giving & Donations</h2>
      <div className="grid-container">
        <div className="card">
          <h3>Mpesa Option</h3>
          <hr />
          <p>
            <strong>Via Paybill</strong><br />
            Tithes & Offerings<br />
            <strong>Paybill No:</strong> 834894<br />
            <strong>Account name:</strong> tithe/offering etc
          </p>
          <p>
            <strong>Or via Bank</strong><br />
            Mpesa Paybill<br />
            <strong>Paybill Number:</strong> 247247<br />
            <strong>Account No:</strong> 240290#tithe/Offering etc
          </p>
        </div>
        <div className="card">
          <h3>Land Buying Project</h3>
          <hr />
          <p>
            <strong>Mpesa Paybill:</strong><br />
            <strong>Paybill Number:</strong> 7715438<br />
            <strong>Account name:</strong> YourName
          </p>
        </div>
        <div className="card">
          <h3>Bank Deposit/Cheques</h3>
          <hr />
          <p>
            <strong>Bank Deposit/Cheques</strong><br />
            Deliverance Church(House of Worship & Healing)<br />
            <strong>Equity bank, Dagoretti Corner branch</strong><br />
            <strong>Acct. No:</strong> 024 029 048 9263<br />
          </p>
        </div>
        <div className="card">
          <h3>Giving in Kind</h3>
          <hr />
          <p>
            We are called to minister unto God and the community. Therefore you are free to give various material and food items, skills, talents and expertise for the sake of God's Kingdom advancing greatly!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Giving;
