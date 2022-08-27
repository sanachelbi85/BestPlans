const express = require("express");
const User = require("../models/User");
const UserRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  loginRules,
  registerRules,
  validation,
} = require("../middelware/validator");
const isAuth = require("../middelware/passport");

//register User
UserRouter.post("/register", registerRules(), validation, async (req, res) => {
  const { name, lastName, email, password } = req.body;
  try {
    let newUser = new User({ name, lastName, email, password });

    // check if the email exist
    const searchedUser = await User.findOne({ email });
    if (searchedUser) {
      return res.status(400).send({ msg: "email is already exist" });
    }

    // hash password
    const salt = 10;
    const gensalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, gensalt);
    newUser.password = hashedPassword;
    //generate a token
    const payload = {
      _id: newUser._id,
    };
    const token = await jwt.sign(payload, process.env.SecretOrkey, {
      expiresIn: 3600,
    });
    console.log(token);

    // save user
    /*  const newUserToken = await newuser.save();
         const payload={
             _id: newUserToken._id,
             name: newUserToken.name,
         };
         const token = await jwt.sign(payload, process.env.SecretOrkey, {
             expiresIn: 3600,
         }); */
    const newUserToken = await newUser.save();
    res
      .status(200)
      .send({ newUserToken, msg: "user is saved", token: `Bearer ${token}` });
  } catch (error) {
    res.status(500).send("can not save user");
    console.log(error);
  }
});

//login
UserRouter.post("/login", loginRules(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    //find if th user exist
    const searchedUser = await User.findOne({ email });
    //if the email not exist
    if (!searchedUser) {
      return res.status(400).send({ msg: "bad Credential " });
    }
    //password are equals
    const match = await bcrypt.compare(password, searchedUser.password);
    if (!match) {
      return res.status(400).send({ msg: "bad Credential " });
    }
    //cree un token
    const payload = {
      _id: searchedUser.id,
      name: searchedUser.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrkey, {
      expiresIn: 3600,
    });
    console.log(searchedUser);

    //send the users
    res
      .status(200)
      .send({ user: searchedUser, msg: "sucess", token: `Bearer ${token}` });
  } catch (error) {
    res.status(500).send({ msg: "can not get the user" });
  }
});

UserRouter.get("/current", isAuth(), (req, res) => {
  res.send({ user: req.user });
});

//get all user
UserRouter.get("/" , async(req,res)=>{
  try {
      let result = await User.find();
      res.send({ user : result, msg: "all user"});
  } catch (error) {
      console.log(error);
  }
});

//delete user
UserRouter.delete("/:id",async(req ,res)=>{
  try {
       let result = await User.findByIdAndDelete(req.params.id);
       res.send({ msg : "user is deleted"});     
  } catch (error) {
      console.log("error");
  }
});

//update user
UserRouter.put("/:id",async(req ,res)=>{
  try {
       let result = await User.findByIdAndDelete(req.params.id);
       res.send({ msg : "user is updated"});     
  } catch (error) {
      console.log("error");
  }
});






module.exports = UserRouter;
