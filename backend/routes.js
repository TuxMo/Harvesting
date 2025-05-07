import express from "express";
import db from "./db.js";

const router = express.Router();

// HARVEST CLEANING
router.post("/cleaning", async (req, res) => {
  try {
    const { step, process, cleaningMethod, bestPractices, date } = req.body;

    const query = `
      INSERT INTO harvest_cleaning (step, process, cleaning_method, best_practice, date)
      VALUES (?, ?, ?, ?, ?)
    `;

    await db.execute(query, [step, process, cleaningMethod, bestPractices, date]);

    res.json({ success: true, message: "Cleaning form data saved successfully!" });
  } catch (error) {
    console.error("❌ DB Error:", error);
    res.status(500).json({ success: false, message: "Server error. Please try again later." });
  }
});


// HARVEST STORAGE
router.post("/storage", async (req, res) => {
  try {
    const { step, process, storageMethod, bestPractices, date } = req.body;

    const query = `
      INSERT INTO harvest_storage (step, process, storage_method, best_practice, date)
      VALUES (?, ?, ?, ?, ?)
    `;

    await db.execute(query, [step, process, storageMethod, bestPractices, date]);

    res.json({ success: true, message: "Storage form data saved successfully!" });
  } catch (error) {
    console.error("❌ DB Error:", error);
    res.status(500).json({ success: false, message: "Server error. Please try again later." });
  }
});


export default router;
