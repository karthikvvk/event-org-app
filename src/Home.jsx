import React, { useState, useEffect } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import {
  FaMapMarkerAlt, FaCalendarAlt, FaSearch, FaFacebook, FaTwitter, FaInstagram, FaLinkedin,
  FaSun, FaMoon, FaUserCircle, FaSignOutAlt, FaCog, FaDashcube
} from 'react-icons/fa';
import './index.css';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const navigate = useNavigate();
  const [event, setEvents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/load/'); // Adjust the endpoint URL
        const jsonData = await response.json();
        console.log(jsonData)
        setEvents(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    navigate('/login');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };


  const filteredEvents = event.filter(event =>
    event.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className={`${darkMode ? 'dark' : ''} bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans min-h-screen`}>
      <header className="bg-blue-600 dark:bg-gray-800 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-3xl font-bold">Eventify</a>
          <nav className="flex space-x-6">
            <a href="/contactus" className="hover:underline">Contact</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#more" className="hover:underline">More</a>
          </nav>
          <div className="relative w-full max-w-md">
  <input
    type="text"
    placeholder="Search events..."
    value={searchTerm}
    onChange={handleSearchChange}
    className="w-full p-3 pl-10 rounded-full text-gray-700 dark:text-gray-300 border-2 border-white dark:border-gray-600 focus:outline-none"
  />
  <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
</div>
          <div className="flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="bg-yellow-400 dark:bg-yellow-500 text-gray-900 py-2 px-4 rounded-full hover:bg-yellow-300 dark:hover:bg-yellow-400 transition-all duration-300">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            {isLoggedIn ? (
              <div className="relative group">
                <button className="flex items-center bg-yellow-400 dark:bg-yellow-500 text-gray-900 py-2 px-4 rounded-full hover:bg-yellow-300 dark:hover:bg-yellow-400 transition-all duration-300">
                  <FaUserCircle className="mr-2" /> Profile
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-lg hidden group-hover:block">
                  <a href="/dashboard" className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"><FaDashcube className="mr-2" /> Creator Dashboard</a>
                  <a href="/settings" className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"><FaCog className="mr-2" /> Settings</a>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"><FaSignOutAlt className="mr-2" /> Sign out</button>
                </div>
              </div>
            ) : (
              <button onClick={() => navigate('/login')} className="bg-yellow-400 dark:bg-yellow-500 text-gray-900 py-2 px-4 rounded-full hover:bg-yellow-300 dark:hover:bg-yellow-400 transition-all duration-300">Log in</button>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-900 dark:text-yellow-500">Discover Your Next Adventure</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">Find and join amazing events happening near you or across the world.</p>
          <Link to="/events" className="mt-6 inline-block bg-blue-600 dark:bg-yellow-500 text-white py-3 px-8 rounded-full hover:bg-blue-500 dark:hover:bg-yellow-400 transition-all duration-300">
  Explore Events
</Link>
        </section>

        <section id="events" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredEvents.map((event, index) => (
            <div key={index} className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:transform hover:scale-105">
              <img src={ `src/assets/${event.img_src}`} alt={event.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold text-blue-900 dark:text-yellow-500">{event.name}</h3>
              <p className="text-gray-600 dark:text-gray-400"><FaCalendarAlt className="inline-block mr-2" />{event.date}</p>
              <p className="text-gray-600 dark:text-gray-400"><FaMapMarkerAlt className="inline-block mr-2" />{event.location}</p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">{event.description}</p>
              <Link to={`/events/${event.id}`} className="mt-6 inline-block bg-blue-600 dark:bg-yellow-500 text-white py-3 px-8 rounded-full hover:bg-blue-500 dark:hover:bg-yellow-400 transition-all duration-300">
                View Details
              </Link>
                 </div>
          ))}
        </section>
      </main>

      <footer className="bg-blue-600 dark:bg-gray-800 text-white py-12 mt-16">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <a href="/" className="text-3xl font-bold">Eventify</a>
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook className="hover:text-gray-300 transition-all duration-300" /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter className="hover:text-gray-300 transition-all duration-300" /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram className="hover:text-gray-300 transition-all duration-300" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin className="hover:text-gray-300 transition-all duration-300" /></a>
          </div>
          <p className="text-gray-400">&copy; 2024 Eventify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
