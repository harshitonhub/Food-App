const mongoose  = require("mongoose");
var mongoURL = "mongodb+srv://muditmehta15:lmaoyougay12@cluster0.tqo9oa9.mongodb.net/";
mongoose.connect(mongoURL, {useNewUrlParser: true,useUnifiedTopology:true, useNewUrlParser:true});
var db = mongoose.connection ;

db.on('connected' , ()=> {
    console.log("MongoDB connected successfully.");
})

db.on('error' , ()=> {
    console.log("MongoDB connection failed.");
})

module.exports = mongoose;