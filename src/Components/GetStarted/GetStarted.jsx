import React  , {useState} from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import video from './v12.mp4';
import './GetStarted.css';
import img from './image.png'
import Sidebar from 'react-sidebar';
import { CSSTransition } from 'react-transition-group';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function GetStarted() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

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

          <button
             onClick={() => setSidebarOpen(!sidebarOpen)} // Toggle the sidebarOpen state
  className="nav-toggle"
          >
            {/* Add your navigation toggle icon here */}
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
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/terms">Terms and Conditions</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy</Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
            </ul>
          </nav>
          </CSSTransition>
        }
        open={sidebarOpen}
        onSetOpen={setSidebarOpen}
        pullRight={true} // Open the sidebar toggle in the right direction
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
