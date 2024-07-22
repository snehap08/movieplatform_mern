const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Adjust path if needed

function verifyToken(req, res, next) {
  // Get token from Authorization header (Bearer token)
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY); // Use environment variable
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send('Invalid token.');
  }
}

module.exports = verifyToken;
