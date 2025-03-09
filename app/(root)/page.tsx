"use client";

import Image from 'next/image';

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* Welcome Text at the Top */}
      <h1 className="text-3xl font-bold uppercase mt-10 mb-4">WELCOME TO PixMorph</h1>

      {/* Centered Logo Just Below the Welcome Text */}
      <div className="relative mb-8">
        <Image
          src="/assets/images/logo.svg" // Path to your logo image
          alt="Logo"
          width={300} // Increased size
          height={300} // Increased size
          className="animate-pulse" // Optional: Add a subtle pulse animation
        />
      </div>

      {/* Loading Animation (3 Dots) */}
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-gray-600 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-gray-600 rounded-full animate-bounce delay-100"></div>
        <div className="w-4 h-4 bg-gray-600 rounded-full animate-bounce delay-200"></div>
      </div>
    </div>
  );
};

export default Home;