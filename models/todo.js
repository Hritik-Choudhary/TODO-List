const mongoose=require('mongoose');

// creating the scheema 
const todoSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});

const todolist=mongoose.model('todolist',todoSchema);
module.exports=todolist;