const  express =require("express");
require('dotenv').config()

const app =express();


app.get('/',(req,res)=>res.send("Express on Vercel"));

app.listen(process.env.PORT,()=>console.log("server ready on port ",process.env.PORT))

module.export=app;
//nothing