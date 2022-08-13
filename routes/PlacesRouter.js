const express = require("express");
const Places = require("../models/Places");

const PlacesRouter = express.Router();

//post place
PlacesRouter.post("/add" , async(req,res)=>{
    try {
        let newplaces = new Places (req.body);
        let result = await newplaces.save();
        res.status(200).send({ places : result, msg: "place is added" });

    } catch (error) {
        console.log("error");
    }
});

//get all places
PlacesRouter.get("/" , async(req,res)=>{
    try {
        let result = await Places.find();
        res.send({ places : result, msg: "all places"});
    } catch (error) {
        console.log(error);
    }
});

//get place by id
PlacesRouter.get("/:id", async (req, res)=> {
    try {
        const result = await Places.findById({_id:req.params.id});
        res.send({ places: result, msg: "place is found"}); 
    } catch (error) {
        console.log(error);
    }
})

//delete place
PlacesRouter.delete("/:id",async(req ,res)=>{
    try {
         
         let result = await Places.findByIdAndDelete(req.params.id);
         res.send({ msg : "place is deleted"});     
    } catch (error) {
        console.log("error");
        
    }
});

//update place
PlacesRouter.put("/:id", async(req , res)=>{
    try {
        let result = await Places.findByIdAndUpdate(
            {_id:req.params.id},
            {$set:{...req.body}});
            res.send({ msg : "place is updated"});
    } catch (error) {
        console.log(error);
    }
});

module.exports = PlacesRouter;