
const productModel = require('../models/productModel')

const createProduct = async function(req, res){
    let savedProduct = await productModel.create(data)
    return res.send({msg:savedProduct})
}

module.exports.createProduct = createProduct