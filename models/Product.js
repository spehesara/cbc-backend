import mongoose from "mongoose";

const productSchema = mongoose.Schema({

productId :{
type:String,
required :true,
unique: true
},

productName : {

type: String,
required: true

},

altName :[

{
type: String

}


],

images:[

{
   type : String
}

],

price :{
    type: Number,
    required:true
},

lastPrice:{
type:Number,
required: true 

},

description:{
type:String,
required:true

},

stock:{
type:Number,
requuired:true

}


})

const Product = mongoose.model("products",productSchema);

export default Product;