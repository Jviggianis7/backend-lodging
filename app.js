const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const bcrypt = require('bcrypt');
const mongoose = require('mongoose');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

const mongo_uri ='mongodb+srv://admin:12345@midb.dqo6iw9.mongodb.net/';

mongoose.connect(mongo_uri, function(err){
    if(err){
        throw err;
    } else{
        console.log('Successfull connected to ${mongo_uri}');
    }
});

app.get('/', (req, res)=>{

});
app.listen(3000,()=>{
    console.log('server started');
})
module.exports = app;
console.log('hello wordl!!');