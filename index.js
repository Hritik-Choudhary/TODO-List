const express=require('express');
const { connect } = require('./routes');
const app=express();
const port=7000;

// use express routers
app.use('/',require('./routes'));

// sett view engine 
app.set('view engine','ejs');
app.set('views','./views');
//connect config file
const db=require('./config/mongoose');
//connect schema model
const todolist=require('./models/todo');

app.listen(port,function(err){
    if(err)
    {
        console.log('error in server',err);
        return ;
    }
    console.log('server is working on:',port);
});