require('dotenv').config()
const express = require('express')
const connectToDatabase = require('./database')
const Blog = require('./model/blogModel')

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

 app.post("/blog" ,async(req,res) =>{
    // const description = req.body.description
    // const title = req.body.title
    // const subtitle= req.body.subtitle

    const { title ,subtitle ,description , image} = req.body
    if(!title || !subtitle || !description || !image){
        return res.status(400).json({
            message : "Please porovide title, description, subtitke , image"
        })
    }
     await Blog.create({
        title: title,
        subtitle :subtitle,
        description : description 
    })
    res.status(200).json({
    message: "Blog api hit successfully"
 })
})

app.listen(process.env.PORT,()=>
    console.log("NodeJs project has started")
)
