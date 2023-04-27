const express = require('express');
const userModel = require('../model/userModel');
const userController=require('../controllers/userController')
const router = express.Router();

router.get('/test-me', function(req, res){
    res.send({msg:"my cool get Api"})
})

router.post('/createUser', userController.createUser);
router.get('/getUser', userController.getUser);

module.exports=router