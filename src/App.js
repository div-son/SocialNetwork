import React from "react";
import LandingPage from "./components/dashboard/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/register/RegisterForm";
import LoginForm from "./components/login/LoginForm";



export const App = () => {
<<<<<<< HEAD

<<<<<<< HEAD
  
=======
>>>>>>> e332f43 (react-bootstrap)
=======
>>>>>>> origin
  return (
    <div className="App">
      <Router>
        <Routes>
<<<<<<< HEAD
          <Route path="/SocialNetwork" element={ <LandingPage />} />
=======
          <Route path="/SocialNetwork" element={<LandingPage />} />
>>>>>>> origin
          <Route path="/SocialNetwork/register" element={<RegisterForm />} />
          <Route path="/SocialNetwork/login" element={<LoginForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
