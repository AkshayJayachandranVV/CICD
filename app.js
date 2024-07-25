const express = require("express")
const app = express()


app.get("/",(req,res)=>{
    res.send("AKSHAY how are you")
})


app.listen(4000,() => {
    console.log("Connected to the server")
})