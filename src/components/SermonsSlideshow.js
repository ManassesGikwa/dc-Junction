import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../index.css'; // Import the CSS file

const images = [
  { src: 'https://drive.google.com/uc?export=view&id=1gZ0gQiRHIpJv7htvOzAWvpLyjHLPC8aC', link: 'https://www.youtube.com/live/nr7Cd2wFqsA?si=dIsOwBMOWcvRmunt' },
  { src: 'https://drive.google.com/uc?export=view&id=1ra-CwVPGjIs6iRO9E8ki5K2PIUDtSMXb', link: 'https://www.youtube.com/live/wqkgQUKGapI?si=sTbosLKGp9em6Zxn' },
  // Add more images and links here if needed
];

const SermonsSlideshow = () => {
  return (
    <div className="slideshow-container">
      <Slide>
        {images.map((image, index) => (
          <div className="each-slide" key={index}>
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img src={image.src} alt={`Slide ${index}`} />
            </a>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SermonsSlideshow;
