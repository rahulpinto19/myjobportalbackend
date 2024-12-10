const express = require("express")
const app = express()
const port = 8080
app.use(express.json())
const cors = require("cors")
app.use(cors())
const db = require('./db.js')

const upload = require('./routes/uploadjob.js')
const fetchjob = require('./routes/fetchjobs.js')
app.use("/",upload)
app.use("/",fetchjob)
app.listen(port,()=>
{
    console.log("Backend started at 8080")
})