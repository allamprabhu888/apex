import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY || 're_mock_key');

// Middleware
app.use(cors());
app.use(express.json());

// Database connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'route', // REPLACE WITH YOUR MYSQL PASSWORD
  database: process.env.DB_NAME || 'apex_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test DB Connection & Init Tables
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

// Initialize Tables
async function initDB() {
  try {
    await pool.query(`CREATE TABLE IF NOT EXISTS courses (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), description TEXT, category VARCHAR(100), price DECIMAL(10,2), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`);
    await pool.query(`CREATE TABLE IF NOT EXISTS faculty (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), subject VARCHAR(100), experience VARCHAR(100), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`);
    await pool.query(`CREATE TABLE IF NOT EXISTS forum_posts (id INT AUTO_INCREMENT PRIMARY KEY, user_id INT, author_name VARCHAR(255), title VARCHAR(255), content TEXT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`);
    console.log("Database tables verified/created.");
  } catch (err) {
    console.error("Failed to initialize tables:", err);
  }
}
initDB();

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

// API Route: Get All Leads (Enrollments & Contacts)
app.get('/api/leads', async (req, res) => {
  try {
    const [enrollments] = await pool.query('SELECT id, name, email, phone, course, created_at FROM enrollments ORDER BY created_at DESC');
    res.json({ success: true, leads: enrollments });
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ error: 'Database error while fetching leads' });
  }
});

// API Route: Get Stats
app.get('/api/stats', async (req, res) => {
  try {
    const [enrollments] = await pool.query('SELECT COUNT(*) as count FROM enrollments');
    const [users] = await pool.query('SELECT COUNT(*) as count FROM users WHERE role="student"');
    
    res.json({ 
      success: true, 
      stats: {
        revenue: enrollments[0].count * 5000, // mock calculation
        students: users[0].count,
        enrollments: enrollments[0].count
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

// API Route: Forum
app.get('/api/forum', async (req, res) => {
  try {
    const [posts] = await pool.query('SELECT * FROM forum_posts ORDER BY created_at DESC');
    res.json({ success: true, posts });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

app.post('/api/forum', async (req, res) => {
  const { author_name, title, content } = req.body;
  try {
    const [result] = await pool.query('INSERT INTO forum_posts (author_name, title, content) VALUES (?, ?, ?)', [author_name || 'Anonymous', title, content]);
    res.json({ success: true, id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_key_123';

// API Route: Register User
app.post('/api/auth/register', async (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password) return res.status(400).json({ error: 'All fields required' });

  const assignedRole = role === 'admin' || role === 'teacher' ? role : 'student';

  try {
    const [existing] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
    if (existing.length > 0) return res.status(400).json({ error: 'Email already registered' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString('hex');

    const [result] = await pool.execute(
      'INSERT INTO users (name, email, password, role, is_verified, verification_token) VALUES (?, ?, ?, ?, ?, ?)',
      [name, email, hashedPassword, assignedRole, false, verificationToken]
    );

    // Send Verification Email
    const verifyLink = `http://localhost:5173/verify?token=${verificationToken}`;
    
    // Only attempt to send if RESEND_API_KEY is properly set in .env
    if (process.env.RESEND_API_KEY) {
       await resend.emails.send({
         from: 'Apex Academy <onboarding@resend.dev>',
         to: email,
         subject: 'Verify your Apex Academy Account',
         html: `
           <h2>Welcome to Apex Academy!</h2>
           <p>Hi ${name},</p>
           <p>Please verify your email address by clicking the link below:</p>
           <a href="${verifyLink}" style="padding: 10px 20px; background: #ea580c; color: #fff; text-decoration: none; border-radius: 5px;">Verify Email</a>
           <p>If you did not sign up, please ignore this email.</p>
         `
       });
    } else {
       console.log('Mock Email Verification Link:', verifyLink);
    }

    res.status(201).json({ success: true, message: 'Registration successful! Please check your email to verify your account.' });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

// API Route: Login User
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

  try {
    const [users] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
    if (users.length === 0) return res.status(400).json({ error: 'Invalid credentials' });

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    // if (!user.is_verified && user.role === 'student') {
    //    return res.status(403).json({ error: 'Please verify your email address before logging in.' });
    // }

    const token = jwt.sign({ id: user.id, name: user.name, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ success: true, token, user: { name: user.name, email: user.email, role: user.role } });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

// API Route: Verify Email
app.post('/api/auth/verify', async (req, res) => {
  const { token } = req.body;
  if (!token) return res.status(400).json({ error: 'Token is missing' });

  try {
    const [users] = await pool.execute('SELECT * FROM users WHERE verification_token = ?', [token]);
    if (users.length === 0) return res.status(400).json({ error: 'Invalid or expired verification token' });

    const user = users[0];

    await pool.execute(
      'UPDATE users SET is_verified = ?, verification_token = ? WHERE id = ?',
      [true, null, user.id]
    );

    const jwtToken = jwt.sign({ id: user.id, name: user.name, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ success: true, token: jwtToken, user: { name: user.name, email: user.email, role: user.role } });
  } catch (error) {
    console.error('Verify error:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
