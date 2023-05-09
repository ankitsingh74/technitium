const orderModel = require('../models/orderModel')
const productModel = require('../models/productModel')
const userModel = require('../models/userModel')

const createOrder = async function (req, res){
    let {userId,productId} = req.body
 let headerData=req.headers.isfreeappuser
//  console.log(headerData);
    if (!headerData) {
        return res.status(400).json({ error: 'Missing mandatory header: isFreeAppUser' });
      }

      const {balance,isFreeAppUser}=await userModel.findById(userId)
      const {price}=await productModel.findById(productId)
// console.log(balance);
// console.log(isFreeAppUser);
// console.log(price);
let currentdate=new Date()
let datetime=currentdate.getDate() + "/"
+ (currentdate.getMonth() + 1) + "/"
+ currentdate.getFullYear()
// console.log(datetime);
    if(headerData==="false"){    
    const order = new orderModel({
        
        userId:userId,productId:productId,amount:balance-price,isFreeAppUser:headerData,date:datetime
    })
    await order.save()
  return  res.send({mag:order, status:true})

    }else{
        const order = new orderModel({
        
            userId:userId,productId:productId,amount:0,isFreeAppUser:headerData,date:datetime
        })
        await order.save()
        return  res.send({mag:order, status:true})
    }

}



module.exports.createOrder = createOrder 