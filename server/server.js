const express = require('express');

var app = express();

app.get('/',(req,res)=>{
    //res.send("hello");
    res.status(404).send("hello");
});


app.get('/users',(req,res)=>{
    res.send([{
       name:'test1'
    },{
        name:'test2'
    }]);
});
app.listen(3000);

module.exports.app  = app;