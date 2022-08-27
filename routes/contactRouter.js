const express = require("express");
const Contact = require("../models/Contact");



const contactRouter = express.Router();

//post contact
contactRouter.post("/add" , async(req,res)=>{
    try {
        let newContact = new Contact (req.body);
        let result = await newContact.save();
        res.status(200).send({ contact : result, msg: "contact is added" });

    } catch (error) {
        console.log("error");
    }
});

//get all contact
contactRouter.get("/" , async(req,res)=>{
    try {
        let result = await Contact.find();
        res.send({ contact : result, msg: "all contact"});
    } catch (error) {
        console.log(error);
    }
});

//get contact by id
contactRouter.get("/:id", async (req, res)=> {
    try {
        const result = await Contact.findById({_id:req.params.id});
        res.send({ contact: result, msg: "contact is found"}); 
    } catch (error) {
        console.log(error);
    }
})

//delete contact
contactRouter.delete("/:id",async(req ,res)=>{
    try {
         let result = await Contact.findByIdAndDelete(req.params.id);
         res.send({ msg : "contact is deleted"});     
    } catch (error) {
        console.log("error");
    }
});

//update contact
contactRouter.put("/:id", async(req , res)=>{
    try {
        let result = await Contact.findByIdAndUpdate(
            {_id:req.params.id},
            {$set:{...req.body}});
            res.send({ msg : "contact is updated"});
    } catch (error) {
        console.log(error);
    }
});

module.exports = contactRouter;
