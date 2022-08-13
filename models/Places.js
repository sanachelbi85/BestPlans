const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
    name: String,
    image: String,
    address: String,
    location: String,
    description: String,
    trajet: String,

});
const Places = mongoose.model("Places", placeSchema);
module.exports = Places;