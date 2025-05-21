import Order from "../models/Order.js";
import Product from "../models/product.js";
import { isCustomer } from "./userController.js";


export async function createOrders(req, res) {

    if (!isCustomer) {
        res.json({
            message: "Please login as a Customer to create orders"
        })

    }
    try {
        const latestOrder = await Order.find().sort
            ({ date: -1 }).limit(1)

        let orderId

        if (latestOrder.length == 0) {
            orderId = "CBC001"

        } else {
            const currentOrderId = latestOrder[0].
                orderId
            const numberString = currentOrderId.replace("CBC", "")

            const number = parseInt(numberString)



            const newNumber = (number + 1).toString
                ().padStart(4, "0");

            orderId = "CBC " + newNumber

        }

        const newOrderData = req.body

        const newProductArray = []

        for (let i = 0; i < newOrderData.orderedItems.length; i++) {

            const product = await Product.findOne({
                productId: newOrderData.orderedItems[i].productId
            })

            console.log(product)

        }

        //         const newOrderData = req.body
        //         newOrderData.orderId = orderId
        //         newOrderData.email = req.user.email

        //         const order = new Order(newOrderData)

        //         await order.save()

        //         res.json({
        // meesage: "Order Created"

        //         })


    } catch (error) {
        res.status(500).json({
            message: error.message

        })
    }


}

export async function getOrders(req, res) {

    try {

        const orders = await Order.find({ email: req.user.email })

        res.json(orders)
    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }


}