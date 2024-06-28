// import React from 'react';
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';
// import './Slideshow.css';

// import image12 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/Keys to Threshing Mountains Rev James GIkwa.jpg';
// import image1 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/The Power of Praise.jpg';
// import image2 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/Breaking Energy Suckers.jpg';
// import image3 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/Breaking the Spirit of Hopelessness.jpg';
// import image4 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/Threshing MOuntains by the Power Within us.jpg';
// import image5 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/Threshing Mountains by the power of love.jpg';
// import image6 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/This Time Rev Gikwa.jpg';
// import image7 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/Divine Acceleration Rev James Gikwa.jpg';
// import image8 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/Getting strength in difficult times Rev Gikwa.jpg';
// import image9 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/Triumphant Service Rev James Gikwa.jpg';
// import image10 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/The Living Hope Rev James Gikwa.jpg';
// import image11 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/holy communion Rev James Gikwa.jpg';
// import image13 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/Serving God Manasses Gikwa.jpg';
// import image14 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/Bringing People to Jesus Rev James Gikwa.jpg';
// import image15 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/Being Ready for Christ Pst manana.jpg';
// import image16 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/Family communion service Rev James Gikwa.jpg';
// import image17 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/The unchanging God With Rev James Gikwa.jpg';
// import image18 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/The Call of God with Eben.jpg';

// const images = [
//   { src: image12, link: 'https://www.youtube.com/live/kK4z_QjaEzM?si=06OdifTv0GgrSK4H' },
//   { src: image8, link: 'https://www.youtube.com/live/fAOzt0xUTGs?si=M70fW3-mdvsvu1Aq' },
//   { src: image2, link: 'https://www.youtube.com/live/wqkgQUKGapI?si=sTbosLKGp9em6Zxn' },
//   { src: image3, link: 'https://www.youtube.com/live/mtvge99ZEMQ?si=oves-w-A1S1uTANv' },
//   { src: image4, link: 'https://www.youtube.com/live/O8vcnHNS6pQ?si=tEHTzTCq3l7QTPnM' },
//   { src: image5, link: 'https://www.youtube.com/live/SZlo0toC6wE?si=FQThDDSGUpRsuNVG' },
//   { src: image6, link: 'https://www.youtube.com/live/3vdWwGA1ZbE?si=qxNTLjA61whSKp6y' },
//   { src: image7, link: 'https://www.facebook.com/share/v/S11uUsm7fUeBbmYQ/?mibextid=oFDknk' },
//   { src: image9, link: 'https://www.youtube.com/live/3x7-Fum-iic?si=a-AKoZeKD8M0WB60' },
//   { src: image10, link: 'https://www.youtube.com/live/pFwo7f8UbwA?si=1LKaLla6nnp-REa2' },
//   { src: image11, link: 'https://web.facebook.com/share/v/5oiy4xvb42qsmExy/' },
//   { src: image1, link: 'https://www.youtube.com/live/nr7Cd2wFqsA?si=dIsOwBMOWcvRmunt' },
//   { src: image13, link: 'https://www.youtube.com/live/lGuLDD5lq6w?si=CGLCBuBPbCaxwGgO' },
//   { src: image14, link: 'https://www.youtube.com/live/cIwjrlFoTFQ?si=vVh8VH2KU4wj542_' },
//   { src: image15, link: 'https://www.youtube.com/live/z_dOE_nqD0A?si=agKp7a1TQIJaRl_D' },
//   { src: image16, link: 'https://www.youtube.com/live/c50AdrucNfU?si=eRoJK9f75aTrfTSb' },
//   { src: image17, link: 'https://www.youtube.com/live/uENgHy60Kro?si=vFZPEeD53_NSZdQk' },
//   { src: image18, link: 'https://www.youtube.com/live/bbEm233iVMk?si=e1YUHg8RFWoknuzx' }
// ];

// const SermonsSlideshow = () => {
//   return (
//     <div className="container">
//       <div className="slideshow-container">
//         <Slide>
//           {images.map((image, index) => (
//             <div className="each-slide" key={index}>
//               <a href={image.link} target="_blank" rel="noopener noreferrer">
//                 <img src={image.src} alt={`Slide ${index}`} />
//               </a>
//             </div>
//           ))}
//         </Slide>
//       </div>
//       <div className="thumbnails-container">
//         {images.map((image, index) => (
//           <div className="thumbnail" key={index}>
//             <a href={image.link} target="_blank" rel="noopener noreferrer">
//               <img src={image.src} alt={`Thumbnail ${index}`} />
//             </a>
//           </div>
//         ))}
//       </div>
//       <div className="get-more-sermons">
//         <a href="https://www.youtube.com/channel/UCBxvaAVEhDrBRj4QgG4Ezvw" target="_blank" rel="noopener noreferrer">
//           Get more sermons
//         </a>
//       </div>
//     </div>
//   );
// };

