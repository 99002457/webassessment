var express= require('express');
var app= express();
var userList= require('./user.json')

var cors = function(req, res, next) { 
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    next(); 
} 
app.use(cors);

app.get("/checkUser",function(req,res){
    var au= req.query.username;
    var userobj=[];
    userList.forEach(user => {
        if(user.username==au)
        {
            res.status(200).send(true);
        }
        else
        {
            res.status(200).send(false);
        }
    });
})


app.listen(3004,function(){
    console.log("Server started in the post 3004")
})