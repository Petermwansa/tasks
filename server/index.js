const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/test');


// this is the route for posting a tasls 
app.post('/add', (req, res) => { 
    const task = req.body.task;

})


app.listen(3001, () => {
    console.log("Server is running on port 3001");
})



// aay76fkdK8AbUIeS 
