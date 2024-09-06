// src/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white shadow-lg flex flex-col">
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-2xl font-semibold mb-2">Profile</h2>
        <p className="text-sm mb-1">Name: Vishal VD</p>
        <p className="text-sm mb-4">Email: vishal@example.com</p>
        <Link to="/edit-profile" className="text-blue-400 hover:text-blue-300 text-sm">Edit Profile</Link>
      </div>
      <nav className="flex-1 mt-4">
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard" className="sidebar-link">Dashboard</Link>
          </li>
          <li>
            <Link to="/register-events" className="sidebar-link">Register Events</Link>
          </li>
          <li>
            <Link to="/bookings" className="sidebar-link">Bookings</Link>
          </li>
          <li>
            <Link to="/more-info" className="sidebar-link">More Info</Link>
          </li>
        </ul>
      </nav>
      <footer className="p-6 border-t border-gray-700">
        <Link to="/settings" className="text-blue-400 hover:text-blue-300 text-sm">Settings</Link>
      </footer>
    </div>
  );
};

export default Sidebar;
