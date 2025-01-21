'use client';  // Mark as client-side component

import { useEffect, useState } from 'react';

const VisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [lastVisit, setLastVisit] = useState(null);

  useEffect(() => {
    const fetchVisitorData = async () => {
      const response = await fetch('/api/visitor-count');
      const data = await response.json();
      setVisitorCount(data.count);
      setLastVisit(data.lastVisit);
    };

    fetchVisitorData();
  }, []);

  return (
    <div>
      <h1>Visitor Count: {visitorCount}</h1>
      {lastVisit && <p>Last Visit: {new Date(lastVisit).toLocaleString()}</p>}
    </div>
  );
};

export default VisitorCount;
