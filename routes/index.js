const express=require('express');
const router=express.Router();

console.log('router is fetch');
//use controller 
const homeController=require('../controllers/home_controller');
router.get('/',homeController.home);
//only yahi tkk
const homeControllerdata=require('../controllers/home_controllerdata');
router.post('/create_todo',homeControllerdata.homedata);
// user wali file idhr attach krni h 
router.use('/users',require('./users'));

module.exports=router;    //import routes to use any where 