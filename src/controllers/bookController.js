const bookModel=require('../models/bookModel')
const authorModel=require('../models/authorModel')
const createBook=async function(req, res){
    let data = req.body
    let saveData=await bookModel.create(data)
    res.send({msg:saveData})
}
const updateBook=async function(req,res){
    let data=req.body
  let allBook=await bookModel.findOneAndUpdate (
    {name:"Two states"},
    {$set:data},
    {new:true}
  )
let {author_id}= allBook
  console.log(allBook);

let allAuthor=await authorModel.find({author_id:author_id})
let authorName=allAuthor[0].author_name
let updatedPrice=allBook.price
// console.log(authorName, updatedPrice);
console.log(allAuthor);
  res.send({authorName:authorName, updatedPrice:updatedPrice})
}


const findAuthors=async function (req, res){
    const author_id = await bookModel.find({price : {$gte:50, $lte:100}}).select({author_id:1,_id:0})
console.log(author_id);
    const array = []
    const arr = author_id.map((ele)=>ele.author_id)
    for (let i = 0; i < arr.length; i++) {
        id = arr[i]
        let author = await authorModel.findOne({author_id:arr[i]}).select({author_name:1, _id:0})
        array.push(author)
    }
    res.send({msg:array})
}


module.exports.createBook=createBook
module.exports.updateBook=updateBook
module.exports.findAuthors=findAuthors