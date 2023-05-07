const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))



app.use(
    function (req, res, next) {
        // console.log("inside GLOBAL MW");
        //create a middleware using app.use(functionName) so that this piece of code gets called everytime any api is called

        const assignmentMW = function (req, res, next) {
            var currentdate = new Date();
            var datetime = currentdate.getDate() + " "
                + (currentdate.getMonth() + 1) + " "
                + currentdate.getFullYear() + " "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();

            let ip = req.ip
            let url = req.originalUrl
            console.log(currentdate);
            console.log(`${datetime}${ip} ${url}`)
            next()
        }

        app.use(assignmentMW)
        next();
        app.use('/', route);
    }
    
);




app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
