const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")
const productController = require('../controllers/productController')
const orderController = require('../controllers/orderController')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createBook", commonMW.abc, BookController.createBook  )
router.post("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.abc, UserController.basicCode, commonMW.mid4)

router.post('/createUser', UserController.createUser)
router.post('/createProduct', productController.createProduct)
router.post('/createOrder',commonMW.mid2, orderController.createOrder)


module.exports = router;