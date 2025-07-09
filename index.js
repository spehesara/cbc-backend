import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
const cors = require('cors');


import userRouter from './routes/userRouter.js';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import productRouter from './routes/productRouter.js';
import cors from "cors";
dotenv.config();

const app = express();
//Database eka connect karana part eka//
const MongoUrl = process.env.MONGO_DB_URL

app.use(cors(
  {
 origin: 'https://cbc-frontend-six.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}

));

mongoose.connect(MongoUrl, {})
const connection = mongoose.connection

connection.once("open", () => {
  console.log("DataBase Connected")


})

app.use(bodyParser.json())

app.use(

  (req, res, next) => {

    const token = req.header("Authorization")?.replace("Bearer ", "")

    console.log(token)

    if (token != null) {

      jwt.verify(token, process.env.SECRET, (error, decoded) => {


        if (!error) {

          // console.log(decoded)
          req.user = decoded

        }


      })

    }

    next()
  })





app.use("/api/users", userRouter)
app.use("/api/products", productRouter)





app.listen(

  5000,
  () => {
    console.log('server is runing on port:5000');
  }

)