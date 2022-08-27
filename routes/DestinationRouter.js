const express = require("express");
const Destination = require("../models/Distination");

const DestinationRouter = express.Router();

//post destination
DestinationRouter.post("/add" , async(req,res)=>{
    try {
        let newdestination = new Destination (req.body);
        let result = await newdestination.save();
        res.status(200).send({ destination : result, msg: "destination is added" });

    } catch (error) {
        console.log("error");
    }
});

//get all destination
DestinationRouter.get("/" , async(req,res)=>{
    try {
        let result = await Destination.find();
        res.send({ destination : result, msg: "all destinations"});
    } catch (error) {
        console.log(error);
    }
});

//get destination by id
DestinationRouter.get("/:id", async (req, res)=> {
    try {
        const result = await Destination.findById({_id:req.params.id});
        res.send({ destination: result, msg: "destination is found"}); 
    } catch (error) {
        console.log(error);
    }
})

//delete destination
DestinationRouter.delete("/:id",async(req ,res)=>{
    try {
         
         let result = await Destination.findByIdAndDelete(req.params.id);
         res.send({ msg : "destination is deleted"});     
    } catch (error) {
        console.log("error");
        
    }
});

//update destination
DestinationRouter.put("/:id", async(req , res)=>{
    try {
        let result = await Destination.findByIdAndUpdate(
            {_id:req.params.id},
            {$set:{...req.body}});
            res.send({ msg : "destination is updated"});
    } catch (error) {
        console.log(error);
    }
});

module.exports = DestinationRouter;