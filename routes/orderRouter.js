import express from "express";
<<<<<<< HEAD
import { createOrder, getOrders } from "../Controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/",createOrder)
=======
import { createOrders, getOrders } from "../Controllers/orderController.js";


const orderRouter = express.Router();

orderRouter.post("/",createOrders)
>>>>>>> 52a14161f04c8857b79be5e1c6909958d440c447
orderRouter.get("/",getOrders)

export default orderRouter;