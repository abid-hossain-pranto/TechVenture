const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URL)

const connection = mongoose.connection;
connection.on('connected' ,()=>{
    console.log("mongodb is connected successfully");
});

connection.on ("error", (error) => {
    console.log( "Error in mongoose connection", error);
});

module.export = mongoose;