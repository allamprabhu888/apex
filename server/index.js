import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password', // REPLACE WITH YOUR MYSQL PASSWORD
  database: process.env.DB_NAME || 'apex_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test DB Connection
app.get('/api/health', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    connection.release();
    res.json({ status: 'Connected to MySQL successfully!' });
  } catch (error) {
    console.error('Database connection failed:', error);
    res.status(500).json({ error: 'Failed to connect to database' });
  }
});

// API Route: Save Contact Form Data
app.post('/api/contact', async (req, res) => {
  const { name, phone, course, message } = req.body;
  
  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone are required' });
  }

  try {
    const [result] = await pool.execute(
      'INSERT INTO contacts (name, phone, course, message) VALUES (?, ?, ?, ?)',
      [name, phone, course || null, message || null]
    );
    res.status(201).json({ success: true, id: result.insertId, message: 'Contact saved!' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Database error while saving contact' });
  }
});

// API Route: Save Enrollment Data
app.post('/api/enroll', async (req, res) => {
  const { name, email, phone, course } = req.body;
  
  if (!name || !email || !phone || !course) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const [result] = await pool.execute(
      'INSERT INTO enrollments (name, email, phone, course) VALUES (?, ?, ?, ?)',
      [name, email, phone, course]
    );
    res.status(201).json({ success: true, id: result.insertId, message: 'Enrollment saved!' });
  } catch (error) {
    console.error('Error saving enrollment:', error);
    res.status(500).json({ error: 'Database error while saving enrollment' });
  }
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
