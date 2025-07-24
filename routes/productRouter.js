import express from "express";

import  { createProduct, deleteProduct, getProduct, updateProduct } from "../Controllers/productController.js";
import getProductById from "../Controllers/productController.js";



const productRouter = express.Router();

productRouter.post("/",createProduct)
productRouter.get("/",getProduct )
productRouter.get("/:productId",getProductById)
productRouter.delete("/:productId",deleteProduct)
productRouter.put("/:productId",updateProduct)
export default productRouter;

