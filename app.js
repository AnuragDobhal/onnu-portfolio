
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app= express();

dotenv.config({path:'./config.env'});
require('./DB/conn');
app.use(express.json());
 //const User = require('./model/userSchema');

app.use(require('./router/auth'));  //link the router(auth.js) file to make app.js clean 

const PORT = process.env.PORT || 9000;


// Middleware 

// const middleware =(req,res,next)=>{
//     console.log("hello from MIDDLEWARE")
//     next();
// }

// app.get('/',(req,res)=>{
//     res.send("hello world")
// })
// app.get('/about',(req,res)=>{
//     res.send("hello world about")
// })

// app.get('*',(req,res)=>{
//     res.send("ERROR 404 , Seems you are lost");
//     });

    if(process.env.NODE_ENV == "production"){
        app.use(express.static("client/build"));
        const path = require("path");
        app.get("*",(req,res)=>{
            res.sendFile(path.resolve(__dirname,'client','build','index.html'))
        })
    }

app.listen(PORT,()=>{
console.log(`server is running totally fine at port ${PORT}`)
});