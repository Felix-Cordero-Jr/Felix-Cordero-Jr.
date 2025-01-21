'use client';  // Mark as client-side component

import { useEffect, useState } from 'react';

const VisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const fetchVisitorData = async () => {
      const response = await fetch('/api/visitor-count');
      const data = await response.json();
      setVisitorCount(data.count);
    };

    fetchVisitorData();
  }, []);

  return (
    <div>
      <h1>Visitor Count: {visitorCount}</h1>
    </div>
  );
};

export default VisitorCount;
