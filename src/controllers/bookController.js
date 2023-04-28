
const  bookSchema = require('../model/bookModel');

const createBook= async function(req, res){
    let data=req.body;
    console.log(data);
    let savedData=await bookSchema.create(data)
    console.log("Saved data- ",savedData)
    res.send({msg:savedData})
}

const getBookList=async function(req,res){
    let bookList = await bookSchema.find().select({bookName:1, authorName:1})
    res.send({msg:bookList})
}

const getBook=async function(req,res){
    let allBook = await bookSchema.find({bookName:"hi"})
    res.send({msg:allBook})
}


const getBooksInYear =async function(req,res){
    let Year=req.query.year;
    console.log(Year);
    let bookListYear = await bookSchema.find({year:`${Year}`})
    // let bookListYear = await bookSchema.find({year:+""+Year})
    // let bookListYear = await bookSchema.find({year:Year})
    res.send({msg:bookListYear})

}



const getParticularBooks =async function(req,res){
    let SpBook=req.body;
    console.log(SpBook);
    let particularBook = await bookSchema.find(SpBook)
    res.send({msg:particularBook})

}


const getXINRBooks =async function(req,res){
    let priceBook=req.query.price;
    console.log(priceBook);
    let allPriceBook = await bookSchema.find({price:{indian:`${priceBook}`}})
    res.send({msg:allPriceBook})

}

const getRandomBooks =async function(req,res){
    // let stockBook=req.query.price;
    // console.log(rdBook);
    let randomBook = await bookSchema.find({$and:[{stockAvailable:true}, {totalPages:{$gt:"500"}}]})
    res.send({msg:randomBook})

}


//getRandomBooks 

module.exports.createBook=createBook
module.exports.getBookList=getBookList
module.exports.getBook=getBook
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks