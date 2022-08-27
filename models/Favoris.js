const mongoose= require("mongoose");

const favorisSchema = new mongoose.Schema({
    name_user: String,
    name_place: String,
    image: String,
    address: String,
});

const favoris = mongoose.model("favoris" , favorisSchema);
module.exports = favoris;