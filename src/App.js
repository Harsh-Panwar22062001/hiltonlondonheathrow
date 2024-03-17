import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetStartedPage from './Components/GetStarted/GetStarted';
import LoginPage from './Components/LoginPage/LoginPage'; // Ensure correct import path
import SignUp from './Components/SignUp.jsx/SignUp';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp ,setIsSignUp] = useState(false);

  return (
    <>


<Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<GetStartedPage />} /> 
          <Route exact path="/login" element={<LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route exact path="/signup" element={<SignUp isSignUp={isSignUp} setIsSignUp={setIsSignUp} />} />  
          
        </Routes>
      </div>
    </Router>
  


    </>
  
  );
}

export default App;
