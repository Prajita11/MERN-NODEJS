const mongoose= require('mongoose')

function connectToDatabase(){
    mongoose.connect('')
    console.log("Database connected successfully")
}

module.exports = connectToDatabase

//test1