const mongoose=require("mongoose");

const LogInSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    solvedProblems: {
        type: [Boolean],
        default: [false, false, false, false] // Initializing with four false values(unsolved)
    }
});

const collection= new mongoose.model("collection1",LogInSchema);

module.exports= collection;