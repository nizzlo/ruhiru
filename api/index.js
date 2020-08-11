const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
var morgan = require('morgan');
var cors = require('cors')
const user = require('./src/routes/userRoutes');
const event = require('./src/routes/eventRoutes');
const org = require('./src/routes/organizationRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.SERVER_PORT;

// enable cors
app.use(cors())

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.use(morgan('tiny'));

app.get('/', (req,res)=>{
    res.send('Server running on port '+PORT)
});

// public routes
app.use(express.static('public'));
app.use('/api/v1/', user);
app.use('/api/v1/', event);
app.use('/api/v1/', org);

// handle 404 error
app.use(function (req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// handle errors
app.use(function (err, req, res, next) {

    if (err.status === 404) res.status(404).json({status: "Not found"});
    else res.status(500).json({status: "Something looks wrong", error: err});
});

app.listen(PORT, ()=>{
    console.log('Server is running on port '+PORT);
});

module.exports = app;