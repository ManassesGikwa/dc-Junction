import React from 'react';

const Contacts = () => {
  return (
    <div>
      <h2>Contacts</h2>
      <form>
        <label>Your Name:</label>
        <input type="text" name="name" />
        <label>Your Email:</label>
        <input type="email" name="email" />
        <label>Subject:</label>
        <input type="text" name="subject" />
        <label>Your Message:</label>
        <textarea name="message"></textarea>
        <button type="submit">Submit</button>
      </form>
      <h3>Join Our Mailing List</h3>
      <form>
        <label>First Name:</label>
        <input type="text" name="firstName" />
        <label>Last Name:</label>
        <input type="text" name="lastName" />
        <label>Phone Number:</label>
        <input type="text" name="phone" />
        <label>Email:</label>
        <input type="email" name="email" />
        <button type="submit">Join</button>
      </form>
    </div>
  );
}

export default Contacts;
