var express = require('express');
var bp = require('body-parser');
var MongoClient = require('mongodb').MongoClient

var app = express();

app.use(express.static('public'));
app.use(bp.json());

var db

MongoClient.connect('mongodb://admin:admin123@ds243049.mlab.com:43049/aakritidb',(err, database) => {
    if (err) return console.log(err) 
    db = database
})

app.listen(
    3000,()=>{
        console.log('server is ready')
    }   
)

app.post('/addmydata', (req,res)=>{
    db.collection('angulardb').save(req.body, (err,result)=>{
    if(err) return console.log(err);
    console.log('saved to db');
})
})