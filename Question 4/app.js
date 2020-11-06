    var express= require('express');
    var app= express();
    var hotelList= require('./hotel.json')

    var cors = function(req, res, next) { 
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        next(); 
    } 
    app.use(cors);


    app.get("/showAll",function(req,res){
        res.status(200).send(hotelList)
    })

    app.get("/showByCity",function(req,res){
        var ht= req.query.city;
        var newhotelList=[];
        hotelList.forEach(hotel => {
            if(hotel.City==ht)
            {
                newhotelList.push(hotel)
            }
        });
        res.status(200).send(newhotelList);
    })

    app.get("/showByType",function(req,res){
        var ht= req.query.Type;
        var newhotelList=[];
        hotelList.forEach(hotel => {
            if(hotel.type=ht)
            {
                newhotelList.push(hotel)
            }
        });
        res.status(200).send(newhotelList);
    })
    app.get("/showByCuisine",function(req,res){
        var ht= req.query.cus;
        var newhotelList=[];
        hotelList.forEach(hotel => {
            if(hotel.type=ht && isArray(hotel))
            {
                 hotel.forEach(element => {
                    if(element==ht)
                    {newhotelList.push(hotel)}
                });
            }
        });
        res.status(200).send(newhotelList);
    })
 
 
    app.listen(3004,function(){
        console.log("Server started in the post 3004")
    })