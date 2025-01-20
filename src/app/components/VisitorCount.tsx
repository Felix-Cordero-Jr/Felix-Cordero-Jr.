// src/app/components/VisitorCount.tsx

'use client';  // Mark as client-side component

import { useEffect, useState } from 'react';

const VisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('/api/visitor-count');
        const data = await response.json();
        setVisitorCount(data.count);
      } catch (error) {
        console.error('Failed to fetch visitor count:', error);
      }
    };

    fetchVisitorCount(); // Initial fetch

    const intervalId = setInterval(fetchVisitorCount, 5000); // Poll every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="visitor-count">
      <p className="text-xs font-normal">Visitor Count: {visitorCount}</p>
    </div>
  );
};

export default VisitorCount;
