
import Product from "../models/Product.js";
import { isAdmin } from "./userController.js";

export function createProduct(req, res) {

    if (!isAdmin(req)) {
        res.status(401).json({
            message: "Please login as a administrator to add products "

        })
        return

    }

    const newProductData = req.body

    const product = new Product(newProductData)

    product.save().then(() => {

        res.status(200).json({
            message: "Product Created "
        })

    }).catch((error) => {

        res.status(500).json({
            message: error
        })
    })


}


export function getProduct(req, res) {

    Product.find({}).then((products) => {

        res.json(products)
    })

}

export function deleteProduct(req, res) {



    if (!isAdmin(req)) {
        res.status(403).json({

            message: ("Please login as a administartor to delete products ")
           
        })

        return

    }

    const productId = req.params.productId

    Product.deleteOne({
        productId: productId
    }

    ).then(()=> {

        res.json({
            message: "Product Deleted"

        })
        
        }).catch((error) => {
       
               console.log("Error deleting product:", error);
            res.status(403).json({
    
                
                message: error
               
            })

    })

}


export function updateProduct(req,res){


 if (!isAdmin(req)) {
        res.status(401).json({
            message: "Please login as a administrator to add products "

        })
        return

    }

const productId = req.params.productId
const newProductData = req.body

Product.updateOne(
 {productId:productId},
 newProductData



).then(()=>{

    res.json({
message:"Product updated"

    })


}).catch((error)=>{
 console.log(error)
res.status(404).json({
    
   
    message: error

})

})



}

export default async function getProductById(req, res) {
    try {
        const { productId } = req.params;

        if (!productId) {
            return res.status(400).json({ error: "Product ID is required" });
        }

        const product = await Product.findOne({ productId });

        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        res.status(200).json(product);
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}