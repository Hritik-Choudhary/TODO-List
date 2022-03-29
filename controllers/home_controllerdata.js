const todolist = require("../models/todo");

module.exports.homedata=function(req,res){
    todolist.create({
                description:req.body.description,
                category:req.body.category,
                date:req.body.date
        
            },
            function(err,tododata){
                if(err)
                {
                    console.log('error in creating a list');
                    return ;
                }
                console.log('*****',tododata);
            }
                );
            return res.redirect('back');
}