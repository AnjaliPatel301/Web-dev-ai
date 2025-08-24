const express = require('express')
const app=express()

app.use(express.json());
const dotenv= require("dotenv")
dotenv.config()
const apiRouter=require("./router/routes")

app.use(express.json())
app.use("/ai",apiRouter)
let PORT= process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`);
})
 