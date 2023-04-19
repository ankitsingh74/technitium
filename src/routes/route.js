const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
// const commonFile = require('./common')
const logger=require("../logger/logger")
const util=require("../util/helper")
const validator=require ("../validator/formatter")

router.get('/test-me', function (req, res) {
    logger.welcome();
    res.send('test-me This should be working!')
})

router.get('/test-me1', function (req, res) {
  util.FunctionUp()
  res.send('test-me1 This should be working!')
})

router.get('/test-me2', function (req, res) {
  util.getBatchInfo
  res.send('test-me2 This should be working!')
})

router.get('/test-me3', function (req, res) {
 console.log(validator.trim());
 res.send('test-me3 This should be working!')
})

router.get('/test-me4', function (req, res) {
 const _ = require('lodash');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const chunks = _.chunk(months, 4);
console.log(chunks);

const oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

const lastNine = _.tail(oddNumbers);
console.log(lastNine);

    res.send('test-me4 This should be working!')
});

// router.get('/test-you', function (req, res) {
//     console.log('This is the constant I created', commonFile.name)
//     res.send('This is the constant I created'+"  "+commonFile.func())

//     // res.send('Hello there, welcome to this application!')
//     // res.send('This is the constant I created'+" "+commonFile.name)
// });


module.exports = router;