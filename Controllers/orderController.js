import Order from "../models/Order.js";
<<<<<<< HEAD
import { isCustomer } from "./userController.js";



export async function createOrder(req, res) {
=======
import Product from "../models/product.js";
import { isCustomer } from "./userController.js";


export async function createOrders(req, res) {
>>>>>>> 52a14161f04c8857b79be5e1c6909958d440c447

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
<<<<<<< HEAD
            
            const numberString = currentOrderId.replace("CBC", "")
            const number = parseInt(numberString)

=======
            const numberString = currentOrderId.replace("CBC", "")

            const number = parseInt(numberString)



>>>>>>> 52a14161f04c8857b79be5e1c6909958d440c447
            const newNumber = (number + 1).toString
                ().padStart(4, "0");

            orderId = "CBC " + newNumber

        }

        const newOrderData = req.body


        const newProductArray= []

        for(let i=0; i<newOrderData.orderedItems; i++){
        console.log(newOrderData.orderedItems[i])

        }

        // newOrderData.orderId = orderId
        // newOrderData.email = req.user.email

        // const order = new Order(newOrderData)

        // await order.save()

        // res.json({
        //     meesage: "Order Created"

        // })
=======
        const newProductArray = []

        for (let i=0; i<newOrderData.orderedItems.length; i++) {

            const product = await Product.findOne({
                productId: newOrderData.orderedItems[i].productId
            })

            console.log(product)

            if (product == null) {
                res.json({
                    message: "Product with id " + newOrderData.orderedItems[i].productId + " not found"
                })

                return

            }

            newProductArray[i] = {

                productId: product.productId,
                price: product.price,
                quantity: newOrderData.
                    orderedItems[i].quantity,
                image: product.image[0]

            }

        
        }

        console.log(newProductArray)

         
         

        //         const newOrderData = req.body
        //         newOrderData.orderId = orderId
        //         newOrderData.email = req.user.email

        //         const order = new Order(newOrderData)

        //         await order.save()

        //         res.json({
        // meesage: "Order Created"

        //         })
>>>>>>> 52a14161f04c8857b79be5e1c6909958d440c447


    } catch (error) {
        res.status(500).json({
            message: error.message

        })
    }


<<<<<<< HEAD
}       

export async function getOrders(req,res) {
    
try{

const orders = await Order.find({email:
    req.user.email})

    res.json(orders)


}catch(error){
    res(500).json({

        message:error.message
    })
}
=======
}

export async function getOrders(req,res) {

    try {

        const orders = await Order.find({ email: req.user.email })

        res.json(orders)
    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }
>>>>>>> 52a14161f04c8857b79be5e1c6909958d440c447


}