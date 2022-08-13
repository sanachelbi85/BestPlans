const express = require("express");
const User = require("../models/User");
const UserRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt= require("jsonwebtoken");
const { loginRules, registerRules, validation } = require("../middelware/validator");
const isAuth= require("../middelware/passport");


//register User
UserRouter.post("/register", registerRules(), validation, async(req,res)=>{
    const{ name, lastName, email, password } = req.body;
    try {
        let newuser = new User ({ name, lastName, email, password });

// check if the email exist
        const searchedUser = await User.findOne({email});
        if(searchedUser){
            return res.status(400).send({msg: "email is already exist"});
        }

// hash password
        const salt = 10;
        const gensalt = await bcrypt.genSalt(salt);
        const hashedPassword = await bcrypt.hash(password , genalt); 
        newuser.password = hashedPassword;
//generate a token
const payload ={
    _id: newuser._id,
};
const token = await jwt.sign(payload, process.env.SecretOrkey, {
    expiresIn: 3600,
}); 
console.log(token); 

// save user
        // const newUserToken = await newuser.save();
        // const payload={
        //     _id: newUserToken._id,
        //     name: newUserToken.name,
        // };
        // const token = await jwt.sign(payload, process.env.SecretOrkey, {
        //     expiresIn: 3600,
        // }); 
        await newuser.save()
        res.status(200).send({ newuserToken, msg: "user is saved", token: `Bearer ${token}`});

    } catch (error) {
        res.status(500).send("can not save user") ;
        console.log(error)
    }
});

//login
UserRouter.post("/login", loginRules(), validation, async(req,res)=>{
    const{ email, password } = req.body;
    try {
        //find if th user exist
        const searchedUser = await User.findOne({ email });
        //if the email not exist
        if (!searchedUser){
            return res.status(400).send({ msg: "bad Credential "});
        }
        //password are equals
        const match = await bcrypt.compare(password, searchedUser.password);
        if(!match){
            return res.status(400).send({ msg: "bad Credential "});
        }
//cree un token
const payload={
    _id: searchedUser.id,
    name: searchedUser.name,
};
const token = await jwt.sign(payload, process.env.SecretOrkey, {
    expiresIn: 3600,
}); 
console.log(token);

//send the users
        res.status(200).send({ user:  searchedUser, msg:"sucess", token: `Bearer ${token}`});
    } catch (error) {
        res.status(500).send({ msg: "can not get the user"});
    }
})

UserRouter.get("/current", isAuth(), (req,res) => {
    res.send({ user: req.user });
});
module.exports = UserRouter;