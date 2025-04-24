import jwt from "jsonwebtoken";

const secretKey = "your_secret_key"; // Use env variable in production

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  // Token format: "Bearer <token>"
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ error: "Access token missing" });

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    req.user = user; // Attach decoded user info to request if needed
    next();
  });
};
