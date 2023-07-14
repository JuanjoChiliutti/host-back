require("dotenv").config();
const cors = require("cors");
const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const routes = require("./Routes/route");


require("./DB/db.js");


server.use(cors());
server.use(bodyParser.json());

server.use("/", routes);

server.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
