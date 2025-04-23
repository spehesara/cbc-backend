import express from "express";
import product from "../models/Product.js";
import { createProduct, deleteProduct, getProduct, getProductByName } from "../Controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/",getProduct)


  
productRouter.get("/Filter",(req,res)=>{
res.json({
    message: "This is product filtering Area"
})
})
productRouter.get("/:name",getProductByName)

productRouter.post("/",createProduct)

productRouter.delete("/:Name",deleteProduct)

export default productRouter;
