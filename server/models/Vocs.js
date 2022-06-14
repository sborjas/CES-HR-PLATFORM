const mongoose = require("mongoose");
const VocSchema = new mongoose.Schema({
    fecha:{
        type: String,
        required: true,
    },
    restaurante:{
        type: String,
        required: true,
    },
    //Creemos en TODA la gente
    miGGR1:{
        type: Number,
        required:true,
    },
});

const VocModel = mongoose.model("VOC",VocSchema)
module.exports = VocModel;