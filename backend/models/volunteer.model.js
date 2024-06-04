const mongoose=require("mongoose")


const volunteerSchema=new mongoose.Schema({
    name:String,
    email:String,
    amount:{
        type:String,
        required:true
    },
    orderId:{
        type:String,
        required:true
    },
    paymentStatus:{
        type:String
    }
},{timestamps:true})


const Volunteer= mongoose.model("Volunteer",volunteerSchema);


module.exports=Volunteer