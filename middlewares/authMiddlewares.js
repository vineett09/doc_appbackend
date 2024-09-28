const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).send({
        message: "Authorization header missing",
        success: false,
      });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).send({
        message: "Token missing",
        success: false,
      });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        console.error("JWT verification error:", err);
        return res.status(401).send({
          message: "Auth failed",
          success: false,
        });
      } else {
        req.body.userId = decode.id;
        next();
      }
    });
  } catch (error) {
    console.error("Error in auth middleware:", error);
    res.status(401).send({
      message: "Auth failed",
      success: false,
    });
  }
};
