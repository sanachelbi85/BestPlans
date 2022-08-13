const express = require("express");
 const cors = require("cors");
const app = express();
require("dotenv").config();


app.use(cors());
app.use(express.json());
app.use(passport.initialize());

 const dbConnect = require("./dbconnect/ConnectDB");
dbConnect();


app.use("/places", require("./routes/PlacesRouter")); 
app.use("/favoris", require("./routes/FavorisRouter"));
app.use("/experience", require("./routes/ExperiencesRouter"));
app.use("/User", require("./routes/UserRouter"));


app.listen(process.env.PORT, (err) => {
  err ? console.log(error) : console.log("server is running.."+process.env.PORT);
});
