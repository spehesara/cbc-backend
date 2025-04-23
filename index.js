import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import student from './models/Student.js';
import studentRouter from './routes/studentRouter.js';
import productRouter from './routes/productsRouter.js';
import userRouter from './routes/userRouter.js';
import jwt from "jsonwebtoken";


const app = express();
//Database eka connect karana part eka//
const MongoUrl ="mongodb+srv://spehesara:123@cluster0.ev9lu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(MongoUrl,{})
const connection = mongoose.connection

connection.once("open",()=>{
  console.log("DataBase Connected")

  
  })

app.use(bodyParser.json())

app.use(

(req,res,next)=>{

const token = req.header("Authorization")?.replace("Bearer ","")

console.log(token)

if(token != null){

jwt.verify(token, "cbc_secret_key_9773" , (error,decoded)=>{


if(!error){

// console.log(decoded)
req.user = decoded

}


})

}

next()
})




app.use("/students",studentRouter)
app.use("/products",productRouter)
app.use("/users",userRouter)






app.listen(

    5000,
    ()=>{
        console.log('server is runing on port:5000');
    }

)