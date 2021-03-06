const express = require('express');
const app = express();
const router = express.Router();
const bodyParser=require('body-parser');

app.set("view engine", "pug");
app.set("views", "views");
app.use(bodyParser.urlencoded({extended:false}));

router.get("/", (req, res, next) => {
    
    res.status(200).render("register");
})

router.post("/", (req, res, next) => {
    console.log(req.body);
    var firstName = req.body.firstName.trim();
    var lastName = req.body.lastName.trim();
    var username = req.body.username.trim();
    var email = req.body.email.trim();
    var password = req.body.password;
    var payload=req.body;

    if(firstName && lastName &&userName && email && password){

    }
    else{
        payload.errorMessage="Make sure each field has a valid value.";
        res.status(200).render("register");

    }
    
    
    res.status(200).render("register");
})

module.exports = router;

