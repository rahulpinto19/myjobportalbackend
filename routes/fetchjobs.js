const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const Job = require("../models/job");

router.post("/fetchjob", async (req, res) => {

  const { jobtitle, jobtype, joblocation, salary } = req.body;

  console.log(req.body)
  const query = {};

  if(jobtitle)
    query.jobtitle = jobtitle
  if(jobtype)
    query.jobtype = jobtype
  if(joblocation)
    query.joblocation = joblocation
  if(salary?.minsalary || salary?.maxsalary)
  {
    query.salary = {}
    if(salary.minsalary)
        query.salary.$gte = salary.minsalary
    if(salary.maxsalary)
        query.salary.$lte = salary.maxsalary

  }
 
  console.log("this is the data in the query",query)
  try {
    const result = await Job.find(
        query
   
    );
    res.send({result:result,code:200});
  } catch (e) {
    res.send({ message: "error in the backend", error: e.message ,code:500});
  }
});

module.exports = router;
