const express = require('express');
const bookController=require('../controllers/bookController')
const router = express.Router();

router.get('/test-me', function(req, res){
    res.send({msg:"my cool get Api"})
})

router.post('/createBook', bookController.createBook);//for creating book in db

router.get('/getBookList',bookController.getBookList)//

router.post('/getBooksInYear', bookController.getBooksInYear);

router.post('/getParticularBooks', bookController.getParticularBooks);

router.get('/getXINRBooks', bookController.getXINRBooks);

router.get('/getRandomBooks', bookController.getRandomBooks);

router.get('/getBook', bookController.getBook);

module.exports=router