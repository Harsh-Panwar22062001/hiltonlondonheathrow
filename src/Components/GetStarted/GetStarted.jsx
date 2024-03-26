// GetStarted.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import video from './v12.mp4';
import './GetStarted.css'; 
import img from './image.png';
import Sidebar from 'react-sidebar';
import { CSSTransition } from 'react-transition-group';
import Footer from '../Footer/Footer';
import HeroPopUp from '../HeroSection/HeroPopUp';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function GetStarted() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleGetStartedClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <motion.div
      className="get-started-container" 
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src={img} alt="Logo" className="logo" />
        </div>
        <div className="navigation">
          <Link to="/login" className="nav-link">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="login-button"
            >
              Login
            </motion.button>
          </Link>
          <Link to="/signup" className="nav-link">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="signup-button"
            >
              Sign Up
            </motion.button>
          </Link>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="nav-toggle"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar
        sidebar={
          <CSSTransition
            in={sidebarOpen}
            timeout={300}
            classNames="sidebar-transition"
            unmountOnExit
          >
            <nav className="sidebar-nav">
              <ul>
                <li><Link to="/getto">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/terms">Terms and Conditions</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/privacy">Privacy</Link></li>
                <li><Link to="/settings">Settings</Link></li>
              </ul>
            </nav>
          </CSSTransition>
        }
        open={sidebarOpen}
        onSetOpen={setSidebarOpen}
        pullRight={true}
        styles={{ sidebar: { background: 'white', width: '250px' , marginTop:'66px'} }}
      />

      {/* Background video */}
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="content">
          <h1>Welcome to Hilton London Heathrow Airport</h1>
          <p>Start your journey with us.</p>
         
          <div className="get-started-button-container">
            <motion.div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="get-started-button"
                onClick={handleGetStartedClick}
              >
                Get Started
              </motion.button>
              {isPopupOpen && <HeroPopUp isOpen={isPopupOpen} onClose={handleClosePopup} />}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="footer-wrapper">
        <Footer />
      </div>
    </motion.div>
  );
}

export default GetStarted;

