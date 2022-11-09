const jwt = require("jsonwebtoken");

exports.protect = (req, res, next) => {
  const token = req.header("auth-token").split(" ")[1];
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
