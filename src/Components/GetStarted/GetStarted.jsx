import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import video from './v12.mp4';
import './GetStarted.css';
import img from './image.png'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function GetStarted() {
  return (
    <motion.div
      className="get-started-page"
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

          {/* navigation toggle  */}
        </div>
      </header>

      {/* Background video */}
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="content">
          <h1>Welcome to Hilton London Heathrow Airport</h1>
          <p>Start your journey with us.</p>
          {/* Get Started button */}
          <Link to="/get-started">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="get-started-button"
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default GetStarted;
