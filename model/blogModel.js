const { text } = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema ({
    title :{
        type: String
    },
    subtitle : {
        type : String ,
        unique : true
    },
    description : {
        type : Text
    },
    image :{
        type : String
    },
   
})

// @ts-ignore
const Blog = mongoose.model('Blog', blogSchema)

module.exports= Blog