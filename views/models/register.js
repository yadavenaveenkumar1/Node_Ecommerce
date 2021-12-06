const mongoose= require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
   
    eemail:{
        type:String,
        required:true,
        unique:true
        
    },
    password:{
        type:String,
        required:true
        
    },
    confirmPassword:{
        type:String,
        required:true
    }
});

const Register = new mongoose.model('Data',userSchema);

module.exports= Register;