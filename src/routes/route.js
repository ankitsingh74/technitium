const express = require('express');
const bookController=require('../controllers/bookController')
const router = express.Router();

router.get('/test-me', function(req, res){
    res.send({msg:"my cool get Api"})
})

router.post('/createBook', bookController.createBook);
router.get('/getBook', bookController.getBook);

module.exports=router