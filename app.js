/* Masthan Swamy */

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

require("./routes/index.routes")(app);

app.use(express.json());

app.listen(process.env.PORT || 8081, ()=>{
    console.log("Server Started");
});