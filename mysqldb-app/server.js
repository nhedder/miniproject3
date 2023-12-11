const express = require("express");
const app = express();

require("dotenv").config();
let dbConnect = require("./dbConnect");

// parse requests of content-type -application/json
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to mySQL-db application." });
});

let wordRoutes = require('./routes/wordRoutes')
app.use('/api/words', wordRoutes)

let descriptionRoutes = require('./routes/descriptionRoutes')
app.use('/api/description', descriptionRoutes)


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});