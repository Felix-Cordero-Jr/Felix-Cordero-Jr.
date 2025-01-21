const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'visitor_count.db');
const db = new sqlite3.Database(dbPath);

// Create the visitor_count table if it doesn't exist
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS visitor_count (count INTEGER)', (err) => {
    if (err) {
      console.error('Error creating table:', err.message);
    }
  });
});

module.exports = db;
