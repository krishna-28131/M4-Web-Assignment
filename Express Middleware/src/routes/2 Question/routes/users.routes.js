const express = require("express");
const fs = require("fs");
const path = require("path");
const cloudinary = require("../config/cloudinary.config");

const upload = require("../middleware/upload.middleware");
const uniqueEmailMiddleware = require("../middleware/uniqueEmail.middleware");

const router = express.Router();
const dbPath = path.join(__dirname, "../db.json");

/* Signup User */
router.post(
  "/signup",
  upload.single("profile"),
  uniqueEmailMiddleware,
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          error: "Profile image is required"
        });
      }

      const { name, email, password } = req.body;

      // Upload to Cloudinary
      const uploadResult = await cloudinary.uploader.upload(
        `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
        { folder: "profiles" }
      );

      const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password,
        profilePic: uploadResult.secure_url
      };

      db.users.push(newUser);
      fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

      res.status(201).json({
        message: "User registered successfully",
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          profilePic: newUser.profilePic
        }
      });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

module.exports = router;
