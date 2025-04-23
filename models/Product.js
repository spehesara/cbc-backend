import mongoose from "mongoose";

const productSchema = mongoose.Schema({

name: String,
Price : Number,
description: String

})

const product = mongoose.model("product",productSchema)

export default product;