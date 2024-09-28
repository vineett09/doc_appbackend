// routes/searchRoutes.js
const express = require("express");
const router = express.Router();
const Doctor = require("../models/doctorModels"); // Assuming you have a Doctor model

// Search by specialization
router.get("/search", async (req, res) => {
  try {
    const specialization = req.query.specialization;
    const doctors = await Doctor.find({
      specialization: { $regex: specialization, $options: "i" },
    });
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
