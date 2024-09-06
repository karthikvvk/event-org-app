import React, { useState, useEffect, useRef } from 'react';
import './index.css'; // Import Tailwind CSS

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const popupRef = useRef(null);

  const handleOptionClick = (option) => {
    setMessages((prevMessages) => [...prevMessages, { text: option, user: true }]);
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { text: "You selected: " + option, user: false }]);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages((prevMessages) => [...prevMessages, { text: input, user: true }]);
      setInput('');
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { text: "This is a bot response.", user: false }]);
      }, 1000);
    }
  };

  const handleOutsideClick = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center text-gray-900 dark:text-gray-100">


      <ContactUs />
      <Chatbot
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        messages={messages}
        setMessages={setMessages}
        input={input}
        setInput={setInput}
        popupRef={popupRef}
        handleOptionClick={handleOptionClick}
        handleSubmit={handleSubmit}
      />

      <footer className="w-full bg-blue-600 dark:bg-gray-800 text-white py-4 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Eventify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-lg w-full mb-8">

      <h2 className="text-2xl font-semibold mb-4 text-blue-900 dark:text-yellow-500">Contact Us</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
          <input type="text" id="name" className="mt-1 p-2 w-full border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input type="email" id="email" className="mt-1 p-2 w-full border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
          <textarea id="message" className="mt-1 p-2 w-full border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 dark:bg-yellow-500 text-white rounded-lg hover:bg-blue-500 dark:hover:bg-yellow-400 transition-all duration-300">Submit</button>
      </form>



    </div>
  );
};

const Chatbot = ({ isOpen, setIsOpen, messages, input, setInput, popupRef, handleOptionClick, handleSubmit }) => {
  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 p-4 bg-blue-600 dark:bg-yellow-500 text-white rounded-full cursor-pointer shadow-lg z-50 hover:bg-blue-500 dark:hover:bg-yellow-400 transition-all duration-300"
      >
        💬
      </div>

      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" />}

      {isOpen && (
        <div
          ref={popupRef}
          className="fixed bottom-4 right-4 w-full max-w-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md flex flex-col z-50"
        >
          <div className="flex-1 p-4 overflow-y-auto max-h-[60vh]">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg ${msg.user ? 'bg-blue-200 dark:bg-blue-600 text-right ml-auto' : 'bg-gray-200 dark:bg-gray-700 text-left'}`}
                >
                  {msg.text}
                </div>
              ))}
              <div className="flex flex-wrap gap-2 mt-4">
                <button
                  onClick={() => handleOptionClick('Option 1')}
                  className="px-2 py-1 bg-green-500 text-white rounded-lg text-sm hover:bg-green-400 transition-all duration-300"
                >
                  Option 1
                </button>
                <button
                  onClick={() => handleOptionClick('Option 2')}
                  className="px-2 py-1 bg-green-500 text-white rounded-lg text-sm hover:bg-green-400 transition-all duration-300"
                >
                  Option 2
                </button>
                <button
                  onClick={() => handleOptionClick('Option 3')}
                  className="px-2 py-1 bg-green-500 text-white rounded-lg text-sm hover:bg-green-400 transition-all duration-300"
                >
                  Option 3
                </button>
                <button
                  onClick={() => handleOptionClick('Option 4')}
                  className="px-2 py-1 bg-green-500 text-white rounded-lg text-sm hover:bg-green-400 transition-all duration-300"
                >
                  Option 4
                </button>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex border-t border-gray-300 dark:border-gray-600 p-2 bg-gray-200 dark:bg-gray-700">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100"
            />
            <button
              type="submit"
              className="ml-2 px-4 py-2 bg-blue-600 dark:bg-yellow-500 text-white rounded-lg hover:bg-blue-500 dark:hover:bg-yellow-400 transition-all duration-300"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;
