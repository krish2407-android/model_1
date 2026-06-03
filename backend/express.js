const express = require('express');
const app = express();
const path = require('path');

const staticpath = path.join(__dirname,"/public");

app.use(express.static(staticpath));
app.get("/",(req,res)=>{
    res.send("welcome in express page");
});

// app.get("/pr2",(req,res)=>{
//     res.send("welcome in pr2 page");
// });

// app.get("/pr9",(req,res)=>{
//     res.send("welcome in pr9 page");
// });

app.use((req,res)=>{
    res.send("page Not found");
});

app.listen(2407);