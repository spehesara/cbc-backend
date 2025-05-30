import express from "express";
import productRouter from "./productRouter.js";

const orderRouter = express.Router();

productRouter.post("/",createOrder)


export default orderRouter;