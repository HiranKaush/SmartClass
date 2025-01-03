const express = require("express");
const requireAuth = require("../middleware/requireAuth");

const {
  teacherRegister,
  teacherLogin,
  getTeachersByInstituteId,
  teacherForgotPassword,
  getTeacher,
  updateTeacher,
  deleteTeacher,
  getTeacherByEmail
} = require("../controllers/TeacherContorller");

const router = express.Router();

// Teacher login
router.post("/login", teacherLogin);

// Teacher forgot password
router.post("/forgotpassword", teacherForgotPassword);


router.use(requireAuth);

// Create a teacher
router.post("/register", teacherRegister);


// Get one teacher
router.get("/getone/:id", getTeacher);

router.get("/getTeachersByInstituteId/:instituteId", getTeachersByInstituteId);

// UPDATE a teacher
router.patch("/update/:id", updateTeacher);

// DELETE a teacher
router.delete("/delete/:id", deleteTeacher);

router.get("/getTeacherByEmail/:email", getTeacherByEmail);

module.exports = router;
