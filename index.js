//.env file require
require('dotenv').config()

const express = require("express");
const app = express();
const port = 8080;

app.get("/" , (req,res)=>{
    res.send("Hello World");
});

// app.listen(port , ()=>{
//     console.log(`App is listening to port ${port}`);
// });

app.listen(process.env.PORT , ()=>{
    console.log(`App is listening to port ${port}`);
});