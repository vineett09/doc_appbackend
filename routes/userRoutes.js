const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookAppointmentController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require("../controllers/userCtrl");
const authMiddlewares = require("../middlewares/authMiddlewares");

const router = express.Router();

//routes
//Login || post

router.post("/login", loginController);

//register || post

router.post("/register", registerController);

//auth || post

router.post("/getUserData", authMiddlewares, authController);

//apply-doctor || post

router.post("/apply-doctor", authMiddlewares, applyDoctorController);

//notification-doctor || post

router.post(
  "/get-all-notification",
  authMiddlewares,
  getAllNotificationController
);

//notification-doctor || post

router.post(
  "/delete-all-notification",
  authMiddlewares,
  deleteAllNotificationController
);

//get all docter
router.get("/getAllDoctors", authMiddlewares, getAllDoctorsController);

//appointment
router.post("/book-appointment", authMiddlewares, bookAppointmentController);

//availability
router.post(
  "/check-availability",
  authMiddlewares,
  bookingAvailabilityController
);

//appointments list

router.get("/user-appointments", authMiddlewares, userAppointmentsController);

module.exports = router;
