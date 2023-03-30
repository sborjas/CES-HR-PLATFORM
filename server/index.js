const express = require("express");
const app = express();
const mongoose = require("mongoose");
const VocModel = require('./models/Vocs');

const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://adminsam:MHuVfjN9BqhnUDwF@clusterces.lw20lzx.mongodb.net/CES-HR?retryWrites=true&w=majority");

app.listen(3001, ()=>{
    console.log("Server up and good!!");
});

app.get("/getVocs", (req,res) => {
    VocModel.find({}, (err,result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});

app.get("/getVocsbyrestaurant", (req,res) => {
    VocModel.find({restaurante:req.params.restaurante}, (err,result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});

app.post("/submitVOC",async (req, res) => {
    const vocRecord = req.body;
    const newVocRecord = new VocModel(vocRecord);
    await newVocRecord.save();

    res.json(vocRecord);
});



