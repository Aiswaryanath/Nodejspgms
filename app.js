const express=require('express');
const hbs=require('hbs');
var app=express();
// setting template
app.set('view engine','hbs');

// setting routers
app.get('/', (req,res)=>{
    res.render('index.hbs')

});
app.get('/home',(req,res)=>{

    res.send('<h2>welcome to my homepage<h2>')
});
app.get('/contact',(req,res)=>{

    res.send('<h3>Welcome to my contact page<h3>')
});
app.listen(3000);
