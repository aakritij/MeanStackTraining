var express = require('express');

var app=express();

app.use(express.static('public'));

var userdata=[
    {
        name:"admin",
        city:"mumbai"
    },
    {
        name:"manager",
        city:"pune"
    }
]

app.get('/getuserdata', (requestAnimationFrame,res)=>{
    res.json(userdata);
})

app.listen(3000, ()=>{
    console.log('server is started');
})