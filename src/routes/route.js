const express = require('express');
const { route } = require('express/lib/application');
const query = require('express/lib/middleware/query');
const router = express.Router();


// ASSIGNMENT:
// you will be given an array of persons ( i.e an array of objects )..each person will have  a {name: String , age: Number, votingStatus: true/false(Boolean)}
// take input in query param as votingAge..and for all the people above that age, change votingStatus as true
// also return an array consisting of only the person that can vote


let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]
 
router.post('/persons', function(req, res){
    let votingperson=[]
    let votingAge=req.query.votingAge
    for (let i = 0; i < persons.length; i++) {
        
        const element = persons[i];
        if(element.age>=votingAge){
            element.votingStatus=true
            votingperson.push(element)
        }
    }
    if(votingperson.length!==0){
     return res.send({data:votingperson, status:true})
    }
    return res.send({msg:"data not availlable"})
})


module.exports = router;