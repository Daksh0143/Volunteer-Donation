const express=require("express")
const cors=require("cors")
require("dotenv").config()
const dbConnect=require("./database/db")
const messageRouter=require("./router/messageRoute")

const app=express()
app.use(cors({
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/v1/message",messageRouter)
dbConnect()

module.exports=app