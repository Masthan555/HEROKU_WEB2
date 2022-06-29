const oneController = require("../controllers/one.controller");

module.exports = (app)=>{
    app.get("/", oneController.gotPost);
}