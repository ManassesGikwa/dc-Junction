import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Live from './components/Live';
import AboutUs from './components/AboutUs';
import Ministries from './components/Ministries';
import Resources from './components/Resources';
import Giving from './components/Giving';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import SermonsSlideshow from './components/SermonsSlideshow';
import OurServices from './components/OurServices'; // Import the new component
import AreasOfService from './components/AreasOfService'; // Import the AreasOfService component

function App() {
  return (
    <Router>
      <div id="root">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/live">Live</Link></li>
            <li>
              <Link to="/about-us">Who We Are</Link>
              <ul>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/the-journey">The Journey</Link></li>
                <li><Link to="/rev-james-gikwa">Rev James Gikwa</Link></li>
                <li><Link to="/leadership">Leadership</Link></li>
              </ul>
            </li>
            <li><Link to="/our-services">Our Services</Link></li>
            <li><Link to="/sermons">Sermons</Link></li>
            <li>
              <Link to="/ministries">Ministries</Link>
              <ul>
                <li><Link to="/areas-of-service">Areas of Service</Link></li> {/* Direct link to AreasOfService */}
                <li><Link to="/missions">Missions</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
              <ul>
                <li><Link to="/pastoral-care-requests">Pastoral Care Requests</Link></li>
                <li><Link to="/marital-counselling">Marital Counselling</Link></li>
                <li><Link to="/crisis-counselling">Crisis Counselling</Link></li>
                <li><Link to="/child-dedication">Child Dedication</Link></li>
              </ul>
            </li>
            <li><Link to="/giving">Giving</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
        </nav>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/live" element={<Live />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/areas-of-service" element={<AreasOfService />} /> {/* Standalone route for AreasOfService */}
            <Route path="/ministries" element={<Ministries />} /> {/* Route for Ministries component */}
            <Route path="/resources" element={<Resources />} />
            <Route path="/giving" element={<Giving />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/sermons" element={<SermonsSlideshow />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
