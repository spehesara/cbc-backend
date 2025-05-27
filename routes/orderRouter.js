import express from "express";
<<<<<<< HEAD
import { createOrder, getOrders } from "../Controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/",createOrder)
orderRouter.get("/",getOrders)

export default orderRouter;