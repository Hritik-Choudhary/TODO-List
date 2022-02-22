const express=require('express');
const router=express.Router();

//use users_controller
const userController=require('../controllers/users_controller');
router.get('/profile',userController.profile);


module.exports=router;