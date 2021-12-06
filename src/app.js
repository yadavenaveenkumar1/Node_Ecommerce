const express = require("express");
const path =require("path");
const app= express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const {check,ValidationResult}= require("express-validator");

const static_path = path.join(__dirname,"../public");
mongoose.connect("mongodb+srv://alakhail1:alakhail@cluster0.0wzgu.mongodb.net/register?retryWrites=true&w=majority").then(()=>console.log("Succesfull")).catch((err)=>{console.log(err)});

//const Register= require("./model/register");

app.use(express.static(static_path));
app.set("view engine","hbs");

// Body Parser

const urlencodedParser= bodyParser.urlencoded({extended:false})

app.get("/",(req,res)=>{ 
    res.render("index.hbs")
});
 app.get("/login",(req,res)=>{
     res.render("login.hbs");
 })
 app.get("/signup",(req,res)=>{
    res.render("signup");
})

app.post("/signup",urlencodedParser,[
    check('username','Enter the name')
    .exists()
    
],(req,res)=>{
    res.json(req.body)
})

app.get("/cart",(req,res)=>{
    res.render("cart");
})


app.listen(3000, ()=>{
    console.log("server running");
});