// export default SermonsSlideshow;

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Slideshow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import image12 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/Keys to Threshing Mountains Rev James GIkwa.jpg';
import image1 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/The Power of Praise.jpg';
import image2 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/Breaking Energy Suckers.jpg';
import image3 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/Breaking the Spirit of Hopelessness.jpg';
import image4 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/Threshing MOuntains by the Power Within us.jpg';
import image5 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/Threshing Mountains by the power of love.jpg';
import image6 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/This Time Rev Gikwa.jpg';
import image7 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/Divine Acceleration Rev James Gikwa.jpg';
import image8 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/Getting strength in difficult times Rev Gikwa.jpg';
import image9 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/Triumphant Service Rev James Gikwa.jpg';
import image10 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/The Living Hope Rev James Gikwa.jpg';
import image11 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/holy communion Rev James Gikwa.jpg';
import image13 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/Serving God Manasses Gikwa.jpg';
import image14 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/Bringing People to Jesus Rev James Gikwa.jpg';
import image15 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/Being Ready for Christ Pst manana.jpg';
import image16 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/Family communion service Rev James Gikwa.jpg';
import image17 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/The unchanging God With Rev James Gikwa.jpg';
import image18 from '/home/manasses/Documents/dc-junction/src/SlideshowPosters/The Call of God with Eben.jpg';

const images = [
  { src: image12, link: 'https://www.youtube.com/live/kK4z_QjaEzM?si=06OdifTv0GgrSK4H' },
  { src: image8, link: 'https://www.youtube.com/live/fAOzt0xUTGs?si=M70fW3-mdvsvu1Aq' },
  { src: image2, link: 'https://www.youtube.com/live/wqkgQUKGapI?si=sTbosLKGp9em6Zxn' },
  { src: image3, link: 'https://www.youtube.com/live/mtvge99ZEMQ?si=oves-w-A1S1uTANv' },
  { src: image4, link: 'https://www.youtube.com/live/O8vcnHNS6pQ?si=tEHTzTCq3l7QTPnM' },
  { src: image5, link: 'https://www.youtube.com/live/SZlo0toC6wE?si=FQThDDSGUpRsuNVG' },
  { src: image6, link: 'https://www.youtube.com/live/3vdWwGA1ZbE?si=qxNTLjA61whSKp6y' },
  { src: image7, link: 'https://www.facebook.com/share/v/S11uUsm7fUeBbmYQ/?mibextid=oFDknk' },
  { src: image9, link: 'https://www.youtube.com/live/3x7-Fum-iic?si=a-AKoZeKD8M0WB60' },
  { src: image10, link: 'https://www.youtube.com/live/pFwo7f8UbwA?si=1LKaLla6nnp-REa2' },
  { src: image11, link: 'https://web.facebook.com/share/v/5oiy4xvb42qsmExy/' },
  { src: image1, link: 'https://www.youtube.com/live/nr7Cd2wFqsA?si=dIsOwBMOWcvRmunt' },
  { src: image13, link: 'https://www.youtube.com/live/lGuLDD5lq6w?si=CGLCBuBPbCaxwGgO' },
  { src: image14, link: 'https://www.youtube.com/live/cIwjrlFoTFQ?si=vVh8VH2KU4wj542_' },
  { src: image15, link: 'https://www.youtube.com/live/z_dOE_nqD0A?si=agKp7a1TQIJaRl_D' },
  { src: image16, link: 'https://www.youtube.com/live/c50AdrucNfU?si=eRoJK9f75aTrfTSb' },
  { src: image17, link: 'https://www.youtube.com/live/uENgHy60Kro?si=vFZPEeD53_NSZdQk' },
  { src: image18, link: 'https://www.youtube.com/live/bbEm233iVMk?si=e1YUHg8RFWoknuzx' }
];

const SermonsSlideshow = () => {
  return (
    <div className="container">
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
      <div className="thumbnails-container">
        {images.map((image, index) => (
          <div className="thumbnail" key={index}>
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img src={image.src} alt={`Thumbnail ${index}`} />
            </a>
          </div>
        ))}
      </div>
      <div className="get-more-sermons">
        <a href="https://www.youtube.com/channel/UCBxvaAVEhDrBRj4QgG4Ezvw" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} /> Get more sermons
        </a>
      </div>
    </div>
  );
};

export default SermonsSlideshow;
