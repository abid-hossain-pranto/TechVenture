const express = require('express');
const app = express();
require('dotenv').config()

const dbconfig = require("./config/dbconfig");
const userRoute = require('./routes/userRoute');

app.use('/api/user',userRoute);

const port = process.env.port || 5000;


app.listen(port,() => console.log (`node server started at ${port}`));
