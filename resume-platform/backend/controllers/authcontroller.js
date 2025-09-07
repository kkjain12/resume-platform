const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const JWT_SECRET = process.env.JWT_SECRET || 'secret123';


const generateToken = (user) => jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });


exports.register = async (req, res) => {
try {
const { name, email, password } = req.body;
if (!email || !password) return res.status(400).json({ msg: 'Email and password required' });
let user = await User.findOne({ email });
if (user) return res.status(400).json({ msg: 'User exists' });
const salt = await bcrypt.genSalt(10);
const hash = await bcrypt.hash(password, salt);
user = new User({ name, email, password: hash });
await user.save();
const token = generateToken(user);
res.json({ token, user: { id: user._id, email: user.email, name: user.name } });
} catch (err) {
console.error(err);
res.status(500).send('Server error');
}
};


exports.login = async (req, res) => {
try {
const { email, password } = req.body;
const user = await User.findOne({ email });
if (!user) return res.status(400).json({ msg: 'Invalid credentials' });
const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
const token = generateToken(user);
res.json({ token, user: { id: user._id, email: user.email, name: user.name } });
} catch (err) {
console.error(err);
res.status(500).send('Server error');
}
};


exports.authMiddleware = (req, res, next) => {
const token = req.header('Authorization')?.replace('Bearer ', '');
if (!token) return res.status(401).json({ msg: 'No token' });
try {
const decoded = jwt.verify(token, JWT_SECRET);
req.user = decoded;
next();
} catch (err) {
return res.status(401).json({ msg: 'Token invalid' });
}
};


exports.me = async (req, res) => {
try {
const user = await User.findById(req.user.id).select('-password');
res.json(user);
} catch (err) {
res.status(500).send('Server error');
}
};