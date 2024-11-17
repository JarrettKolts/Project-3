const jwt = require('jsonwebtoken');

const secret = 'your-secret-key'; // Replace with your actual secret key
const expiration = '2h'; // Token expiration time

const authMiddleware = ({ req }) => {
  // Token may be sent via req.body, req.query, or headers
  let token = req.body.token || req.query.token || req.headers.authorization;

  // Remove 'Bearer ' if token is in the header
  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  if (!token) {
    return req;
  }

  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data; // Attach user info to request
  } catch {
    console.log('Invalid token');
  }

  return req;
};

module.exports = { authMiddleware };