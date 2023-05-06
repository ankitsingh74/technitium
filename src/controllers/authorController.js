const authorModel=require('../models/authorModel')
const bookModel=require('../models/bookModel')
const createAuthor=async function(req, res){
    let data = req.body
    let saveData = await authorModel.create(data)
    res.send({msg:saveData})
}

const getBookByAuthorId=async function(req, res){
    let {author_id} =await authorModel.findOne({author_name:"Chetan Bhagat"})
    let allBook=await bookModel.find({author_id:author_id})
    console.log(author_id);
    res.send({msg:allBook})
}

const getBookDetails = async function(req, res){
    let booksall=await bookModel.find({_id:"645685d4634fae64123b9619"}).populate('author_id')
    res.send({msg:booksall})
}

module.exports.createAuthor=createAuthor
module.exports.getBookByAuthorId=getBookByAuthorId
module.exports.getBookDetails=getBookDetails