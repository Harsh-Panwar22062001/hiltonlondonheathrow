const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'signup'
});

// Connect to MySQL database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Signup route
app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  const sql = "INSERT INTO login (name, email, password) VALUES (?, ?, ?)";
  const values = [name, email, password];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log('Data inserted successfully');
    return res.json({ success: true });
  });
});

// Login route
app.post('/login', (req, res) => {
  const { name, email, password } = req.body;
  const sql = "SELECT * FROM login WHERE name = ? AND email = ? AND password = ?";
  const values = [name, email, password];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error querying data:', err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (result.length > 0) {
      return res.json({ success: true });
    } else {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  });
});

// Start the server
const PORT = process.env.PORT || 8086;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
