
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const resumeRoutes = require('./routes/resumeRoutes'); 

app.use('/api/auth', authRoutes);
app.use('/api/resumes', resumeRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/resume_platform")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
