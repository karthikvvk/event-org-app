// src/EventPage.jsx
import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faTag, faInfoCircle } from '@fortawesome/free-solid-svg-icons';


const categories = ['All', 'Technology', 'Art', 'Business', 'Music', 'Health', 'Entertainment'];
const keywords = ['Conference', 'Exhibition', 'Summit', 'Festival', 'Performance', 'Workshop', 'Seminar', 'Bootcamp', 'Fair', 'Class'];

const EventPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedKeywords, setSelectedKeywords] = useState([]);

  const [events, setEvents] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/searchevents/'); // Adjust the endpoint URL
      const jsonData = await response.json();
      console.log(jsonData)
      setEvents(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);

  const filteredEvents = events.filter(event =>
    (selectedCategory === 'All' || event.category === selectedCategory) &&
    (selectedKeywords.length === 0 || selectedKeywords.some(keyword => event.name.includes(keyword) || event.description.includes(keyword)))
  );

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <header className="bg-blue-600 dark:bg-gray-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-3xl font-bold">Eventify</a>
          <nav className="flex space-x-6">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Event Listings</h1>

        {/* Filter Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Filter by Category:</h2>
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
            className="border border-gray-300 dark:border-gray-700 rounded-lg p-2 mb-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <h2 className="text-xl font-semibold mb-2">Filter by Keywords:</h2>
          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <button
                key={keyword}
                onClick={() => {
                  setSelectedKeywords(prev =>
                    prev.includes(keyword)
                      ? prev.filter(k => k !== keyword)
                      : [...prev, keyword]
                  );
                }}
                className={`border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 transition-colors ${selectedKeywords.includes(keyword) ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100'}`}
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredEvents.length === 0 ? (
            <p className="col-span-full text-center text-lg font-semibold">No events found.</p>
          ) : (
            filteredEvents.map(event => (
              <div key={event.id} className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
                <img src={`src/assets/${event.img_src}`} alt={event.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                  {event.date}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <FontAwesomeIcon icon={faTag} className="mr-2" />
                  {event.category}
                </p>
                <p className="mb-2">
                  <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                  {event.description}
                </p>
              </div>
            ))
          )}
        </div>
      </main>

      <footer className="bg-blue-600 dark:bg-gray-800 text-white py-4 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Eventify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default EventPage;
