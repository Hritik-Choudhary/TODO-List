const express=require('express');
const router=express.Router();

console.log('router is fetch');
//use controller 
const homeController=require('../controllers/home_controller');
router.get('/',homeController.home);
//only yahi tkk
// ye mera h

module.exports=router;    //import routes to use any where 