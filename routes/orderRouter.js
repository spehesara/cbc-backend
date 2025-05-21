import express from "express";
import { createOrders, getOrders } from "../Controllers/orderController.js";


const orderRouter = express.Router();

orderRouter.post("/",createOrders)
orderRouter.get("/",getOrders)

export default orderRouter;