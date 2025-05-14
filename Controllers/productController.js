import product from "../models/Product.js";

//Get Product//
export async function getProduct(req,res){

    try{
          const productList = await product.find()

res.json({

list: productList

})


    }catch(e){
res.json({

message:"Error"

})

    }

  

}

//Create Product//

export function createProduct(req,res){

    console.log(req.user)
    if(req.user == null){

        res.json({
        message:"You are not logged in"

        })
        return
    }

    if(req.user.type != "admin"){

        res.json({
message:"You are not a administrator"

        })
        return
    }

    const Product = new product(req.body)
    Product.save().then(()=>{

res.json({
message: "Product Created"

})

    }).catch(()=>{

message:"Product is not Created "


    })

 
}

//delete Product//

export function deleteProduct(req,res){
product.deleteOne({Name: req.params.Name}).then(

   ()=>{

res.json({
message:"Product Delete sucessfully"

})

   } 
)
}

export function getProductByName(req,res){

const name = req.params.name;

product.find({Name : name}).then(
    (productList)=>{

       if(productList.length ==0){
      res.json({
        message: "Product not found"
      })

       }else{


        res.json({
            list : productList
        })
       }




    }
).catch(()=>{
    res.json({
        message: "Product Not Found"
    })
})
}