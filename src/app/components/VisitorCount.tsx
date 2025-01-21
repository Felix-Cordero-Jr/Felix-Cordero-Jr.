// src/app/components/VisitorCount.tsx

import { useState, useEffect } from 'react';

const VisitorCount = () => {
    const [visitorCount, setVisitorCount] = useState<number>(0);

    // This function fetches the visitor data from the API
    const fetchVisitorData = async () => {
        try {
            const response = await fetch('/api/visitor-count', {
                method: 'GET',
            });

            // Ensure the response is successful
            if (!response.ok) {
                const errorDetails = await response.text();
                throw new Error(`Failed to fetch data: ${response.statusText} - ${errorDetails}`);
            }

            const text = await response.text();  // Get the response body as text
            const data = text ? JSON.parse(text) : { count: 0 };

            // Update the state with the new visitor count
            setVisitorCount(data.count);
        } catch (error) {
            console.error('Error fetching visitor count:', error);
        }
    };

    // Fetch visitor data on component mount
    useEffect(() => {
        fetchVisitorData();
    }, []);

    return (
        <div>
            <h1>Visitor Count: {visitorCount}</h1>
        </div>
    );
};

export default VisitorCount;
