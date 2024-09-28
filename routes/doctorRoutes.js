const express = require("express");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentsController,
  updateStatusController,
} = require("../controllers/doctorCtrl");

const authMiddlewares = require("../middlewares/authMiddlewares");

const router = express.Router();

// get doctor profile info

router.post("/getDoctorInfo", authMiddlewares, getDoctorInfoController);
// update profile

router.post("/updateProfile", authMiddlewares, updateProfileController);

// get single doc info

router.post("/getDoctorById", authMiddlewares, getDoctorByIdController);

// appointmenst

router.get(
  "/doctor-appointments",
  authMiddlewares,
  doctorAppointmentsController
);

//update status

router.post("/update-status", authMiddlewares, updateStatusController);

module.exports = router;
