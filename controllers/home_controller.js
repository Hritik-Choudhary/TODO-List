const todolist = require("../models/todo");

module.exports.home=function(req,res){
    todolist.find({},function(err,listitems){
        if(err)
        {
            console.log('error in fetching data');
            return ;
        }
        
        return res.render('home',{
            title:'TODO LIST',
            todo_list:listitems
        });
    });
    
    
    
}
