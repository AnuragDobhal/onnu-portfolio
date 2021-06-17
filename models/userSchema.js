const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
        email:{
        type:String,
        required:true
    },

        message:{
        type:String,
        required:true
    },
       tokens:[
           {
               token:{
                type:String,
                required:true
               }
           }
       ]
})


//Here we are generating tokens

userSchema.methods.generateAuthToken = async function (){  
    try{
           let token = jwt.sign({_id:this._id},process.env.SECRET_KEY); 
           this.tokens = this.tokens.concat({token:token});
     await this.save();
     return token
    }catch{
        console.log(err)
    }
}



//collection creation in DB 
const User = mongoose.model('USER',userSchema);

module.exports = User;