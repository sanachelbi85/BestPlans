const mongoose =require("mongoose");

const experienceSchema = new mongoose.Schema({
    name_user: String,
    name_place: String,
    description: String,
});

const experience = mongoose.model("experience" , experienceSchema);
module.exports = experience;