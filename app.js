const express = require("express")
const app = express()


app.get("/",(req,res)=>{
    res.send("Brototype")
})


app.listen(4000,() => {
    console.log("Connected to the server")
})