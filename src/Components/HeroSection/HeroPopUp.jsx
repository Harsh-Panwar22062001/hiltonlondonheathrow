import React from "react";
import { motion } from "framer-motion";
import "./HeroPopUp.css";
import { Link } from "react-router-dom";

const HeroPopUp = ({ isOpen, onClose }) => {
  return (
    <motion.div
      className={`popup ${isOpen ? "open" : ""}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
    >
      <div className="popup-content">
        <h2>Popup Content</h2>
        <p id="il" style={{ textAlign: "center" }}>
          Welcome to the Journey of Happiness
        </p>
        <div className="div1">
          <div className="card">
            <div className="card-image">
              <img
                src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
                alt="Card"
              />
            </div>
            <div className="card-content">
              <h3> Room Booking</h3>
              <Link to="/room-booking" className="card-link">
                Explore Room
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img
                src="https://media.istockphoto.com/id/1464763636/photo/group-of-friends-relaxing-in-a-caf%C3%A9.webp?b=1&s=170667a&w=0&k=20&c=TtO9OW1-QvL7y-kKE9WhEu_wfNVOT3MjdvL_YenL5IM="
                alt="Card"
              />
            </div>
            <div className="card-content">
              <h3>Our Restaurants</h3>

              <Link to="/book-dishes" className="card-link">
                Explore Dishes
              </Link>
            </div>
          </div>
        </div>
        <div className="div2">
          <div className="card">
            {" "}
            <div className="card-image">
              <img
                src="https://images.unsplash.com/photo-1460176449511-ff5fc8e64c35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVufGVufDB8fDB8fHww"
                alt="Card"
              />
            </div>
            <div className="card-content">
              <h3>Explore Section</h3>

              <Link to="/bookactivity" className="card-link">
                Explore Activity
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img
                src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
                alt="Card"
              />
            </div>
            <div className="card-content">
              <h3>Hero banner</h3>

              <Link to="/heroactivity" className="card-link">
                Explore Activity
              </Link>
            </div>
          </div>
        </div>

        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </motion.div>
  );
};

export default HeroPopUp;
