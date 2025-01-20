const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'count.json');

// Initialize the count file if it doesn't exist
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify({ count: 0 }));
}

const getVisitorCount = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data).count;
};

const incrementVisitorCount = () => {
  const currentCount = getVisitorCount();
  const newCount = currentCount + 1;
  fs.writeFileSync(filePath, JSON.stringify({ count: newCount }));
  return newCount;
};

module.exports = { getVisitorCount, incrementVisitorCount };
