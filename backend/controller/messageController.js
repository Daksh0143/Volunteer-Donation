const Message =require("../models/message.model")

const postMessage=async(req,res,next)=>{
    const { name, email, phone, message } =req.body
    
    if(!name || !email || !phone || !message){
        return res.status(401).json({
            success:false,
            message:"Please Provide all detail"
        })
    }
    try {
        await Message.create({name,email,phone,message})
        res.status(201).json({
            success:true,
            message:"Message Successfully Sent"
        })
    } catch (error) {
        if(error.name==="ValidationError"){
            const validationErrors=Object.values(error.errors).map(
                (err)=>err.message
            )
            const errorMessage=validationErrors.join(" , ");
            return res.status(401).json({
                success:false,
                message:errorMessage
            })
        }
        return res.status(501).json({
            success:false,
            message:"Internal Server Error",
            error:error
        })
    }
}


module.exports={postMessage}