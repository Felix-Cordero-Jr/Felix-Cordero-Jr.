// src/app/components/VisitorCount.tsx

'use client';  // Mark as client-side component

import { useEffect, useState } from 'react';

const VisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('/api/visitor-count');
        
        // Log the response status and body
        console.log('Response Status:', response.status);

        if (response.ok) {
          const data = await response.json();
          setVisitorCount(data.count);
        } else {
          // Only log response body when it's not ok
          const responseText = await response.text();
          console.error('Failed to fetch visitor count: Invalid response');
          console.error('Response Body:', responseText);
        }
      } catch (error) {
        console.error('Failed to fetch visitor count:', error);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <div className="visitor-count">
      <p className="text-xl font-semibold">Visitor Count: {visitorCount}</p>
    </div>
  );
};

export default VisitorCount;
