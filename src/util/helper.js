// Problem 2
// Module 2 : src/util/helper.js

// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Californium, W3D4, the topic for today is Nodejs module system’
	
// 	Call all these functions in route.js inside the test-me route handler

function FunctionUp(){
    const date=new Date().getDate()
    const month=new Date().getMonth()+1
   
    
  function getBatchInfo(){
        console.log(`Technitium,W5D1, ${(date/7).toFixed(2)}, the topic taught is about Nodejs module`);
    }

    return("Date-"+date+" Month-"+month+" "+getBatchInfo());
}
module.exports.FunctionUp=FunctionUp

