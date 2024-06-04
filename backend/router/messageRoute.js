const express=require("express")

const router=express.Router()
const {postMessage} =require("../controller/messageController")


router.post("/postMessage",postMessage)


module.exports=router