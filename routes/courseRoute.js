const express =  require('express')
const router = express.Router();
const courseController = require('../controller/course')
const auth = require('../middleware/Auth')

// router.post('/signup',authController.register);
// router.post('/login',authController.login);
// router.post('/forget-password',authController.forgetPassword);
// router.get('/reset-password',authController.resetPassword);
// router.get('/allusers',authController.getAllUsers);

router.post('/create',auth,courseController.createCourse)
router.put('/update/:courseId',courseController.updateCourse)
app.get('/course/get/student')
app.get('/course/get/course-developer')

module.exports = router;