const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  const token = req.header('token');
  if (!token) {
    return res.status(401).send({ message: 'Authentication error' });
  }
  try {
    const decoded = jwt.verify(token, 'randomString');
    console.log(decoded);
    req.user = decoded.user;
    next();
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: 'Invalid token' });
  }
};

module.exports = auth;
