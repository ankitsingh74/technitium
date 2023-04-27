
const userModel=require('../model/userModel')
const {userSchema, bookSchema} = require('../model/userModel');

const createUser= async function(req, res){
    let data=req.body;
    console.log(data);
    let savedData=await userSchema.create(data)
    res.send({msg:savedData})
}

const getUser=async function(req,res){
    let allUser = await userModel.find()
    let name=req.query.firstName
    console.log(allUser.filter((ele)=>ele.firstName==name));
    let dname=allUser.filter((ele)=>ele.firstName==name)
    // res.send({msg:allUser})
    if(name){
        return res.send({msg:dname})
    }
return res.send({msg:allUser})

}

module.exports.createUser=createUser
module.exports.getUser=getUser