
const  bookSchema = require('../model/bookModel');

const createBook= async function(req, res){
    let data=req.body;
    console.log(data);
    let savedData=await bookSchema.create(data)
    res.send({msg:savedData})
}

const getBook=async function(req,res){
    let allBook = await bookSchema.find()
    res.send({msg:allBook})
}

module.exports.createBook=createBook
module.exports.getBook=getBook