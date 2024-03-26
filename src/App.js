import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetStartedPage from './Components/GetStarted/GetStarted';
import LoginPage from './Components/LoginPage/LoginPage';
import SignUp from './Components/SignUp.jsx/SignUp';
import RoomBookingSection from './Components/RoomBooking/RoomBooking';
import RestaurantMenu from './Components/Restaurant/Restaurant';
import ExploreCards from './Components/Explore/ExploreActivity';
import HeroBanner from './Components/Hero-Banner/HeroBanner';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
 
  return (
    <Router>
     

        <Routes>
          <Route exact path="/" element={<GetStartedPage />} />
          <Route exact path="/login" element={<LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route exact path="/signup" element={<SignUp isSignUp={isSignUp} setIsSignUp={setIsSignUp} />} />
          <Route exact path="/room-booking" element={<RoomBookingSection />} />
          <Route exact path="/book-dishes" element={<RestaurantMenu />} />
          <Route exact path="/bookactivity" element={<ExploreCards/>} />
          <Route exact path="/heroactivity" element={<HeroBanner/>} />
        
          <Route exact path="/getto" element={<GetStartedPage />} />
          <Route exact path="/getru" element={<GetStartedPage />} />

          <Route exact path="/sig" element={<SignUp/>} />
          <Route exact path="/homeup" element={<GetStartedPage />} />
          
        </Routes>
 
    </Router>
  );
}

export default App;
