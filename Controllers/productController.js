import Product from "../models/product.js";
import { isAdmin } from "./userController.js";

export function createProduct(req, res) {

    if (!isAdmin(req)) {

        res.json({
            message: "Please login as a administrator to add products "

        })
        return

    }

    const newProductData = req.body

    const product = new Product(newProductData)

    product.save().then(() => {

        res.json({
            message: "Product Created "
        })

    }).catch((error) => {

        res.json({
            message: error
        })
    })


}


export function getProduct(req, res) {

    Product.find({}).then((products) => {

        res.json(products)
    })

}