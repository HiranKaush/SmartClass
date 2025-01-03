const express = require('express');
const router = express.Router();

const studentController = require('../controllers/StudentForTeacherController');

// Define routes without middleware
router.post("/createStudentForTecher", studentController.createStudentForTecher);
router.get('/getStudentForTeacherByclassID/:classID', studentController.getStudentsByClassID);

module.exports = router;
