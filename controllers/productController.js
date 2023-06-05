const Product = require("../models/product");

module.exports.create = async (req, res) => {
  try {
    
    const product = await Product.create(req.body);
    return res.status(201).json({
      data: {
        product
      }
    });
  } catch (err) {
    return res.status(500).json({
      data: {
        msg: "Internal Server Error !!can not create Product..",
      }
    });
  }
}

//getting all products

module.exports.getProduct= async(req,res)=>{
    try{
        const products = await Product.find({});
        
        if(!products.length){
             return res.status(400).json({ msg: "Opps.. no product found in the db..",})
             
        }
        if(products){
         res.status(200).json({
            data:products
            

        })}

    }catch(err){
        res.status(404).json({
            msg:'There was an error while finding the products..'
            
            

        })

    }
}


module.exports.deleteProductById = async (req,res)=>{

    try{
//need id, we will get from params
const{id} = req.params;
const deleteproduct = await Product.findByIdAndDelete(id);
console.log(deleteproduct)
if(!deleteproduct){
    return res.status(400).json({msg:'No product found to delete'})
}return res.status(200).json({
    msg:"Product deleted Successfully..."
})
    }catch(err){
        return res.status(500).json({
            data: {
              msg: "Internal Server Error !!can not delete Product..",
            }
          });
    }

}

module.exports.updateProductQuantityById = async (req,res)=>{
   try{
    const {id} = req.params;
   const{number}=req.query;
    if(!number){
         res.status(400).json({data:{
            msg:'No product find to update... '
        }})
        return
    
    }
    const updateProduct = await Product.findOne({
        _id:id
    })
    let qty = updateProduct.quantity+(-number)
    if(qty>0){
        const product = await Product.findOneAndUpdate({_id:id},
            {
                quantity:qty
            },
            {
                new:true,
                runValidators:true
            }
            )
            res.status(200).json({msg:'Updated Successfully...'})
    }else{
        res.status(400).json({msg:'Quantity can not be zero...'})
        return
    }
    
   }catch(err){
    return res.status(400).json({msg:'Something is wrong...'})

   }
    
}
