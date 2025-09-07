const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');
const { authMiddleware } = require('../controllers/authcontroller');

// Routes
router.post('/', authMiddleware, resumeController.createResume);
router.get('/', authMiddleware, resumeController.getResumes);

module.exports = router;
