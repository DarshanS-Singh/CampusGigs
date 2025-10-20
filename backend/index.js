const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const gigRoutes = require('./routes/gigRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection with timeout & clear logging
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000, // 5 seconds timeout
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // stop the server if DB connection fails
  });

// Test route
app.get('/', (req, res) => {
  res.send('CampusGigs Backend Running');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/gigs', gigRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
