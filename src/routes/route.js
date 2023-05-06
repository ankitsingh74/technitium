const express = require('express')
const router = express.Router()
const authorController=require('../controllers/authorController')
const bookController=require('../controllers/bookController')

router.post('/createAuthor', authorController.createAuthor)
router.post('/createBook', bookController.createBook)

router.get('/getBookByAuthorId',authorController.getBookByAuthorId)
router.get('/findAuthors',bookController.findAuthors)
router.get('/getBookDetails',authorController.getBookDetails)
router.post('/updateBook',bookController.updateBook)

module.exports=router