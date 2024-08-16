require('dotenv').config()
const express = require('express')
const connectToDatabase = require('./database')

const app =express()

connectToDatabase()

app.get("/",(req ,res)=>{
    res.status(200).json({
        hello : "This is home page"
    })
})

app.get("/about" ,(req, res) =>{
    res.json({
        message : "This is about page"
    })
})


app.listen(process.env.PORT,()=>
    console.log("NodeJs project has started")
)
