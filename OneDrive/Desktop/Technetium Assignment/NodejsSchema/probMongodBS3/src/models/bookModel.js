const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
    // { 
    //     name:"Two states",
    //     author_id:1,
    //     price:50,
    //     ratings:4.5,
    // } ,
name:{
    type:String,
    required:true
},
author_id:{
    type:Number,
    required:true
},


price:{
    type:Number,
    required:true
},

ratings:{
   type:Number,
   required:true
}

},{timestamps:true})


module.exports = mongoose.model('Book', bookSchema) 