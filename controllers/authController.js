const jwt = require('jsonwebtoken');

exports.signToken = async (req, res, next) => {
  const token = jwt.sign({ uid: req.uid }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  res.status(200).json({
    success: true,
    token,
  });
};
