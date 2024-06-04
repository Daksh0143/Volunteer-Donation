const mongoose=require("mongoose")
require("dotenv").config({path:"../.env"})

const dbConnect=async()=>{
    await mongoose.connect(process.env.MONGO_URI,{
        dbName:"Volunteering_Project"
    }).then((result) => {
       console.log("DB Connected Successfully") 
    }).catch((err) => {
        console.log("Some thing error")
    });
}

module.exports=dbConnect