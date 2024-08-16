require('dotenv').config()
const express = require('express')
const connectToDatabase = require('./database')

const app =express()
app.use(express.json())

connectToDatabase()

app.get("/",(req ,res)=>{
    res.status(200).json({
        hello : "This is home page"
    })
})

// app.get("/about" ,(req, res) =>{
//     res.json({
//         message : "This is about page"
//     })
// })

app.post("/blog" ,(req,res) =>{
    console.log(req.body)
    res.status(200).json({
    message: "Blog api hit successfully"
 })
})

app.listen(process.env.PORT,()=>
    console.log("NodeJs project has started")
)
