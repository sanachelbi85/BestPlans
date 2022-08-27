const express = require("express");
 const cors = require("cors");
 require("dotenv").config();
 const passport = require("passport");
const app = express();



app.use(cors());
app.use(express.json());
app.use(passport.initialize());

 const dbConnect = require("./dbconnect/ConnectDB");

dbConnect();


app.use("/destination", require("./routes/DestinationRouter")); 
app.use("/favoris", require("./routes/FavorisRouter"));
app.use("/experience", require("./routes/ExperiencesRouter"));
app.use("/contact", require("./routes/contactRouter")); 
app.use("/User", require("./routes/UserRouter"));


app.listen(process.env.PORT, (err) => {
  err ? console.log(error) : console.log("server is running.."+process.env.PORT);
});
