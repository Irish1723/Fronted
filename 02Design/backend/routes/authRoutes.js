import express from "express";
import db from "../db/connection.js";

const router = express.Router();

// ✅ SIGNUP ROUTE
router.post("/signup", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({ error: "Username and password required" });

  // Check if username already exists
  const checkUser = "SELECT * FROM users WHERE username = ?";
  db.query(checkUser, [username], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    if (results.length > 0)
      return res.status(409).json({ error: "Username already exists" });

    // Insert new user
    const insertUser = "INSERT INTO users (username, password) VALUES (?, ?)";
    db.query(insertUser, [username, password], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      res.status(201).json({ message: "User registered successfully" });
    });
  });
});

// ✅ LOGIN ROUTE
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({ error: "Username and password required" });

  const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.query(sql, [username, password], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    if (results.length === 0)
      return res.status(401).json({ error: "Invalid credentials" });

    res.json({ message: "Login successful", user: results[0] });
  });
});

export default router;
