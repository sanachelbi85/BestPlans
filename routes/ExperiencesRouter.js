const express = require("express");
const experience = require("../models/Experiences");


const ExperiencesRouter = express.Router();

//post experience
ExperiencesRouter.post("/add" , async(req,res)=>{
    try {
        let newexperience = new experience (req.body);
        let result = await newexperience.save();
        res.status(200).send({ experience : result, msg: "experience is added" });
    } catch (error) {
        console.log("error");
    }
});

//get all experiences
ExperiencesRouter.get("/" , async(req,res)=>{
    try {
        let result = await experience.find();
        res.send({ experience : result, msg: "all experiences"});
    } catch (error) {
        console.log(error);
    }
});

//get experiences by id
ExperiencesRouter.get("/:id", async (req, res)=> {
    try {
        const result = await experience.findById({_id:req.params.id});
        res.send({ experience: result, msg: "experience is found"}); 
    } catch (error) {
        console.log(error);
    }
})

//delete experience
ExperiencesRouter.delete("/:id",async(req ,res)=>{
    try {
         
         let result = await experience.findByIdAndDelete(req.params.id);
         res.send({ msg : "experience is deleted"});     
    } catch (error) {
        console.log("error");
        
    }
});

//update experience
ExperiencesRouter.put("/:id", async(req , res)=>{
    try {
        let result = await experience.findByIdAndUpdate(
            {_id:req.params.id},
            {$set:{...req.body}});
            res.send({ msg : "experience is updated"});
    } catch (error) {
        console.log(error);
    }
});

module.exports = ExperiencesRouter;