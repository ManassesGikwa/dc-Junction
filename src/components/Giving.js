import React from 'react';
import '../index.css'; // Ensure your index.css has necessary styles

const Giving = () => {
  return (
    <div className="giving-container">
      <h2> For Giving & Donations</h2>
      <div className="grid-container">
        <div className="card">
          <h3>Mpesa Option</h3>
          <p>
            <strong>Via Paybill</strong><br />
            Tithes & Offerings<br />
            Paybill No: <strong>834894</strong><br />
            Account name: tithe/offering etc
          </p>
          <p>
            <strong>Or via Bank</strong><br />
            Mpesa Paybill<br />
            Paybill Number: <strong>247247</strong><br />
            Account No. <strong>240290#tithe/Offering etc</strong>
          </p>
        </div>
        <div className="card">
          <h3>Land Buying Project</h3>
          <p>
            <strong>Mpesa Paybill:</strong><br />
            Paybill Number: <strong>7715438</strong><br />
            Account name: <strong>YourName</strong>
          </p>
        </div>
        <div className="card">
          <h3>Bank Deposit/Cheques</h3>
          <p>
            <strong>Bank Deposit/Cheques</strong><br />
            <br />
            Deliverance Church(House of Worship & Healing)<br />
            <strong>Equity bank, Dagoretti Corner branch</strong><br />
            Acct. No. <strong>024 029 048 9263</strong>
          </p>
        </div>
        <div className="card">
          <h3>More Giving Options</h3>
          <p>
            More options and instructions for giving.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Giving;
