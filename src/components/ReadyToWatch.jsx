import React, { useState } from 'react';

export default function ReadyToWatch() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Handle sign up logic here
  };

  return (
    <div className="bg-[#222222] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
          Ready To Watch? Create An Account To Get Started
        </h2>
        
        <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
          <div className="flex-1">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-4 text-white bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent placeholder-gray-400"
            />
          </div>
          
          <button
            onClick={handleSubmit}
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition-colors duration-200 whitespace-nowrap"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}