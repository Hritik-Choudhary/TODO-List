const express=require('express');
const app=express();
const port=7000;


app.listen(port,function(err){
    if(err)
    {
        console.log('error in server',err);
        return ;
    }
    console.log('server is working on:',port);
});