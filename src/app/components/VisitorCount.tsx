'use client';  // Mark as client-side component

import { useState, useEffect } from 'react';

const VisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  // Fetch the visitor count from the server (GET request)
  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('/api/visitor-count');
        const data = await response.json();
        setVisitorCount(data.count); // Set the fetched count to state
      } catch (error) {
        console.error('Failed to fetch visitor count:', error);
      }
    };

    fetchVisitorCount();
  }, []);

  // Increment the visitor count on the server (POST request)
  useEffect(() => {
    const incrementCount = async () => {
      try {
        const response = await fetch('/api/visitor-count', { method: 'POST' });
        const data = await response.json();
        setVisitorCount(data.count); // Update the state with the incremented count
      } catch (error) {
        console.error('Failed to increment visitor count:', error);
      }
    };

    incrementCount();  // Call increment when the component is mounted
  }, []);

  return (
    <div>
      <h1>Visitor Count: {visitorCount}</h1>
    </div>
  );
};

export default VisitorCount;
