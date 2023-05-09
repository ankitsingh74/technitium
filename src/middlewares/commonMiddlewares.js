
const userModel = require('../models/userModel')
const productModel = require('../models/productModel')

const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= async function ( req, res, next) {
    //validate user and product if true then create order
let userId =req.body.userId
let productId =req.body.productId
//  console.log(userId);
//  console.log(productId); 
let user = await userModel.findById({ _id:userId});
console.log(user);
let product = await productModel.findById({_id:productId});
console.log(product);
if (user==null){
    return res.send({
        status: false,
        msg: "user not exist",
      });
}else if(product==null){
    return res.send({
        status: false,
        msg: "product not exist",
      });
}else
 

    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}

const abc = function(req, res, next) {
    //get the users IP
    //save it in db
    // console log
    next()
}

const def = function(req, res, next) {
   //get the users IP
   //save it in db
   // console log
   next()
}

const xyz = function(req, res, next) {
   //get the users IP
   //save it in db
   // console log
   next()
}

module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
module.exports.abc = abc
