const express = require("express");
const favoris = require("../models/Favoris");


const FavorisRouter = express.Router();

//post favoris
FavorisRouter.post("/add" , async(req,res)=>{
    try {
        let newfavoris = new favoris (req.body);
        let result = await newfavoris.save();
        res.status(200).send({ favoris : result, msg: "favoris is added" });
    } catch (error) {
        console.log("error");
    }
});

//get all favoris
FavorisRouter.get("/" , async(req,res)=>{
    try {
        let result = await favoris.find();
        res.send({ favoris : result, msg: "all favoris"});
    } catch (error) {
        console.log(error);
    }
});

//get favoris by id
FavorisRouter.get("/:id", async (req, res)=> {
    try {
        const result = await favoris.findById({_id:req.params.id});
        res.send({ favoris: result, msg: "favoris is found"}); 
    } catch (error) {
        console.log(error);
    }
})

//delete favoris
FavorisRouter.delete("/:id",async(req ,res)=>{
    try {
         
         let result = await favoris.findByIdAndDelete(req.params.id);
         res.send({ msg : "favoris is deleted"});     
    } catch (error) {
        console.log("error");
        
    }
});

//update favoris
FavorisRouter.put("/:id", async(req , res)=>{
    try {
        let result = await favoris.findByIdAndUpdate(
            {_id:req.params.id},
            {$set:{...req.body}});
            res.send({ msg : "favoris is updated"});
    } catch (error) {
        console.log(error);
    }
});

module.exports = FavorisRouter;