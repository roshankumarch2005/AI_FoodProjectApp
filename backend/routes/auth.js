const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/forgetPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

router.route("/logout").get(authController.logout);

// router.get("/test", (req, res) => {

//   console.log("TEST ROUTE HIT");

//   res.json({ success: true });

// });

router.route("/me").get(authController.protect, authController.getUserProfile);
router
  .route("/password/update")
  .put(authController.protect, authController.updatePassword);
router
  .route("/me/update")
  .put(authController.protect, authController.updateProfile);

module.exports = router;
