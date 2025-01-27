import { useState, useEffect } from 'react';

const VisitorCount = () => {
    const [visitorCount, setVisitorCount] = useState<number>(777);

    // Increment the visitor count each time the component is rendered
    useEffect(() => {
        setVisitorCount((prevCount) => prevCount + 1);
    }, []);

    return (
        <div>
            <h1>Visitor Count: {visitorCount}</h1>
        </div>
    );
};

export default VisitorCount;
