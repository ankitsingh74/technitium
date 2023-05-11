
const jwt = require("jsonwebtoken");
// const userModel = require("../models/userModel");

const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token 
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    //If no token is present in the request header return error
    if (!token) return res.send({ status: false, msg: "token must be present" });
    try{
    let decodedToken = jwt.verify(token, "secretkey");
    next()
  }catch(error){
    // console.log("token is invaliddddddd");
    return res.status(400).send({ status: false, msg: "token is invalid" });
  }
  
}


const authorise = async function(req, res, next) {
    // comapre the logged in user's id and the id in request
    let token = req.headers["x-auth-token"]
    if(!token) return res.send({status: false, msg: "token must be present in the request header"})

    try{
      var decodedToken = jwt.verify(token, "secretkey");
      req.user=decodedToken
      next()
    }catch(error){
      return res.send({ status: false, msg: "token is invalid" });
    }

}

module.exports.authenticate=authenticate
module.exports.authorise=authorise