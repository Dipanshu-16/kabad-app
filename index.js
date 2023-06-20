const express = require('express')
const bodyParser = require('body-parser')
const route = require('./routes/route.js')
const  mongoose  = require('mongoose')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://dipanshu:CFu9vt7ZRdH1P2XR@cluster0.c9qpfj3.mongodb.net/website-learner", {
        useNewUrlParser: true,useUnifiedTopology:true
    })
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);

app.use(function (req, res) {
    return res.status(400).send({status : false, message : "path not found"})
    });


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
