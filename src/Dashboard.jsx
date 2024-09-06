import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { FaEdit, FaUpload, FaHome, FaCalendarAlt, FaBook, FaInfoCircle, FaCog, FaSignOutAlt, FaChartLine } from 'react-icons/fa';
import './chartSetup'; // Import the chart setup to register Chart.js components
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const DashboardWithSidebar = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeContent, setActiveContent] = useState('dashboard'); // State for tracking active content
  const [profileImage, setProfileImage] = useState(null);
  const [profile, setProfile] = useState({
    name: 'Vishal VD',
    email: 'vishal@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA',
  });
  const [newEvents, setNewEvents] = useState([]);

  // Example data for the charts
  const dataBookedEvents = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Events Booked',
        data: [10, 15, 20, 25, 30, 35, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const dataViewsLikes = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Views',
        data: [500, 600, 700, 800, 900, 1000, 1100],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
      },
      {
        label: 'Likes',
        data: [50, 60, 70, 80, 90, 100, 110],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgb(153, 102, 255)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const optionsBookedEvents = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const optionsViewsLikes = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleEditClick = () => setIsEditing(true);
  const handleClosePopup = () => setIsEditing(false);
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert('Profile saved!');
    setIsEditing(false);
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const newEvent = {
      name: form.get('eventName'),
      date: form.get('eventDate'),
      location: form.get('eventLocation'),
      description: form.get('eventDescription'),
      image: form.get('eventImage') ? URL.createObjectURL(form.get('eventImage')) : null,
    };
    setNewEvents([...newEvents, newEvent]);
    e.target.reset();
  };

  const renderContent = () => {
    switch (activeContent) {
      case 'dashboard':
        return (
          <>
            <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-2">Registered Events</h3>
                <p className="text-3xl font-bold">15</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-2">Number of Bookings</h3>
                <p className="text-3xl font-bold">120</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-2">Active Users</h3>
                <p className="text-3xl font-bold">85</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-2">New Registrations</h3>
                <p className="text-3xl font-bold">23</p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Events Booked</h2>
                <div className="chart-container">
                  <Line data={dataBookedEvents} options={optionsBookedEvents} />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Views and Likes</h2>
                <div className="chart-container">
                  <Bar data={dataViewsLikes} options={optionsViewsLikes} />
                </div>
              </div>
            </div>
          </>
        );
      case 'register-events':
        return (
          <>
            <h1 className="text-4xl font-bold mb-6">Register Events</h1>
            <form onSubmit={handleEventSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Event Name:</label>
                <input
                  type="text"
                  name="eventName"
                  placeholder="Event Name"
                  className="w-full border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Date:</label>
                <input
                  type="date"
                  name="eventDate"
                  className="w-full border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Location:</label>
                <input
                  type="text"
                  name="eventLocation"
                  placeholder="Location"
                  className="w-full border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Description:</label>
                <textarea
                  name="eventDescription"
                  placeholder="Event Description"
                  className="w-full border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Event Image:</label>
                <input
                  type="file"
                  name="eventImage"
                  className="w-full border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Register Event
                </button>
              </div>
            </form>
          </>
        );
     case 'bookings':
  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Bookings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newEvents.map((event, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{event.name}</h2>
            <p className="text-gray-600 mb-2">{event.date}</p>
            <p className="text-gray-600 mb-2">{event.location}</p>
            <p className="text-gray-800 mb-4">{event.description}</p>
            {event.image ? (
              <img src={event.image} alt={event.name} className="w-full h-48 object-cover mb-4" />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center mb-4">
                <span>No Image Available</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );

      case 'more-info':
        return (
          <>
            <h1 className="text-4xl font-bold mb-6">More Info</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newEvents.map((event, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-2">{event.name}</h2>
                  <p className="text-gray-600 mb-2">{event.date}</p>
                  <p className="text-gray-600 mb-2">{event.location}</p>
                  <p className="text-gray-800 mb-4">{event.description}</p>
                  {event.image ? (
                    <img src={event.image} alt={event.name} className="w-full h-48 object-cover mb-4" />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center mb-4">
                      <span>No Image Available</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        );
      case 'profile':
        return (
          <>
            <h1 className="text-4xl font-bold mb-6">Profile</h1>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
              <img
                src={profileImage || 'https://via.placeholder.com/150'}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover mr-6"
              />
              <div>
                <h2 className="text-2xl font-bold mb-2">{profile.name}</h2>
                <p className="text-gray-600 mb-2">Email: {profile.email}</p>
                <p className="text-gray-600 mb-2">Phone: {profile.phone}</p>
                <p className="text-gray-600 mb-2">Address: {profile.address}</p>
                <button
                  onClick={handleEditClick}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </>
        );
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div className="flex h-screen">
      <nav className="bg-gray-800 text-white w-64">
        <div className="p-6 flex flex-col items-center">
          <img
            src={profileImage || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <h2 className="text-lg font-semibold">{profile.name}</h2>
          <p className="text-sm">{profile.email}</p>
          <ul className="mt-6">
            <li>
              <button
                onClick={() => setActiveContent('dashboard')}
                className="flex items-center p-3 text-white hover:bg-gray-700 w-full text-left"
              >
                <FaHome className="mr-3" />
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveContent('register-events')}
                className="flex items-center p-3 text-white hover:bg-gray-700 w-full text-left"
              >
                <FaCalendarAlt className="mr-3" />
                Register Events
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveContent('bookings')}
                className="flex items-center p-3 text-white hover:bg-gray-700 w-full text-left"
              >
                <FaBook className="mr-3" />
                Bookings
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveContent('more-info')}
                className="flex items-center p-3 text-white hover:bg-gray-700 w-full text-left"
              >
                <FaInfoCircle className="mr-3" />
                More Info
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveContent('profile')}
                className="flex items-center p-3 text-white hover:bg-gray-700 w-full text-left"
              >
                <FaCog className="mr-3" />
                Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => alert('Sign Out')}
                className="flex items-center p-3 text-white hover:bg-gray-700 w-full text-left"
              >
                <FaSignOutAlt className="mr-3" />
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <main className="flex-1 p-6 overflow-auto">
        {renderContent()}
      </main>

      {/* Edit Profile Popup */}
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
            <form onSubmit={handleSave}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Phone:</label>
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Address:</label>
                <input
                  type="text"
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleClosePopup}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardWithSidebar;
