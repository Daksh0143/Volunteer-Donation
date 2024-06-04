const mongoose=require("mongoose")
const validator=require("validator")
const messageSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:[3,"Name Must Contain At Least 3 Character"],
        maxLenfgth:[10,"Name cannot exceed 10 Character"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Provide a valid Email"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"Phone must contain at least 10 character"],
        maxLength:[10,"Phone cannot exceed 10 character"]
    },
    message:{
        type:String,
        required:true
    },
},{timestamps:true})


const Message=mongoose.model("Message",messageSchema)

module.exports=Message