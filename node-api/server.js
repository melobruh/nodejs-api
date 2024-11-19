const express = require('express');
const mongoose = require('mongoose');
const app = express();


app.get('/', function (req, res) {
  res.send('Hellow yow')
});

app.get('/blog', (req, res) => {
    res.send("this is the blog page");
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});

mongoose
    .connect('mongodb+srv://acarmelogalia:iiSGfWI5RIeMZX4X@cluster1.fquwy.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster1')
    .then(() => {
        console.log('Database Connected');
    })
    .catch((error) => {
        console.log('Database error', error);
    });
