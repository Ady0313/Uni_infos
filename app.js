const express = require('express');
const mysql = require('mysql2'); // Require mysql2 module
const app = express();
const port = 3500;

app.use(express.static('public'));

// Create a connection pool to your MySQL database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'zero', // Change to your MySQL username
  password: '', // Change to your MySQL password
  database: 'zero', // Change to your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Fetch all colleges from the database
app.get('/allcolleges', (req, res) => {
  try {
    // Execute a SELECT query to fetch all colleges
    pool.query('SELECT * FROM `database`', (error, results) => {
      if (error) {
        console.error('Error fetching colleges:', error);
        return res.status(500).json({ error: 'An error occurred while fetching colleges.' });
      }
      res.json(results);
    });
  } catch (error) {
    console.error('Error fetching colleges:', error);
    res.status(500).json({ error: 'An error occurred while fetching colleges.' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});