const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");

const app = express();

app.use(express.static('Public'));
app.use(bodyParser.urlencoded({ extended: true }));
// kol al stor al fo2 de sabta f ay code//
app.get("/", (req, res) => {


    res.sendFile(__dirname + "/signup.html");

});
app.post("/", (req, res) => {
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;
    console.log(firstName, lastName, email);

});
app.listen(3000, () => {

    console.log("Server is running at port 3000")

});