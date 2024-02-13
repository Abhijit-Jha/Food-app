const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://abhijeetjha913:IsO4C28Lk8nYGtzT@abhijitjha.abiny0p.mongodb.net/Food_app")

const UserSchema = new mongoose.Schema({
    first_name : String,
    last_name : String,
    username : String,
    date : Date,
    Address : String,
    Phone : Number,
    password:String
})


const User = new mongoose.model("User",UserSchema)

module.exports = User

