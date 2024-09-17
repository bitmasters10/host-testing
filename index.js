const express = require('express');
const mysql = require('mysql2');

// Create an instance of express
const app = express();

// Set up MySQL connection
const connection = mysql.createConnection({
  host: 'sql108.infinityfree.com',     // Replace with your host
  user: 'if0_37325367',          // Replace with your username
  password: 'chalkson123',  // Replace with your password
  database: 'if0_37325367_helo'    // Replace with your database name
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

// Create a route to fetch all rows from the test table
app.get('/', (req, res) => {
  const sql = 'SELECT * FROM test'; // Query to fetch all rows from the test table
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error executing query: ', err);
      return res.status(500).send('Server Error');
    }
    res.json(results); // Send the rows as JSON response
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});