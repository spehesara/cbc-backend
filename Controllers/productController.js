
import Product from "../models/product.js";
import { isAdmin } from "./userController.js";

export function createProduct(req, res) {

    if (!isAdmin(req)) {
        res.status(401).json({
            message: "Please login as a administrator to add products "

        })
        return

    }

    const newProductData = req.body

    const product = new Productroduct(newProductData)

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