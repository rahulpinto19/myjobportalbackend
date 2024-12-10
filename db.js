const mongoose = require("mongoose")

const url =   "mongodb+srv://rahulyadav252424:Yf2dsv8HUUhuAmGh@cluster0.sw3322j.mongodb.net/myJobPortal";

const connectToDb = async()=>
{
    await mongoose.connect(url)
    console.log("Connected to database")
}

connectToDb()