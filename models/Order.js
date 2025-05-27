import mongoose, { Schema } from "mongoose";


const orderSchema = mongoose.Schema({

    orderId: {

        type: String,
        required: true,
        unique: true

    },

    email: {
        type: String,
        required: true

    },

    orderedItems: [

        {
            name: {
                type: String,
                required: true
            },

            quantity: {
                type: Number,
                required: true

            },

            price: {
                type: Number,
                required: true
            },

            image: {
                type: String,
                required: true

            }


        }


    ],

    date: {
        type: Date,
        default: Date.now
    },

    payment: {
        type: String
    },

    Status: {
        type: String,
        default: "Preparing"

    },
    notes: {
        String
    },

    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

})

const Order = mongoose.model("orders",orderSchema)

export default Order;