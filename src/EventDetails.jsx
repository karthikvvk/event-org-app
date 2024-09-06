import React, { useState, useEffect  } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FaMapMarkerAlt, FaCalendarAlt, FaUserCircle, FaEnvelope, FaPhone, FaCommentDots,
} from 'react-icons/fa';
import './index.css';
import axios from 'axios';


function EventDetails() {
  const [events, setEvents] = useState([]);
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
  const { id } = useParams();
  const event = events.find(event => event.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
    location: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://127.0.0.1:8000/booking/', formData);
        console.log('Success:', response.data);
        if (response.status === 200) {
            console.log('Success:', response.data);
            //alert(`Thank you for booking, ${formData.name}!`);
            
        } else {
            console.error('Error:', response.statusText);
            alert('There was a problem with your booking.');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was a problem with your booking.');
    }
};

  if (!event) {
    return <h2>Event not found!</h2>;
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <img src={`src/assets/${event.img_src}`} alt={event.name} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-yellow-500">{event.name}</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">{event.description}</p>
          <p className="mt-4 text-gray-600 dark:text-gray-400"><FaCalendarAlt className="inline-block mr-2" />{event.date}</p>
          <p className="text-gray-600 dark:text-gray-400"><FaMapMarkerAlt className="inline-block mr-2" />{event.location}</p>

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300" htmlFor="name">Name</label>
              <div className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-2 mt-2">
                <FaUserCircle className="text-gray-500 dark:text-gray-400 ml-2" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-transparent flex-1 p-2 outline-none text-gray-900 dark:text-gray-100"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300" htmlFor="email">Email</label>
              <div className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-2 mt-2">
                <FaEnvelope className="text-gray-500 dark:text-gray-400 ml-2" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent flex-1 p-2 outline-none text-gray-900 dark:text-gray-100"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300" htmlFor="phone">Phone</label>
              <div className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-2 mt-2">
                <FaPhone className="text-gray-500 dark:text-gray-400 ml-2" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-transparent flex-1 p-2 outline-none text-gray-900 dark:text-gray-100"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300" htmlFor="comments">Comments</label>
              <div className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-2 mt-2">
                <FaCommentDots className="text-gray-500 dark:text-gray-400 ml-2" />
                <input
                  type="text"
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  className="bg-transparent flex-1 p-2 outline-none text-gray-900 dark:text-gray-100"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300" htmlFor="comments">location</label>
              <div className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-2 mt-2">
                <FaCommentDots className="text-gray-500 dark:text-gray-400 ml-2" />
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="bg-transparent flex-1 p-2 outline-none text-gray-900 dark:text-gray-100"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 dark:bg-yellow-500 text-white py-3 px-6 rounded-full hover:bg-blue-500 dark:hover:bg-yellow-400 transition-all duration-300"
            >
              Book Now
            </button>
          </form>
          <Link to="/" className="block mt-6 text-blue-600 dark:text-yellow-500 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
