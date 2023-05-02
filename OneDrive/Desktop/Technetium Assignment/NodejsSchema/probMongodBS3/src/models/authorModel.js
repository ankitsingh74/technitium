const mongoose = require('mongoose')

const authorSchema=new mongoose.Schema({
    // { 
    //     author_id:2,
    //     author_name:"J.k Rowling",
    //     age:60,
    //     address:"Britain"
    // } 

    author_id:{
        type:Number,
        unique:true,
        required:true
    },
    author_name:String,
    age:Number,
    address:String

},{timestamps:true})

module.exports = mongoose.model('Author', authorSchema)
