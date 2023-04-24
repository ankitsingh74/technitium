const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();


//return a missing number from the array starting Natural mumber
router.get('/sol1', function(req, resp){
 let array=[1,2,3,5,6,7]
 let len=array.length
 let asum=array.reduce((a,b)=>a+b)
let sum=(len+1) * (len+2)/2//n=len+1, n*(n+1)/2
let missingNumber=sum - asum
  // console.log(sum);
    // console.log(asum);


    return resp.send({msg:"missing number is ",data:missingNumber})
})



//return a missing number from the array starting from any number
router.get('/sol2', function(req, resp){
    let array=[33,34,35,37,38]
    // let array=[1,2,3,5,6,7]
    let len=array.length
    let asum=array.reduce((a,b)=>a+b)
    let sum=(2*array[0] + len)*(len+1)/2// Sn=n/2(2a + (n-1)d), where n=len+1, d=arr[1]-arr[0]
    // for(let i=array[0]; i<=array[len-1]; i++){
    //     sum+=i
    // }
    let missingNumber=sum - asum
    // console.log(sum);
    // console.log(asum);
    //  return resp.json(sum-asum)
     return resp.send({msg:"missing number is ",data:missingNumber})
    })



module.exports = router;