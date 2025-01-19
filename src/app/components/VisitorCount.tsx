// src/app/components/VisitorCount.tsx

'use client';  // Add this line to mark the component as a client-side component

import { useEffect, useState } from 'react';

const VisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    // Simulate fetching visitor count from a backend or database
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('/api/visitor-count'); // Your API endpoint here
        const data = await response.json();
        setVisitorCount(data.count);
      } catch (error) {
        console.error('Failed to fetch visitor count:', error);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <div className="visitor-count">
      <p className="text-x font-normal">Visitor Count: {visitorCount}</p>
    </div>
  );
};

export default VisitorCount;
