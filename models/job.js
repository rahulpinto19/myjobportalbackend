const mongoose = require('mongoose');

// Define the schema
const JobSchema = new mongoose.Schema(
  {
    jobtitle: {
      type: String,
      required: [true, "Job title is required"],
    },
    salary: {
      type: Number,
      required: [true, "Salary is required"],
      min: [0, "Salary must be a positive number"],
    },
    joblocation: {
      type: String,
      required: [true, "Job location is required"],
      enum: {
        values: ["delhi", "mumbai", "hyderabad", "bangalore"],
        message: "{VALUE} is not a valid job location",
      },
    },
    jobtype: {
      type: String,
      required: [true, "Job type is required"],
      enum: {
        values: ["work-from-home", "work-from-office", "hybrid"],
        message: "{VALUE} is not a valid job type",
      },
    },
    jobdescription1: {
      type: String,
      required: [true, "Primary job description is required"],
      trim: true,
    },
    jobdescription2: {
      type: String,
      required: [true, "Secondary job description is required"],
      trim: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

// Create and export the model
const Job = mongoose.model("Job", JobSchema);
module.exports = Job;
