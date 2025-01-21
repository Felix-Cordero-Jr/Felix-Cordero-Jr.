const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'visitor_count.db');
const db = new sqlite3.Database(dbPath);

// Function to get the visitor count
const getVisitorCount = () => {
  return new Promise((resolve, reject) => {
    db.get('SELECT count FROM visitor_count', (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row ? row.count : 0);
      }
    });
  });
};

// Function to increment the visitor count
const incrementVisitorCount = () => {
  return new Promise((resolve, reject) => {
    console.log('Incrementing visitor count...');
    db.run('UPDATE visitor_count SET count = count + 1', function(err) {
      if (err) {
        reject(err);
      } else {
        console.log('Visitor count incremented successfully.');
        resolve(this.changes);
      }
    });
  });
};

module.exports = { getVisitorCount, incrementVisitorCount };
