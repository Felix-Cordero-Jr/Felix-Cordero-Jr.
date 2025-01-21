const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'count.json');

// Initialize the count file if it doesn't exist
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify({ count: null, lastVisit: null }));
}

const getVisitorCount = () => {
  const data = fs.readFileSync(filePath);
  const { count, lastVisit } = JSON.parse(data);
  return { count, lastVisit };
};

const incrementVisitorCount = () => {
  const currentData = getVisitorCount();
  const newCount = currentData.count + 1;
  const newLastVisit = new Date().toISOString(); // Set last visit to current time
  fs.writeFileSync(filePath, JSON.stringify({ count: newCount, lastVisit: newLastVisit }));
  return newCount;
};

module.exports = { getVisitorCount, incrementVisitorCount };
