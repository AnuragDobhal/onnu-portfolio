const express = require('express');
const router = express.Router();
// const jwt = require('jsonwebtoken');


require('../DB/conn');
const User = require("../models/userSchema");

// router.get('/',(req,res)=>{
// res.send("hello from backed router.js file")
// });



router.post('/contact',async(req,res)=>{               //creating route
    const { name,email,message } = req.body;  //get user data

    if(!name || !email || !message ){  //check user validation
        return res.status(422).json({error:"please, fill all the fields"});
    }
    try{             
        const userExist = await User.findOne({email:email});  //check the email already registered or not
 
        if(userExist){
         return res.status(422).json({error:"Email already exist"}); //if already already exist or registered (through the user out😄)
     }
    // else if(password != cpassword){
    //  return res.status(422).json({error:"Password should be same"}); //if password and confirm password didn't match
    // }
    else{
 
     const user = new User({ name , email , message }); // get the user data if not registered
  
                 //  Now before saving the data in the DB we need to HASH (encrypt) it .
                 // this hashing code is is UserSchema.js file .
                 
     const userRegister = await user.save();         // save the data in a database collection
     res.status(201).json({ mess:" Thanks for contacting us ,We will revert you soon" }); // user registered successfully (if data is saved to DB collection 👍)
   }
     } catch(err){             // catch the Error if there's any
         console.log(err);     //show it on console
     }
 });


module.exports = router;