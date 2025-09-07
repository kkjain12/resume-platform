const express = require('express');
const router = express.Router();
const { register, login, me } = require('../controllers/authcontroller');
const authMiddleware = require('../controllers/authcontroller').authMiddleware;


router.post('/register', register);
router.post('/login', login);
router.get('/me', authMiddleware, me);


module.exports = router;