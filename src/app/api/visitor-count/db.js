let visitorCount = 0; // In-memory storage for visitor count

// Function to get the current visitor count
export const getVisitorCount = () => {
    return visitorCount;
};

// Function to increment the visitor count
export const incrementVisitorCount = () => {
    visitorCount += 1;
};
