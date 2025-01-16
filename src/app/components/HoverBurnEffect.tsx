// components/HoverBurnEffect.tsx

'use client'; // This ensures this file is treated as a client component

import React, { useState, useEffect } from 'react';

const HoverBurnEffect = () => {
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
      className="min-h-screen bg-white relative overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(77, 65, 65, 0.5) 0%, rgba(255, 255, 255, 0) 10%)`,
        transition: 'background 0.3s ease-out',
      }}
    >
      <h1 className="text-center text-3xl mt-20">Hover Over Me</h1>
    </div>
  );
};

export default HoverBurnEffect;
