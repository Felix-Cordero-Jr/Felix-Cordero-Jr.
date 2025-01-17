'use client'; // This ensures this file is treated as a client component

import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  // This ensures that the component only renders on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Prevent rendering on the server and only render the component on the client
  if (!isClient) {
    return null;
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden background-color: black" // Removed bg-black class
      onMouseMove={handleMouseMove}
      style={{
        background: `bg-black radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgb(155, 11, 11) .5%, rgba(109, 39, 39, 0.5) 5%, rgba(255, 0, 0, 0) 30%)`, // Apply the gradient with black center
        transition: 'background 0.3s ease-out',
      }}
    >
      <h1 className="text-center text-3xl mt-20">Hover Over Me</h1>
    </div>
  );
};

export default Hero;
