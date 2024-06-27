import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDetails from './components/UserDetails'
import UserProfile from './components/UserProfile'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserDetails />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
