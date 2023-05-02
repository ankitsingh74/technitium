const express = require('express')
var bodyParser = require('body-parser')
const route = require('./routes/route')

const {default:mongoose} = require('mongoose')

const app =express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://ankitroy2292:OGOT1dcGwSofat7G@cluster0.gskxwwd.mongodb.net/Ankitroy2292-dB", {
    useNewUrlParser:true
})
.then(()=>console.log("MongoDb is connected"))
.catch(err=>console.log(err));

app.use('/', route);

const PORT=3000;
app.listen(PORT, function(){
    console.log("Express is running on port "+PORT);
})