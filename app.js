const express=require('express');
const app=express();
const post=3000;
app.get('/',(req,res)=>{
    res.send("<h2>Hello world</h2>");
});
app.listen(port,()=>{
    console.log('app listening to the port ${port}');
})