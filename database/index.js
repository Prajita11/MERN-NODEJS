const mongoose= require('mongoose')

function connectToDatabase(){
    mongoose.connect('process.env.MONGODB_URI')
    console.log("Database connected successfully")
}

module.exports = connectToDatabase

//test1