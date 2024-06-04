const app=require("./index")
require("dotenv").config()



app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on ${process.env.PORT}`)
})