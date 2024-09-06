import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Login from './components/login';
import EventPage from './eventpage'; // Ensure the file is named correctly
import Contact from "./contactus";
import EventDetails from './EventDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/events" element={<EventPage />} />
      </Routes>
    </Router>
  );
};

export default App;
