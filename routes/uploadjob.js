const express = require("express")
const app = express()
const router = express.Router()
const cors = require("cors")
app.use(express.json())
app.use(cors())

const Job = require("../models/job")

router.post("/uploadjob",async(req,res)=>
{
    const newJobData  = req.body
    console.log(newJobData)
    try
    {
        const newJob = new Job(newJobData)
        const result = await newJob.save()
        if(result)
        {
            console.log(result)
            res.status(200).send({message:"job uploaded successfully",code:200})
        }
        else
        {
            res.send({message:"technical issue",code:500})
        }
    }
    catch(e)
    {
        res.send({message:"technical issue",error:e.message,code:500});
    }
    
})

module.exports = router