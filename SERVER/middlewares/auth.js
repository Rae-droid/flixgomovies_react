import jwt from "jsonwebtoken";

export const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user ID to request object for later use
    req.userId = decoded.id; // Assuming your token contains `id`

    next();
  } catch (err) {
    return res.status(403).json({ message: "Token invalid or expired" });
  }
};
