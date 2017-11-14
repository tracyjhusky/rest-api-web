const express = require('express');
const app = express();
const path = require("path");

app.get('/',function(req,res){
     res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/css/style.css',function(req,res){
     res.sendFile(path.join(__dirname+'/css/style.css'));
});

app.get('/js/script.js',function(req,res){
     res.sendFile(path.join(__dirname+'/js/script.js'));
});

app.listen(process.env.PORT || 8000);
