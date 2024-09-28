const express = require("express");
const authMiddlewares = require("../middlewares/authMiddlewares");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
  deleteUserController,
} = require("../controllers/adminCtrl");

const router = express.Router();

//GET || Users

router.get("/getAllUsers", authMiddlewares, getAllUsersController);

//GET || Doctors

router.get("/getAllDoctors", authMiddlewares, getAllDoctorsController);

//post || Account status

router.post(
  "/changeAccountStatus",
  authMiddlewares,
  changeAccountStatusController
);

module.exports = router;
