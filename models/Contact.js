const mongoose = require("mongoose");
const schema = mongoose.Schema;

const contactSchema = new schema({
    name : {
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    } ,
   
    email: {
        type: String,
        required: true,
    } ,
    message: {
        type: String,
        required: true, 
    }
   
});

const Contact = mongoose.model("Contact" , contactSchema);
module.exports = Contact;

