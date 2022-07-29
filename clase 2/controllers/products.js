const Brand = require("../models/Brand");
const Product = require("../models/Product");
const customError = require("../utils/customError");

const addProduct = async(req,res)=>{
  try {
    // const { offer, ...product } = req.body
    const product = new Product(req.body);
    const newProduct = await product.save();
    res.status(201).json({
      msg:'El producto fue agregado correctamente',
      product: newProduct
    })
  } catch (error) {
    res.status(error.code || 400).json({msg:error.message})
  }
}

const getCheapOrOffer = async ( req, res) =>{
  try {
    const products = await Product.find({$or:[{price:{$lte:25}},{offer:true}]});
    res.status(200).json(products)
  } catch (error) {
    res.status(error.code || 400).json({msg:error.message})
  }
}
const getProductsByBrand = async (req,res) =>{
  try {
    const {q, page} = req.query;
    const pageNumber = page*5
    console.log(pageNumber);
    if(!q) {
      const [productsNumber, products]= await Promise.all([
        Brand.estimatedDocumentCount(),
        Product.find().select('-_id')./*skip(pageNumber).limit(5).*/populate({
          path:'brand',
          select:'-_id'
        })              //populate('')    //select({brand:0});
      ])
      return res.status(200).json({
        cantidad: productsNumber,
        productos: products
      })
    }
    const brand = await Brand.findOne({name:q}); //findById(idDeLaMarca)
    if(!brand) throw new customError ('La marca especificada no existe',404);
    const products = await Product.find({brand:brand._id}).select('-_id').populate({
      path:'brand',
      select:'-_id'
    })              //populate('')    //select({brand:0});
    res.status(200).json(products)
  } catch (error) {
    res.status(error.code || 400).json({msg:error.message})
  }
}
// http://url/products?priceLimit=20&name=coca&
const autocompleteProducts = async(req,res)=>{
  try {
    const {q, limit} = req.query;
    const products = await Product.find({$and:[{name:{$regex:q, $options:"i"}},{price:{$lt:limit}}]});
    res.status(200).json(products)
  } catch (error) {
    console.log(error)
    res.status(error.code || 400).json({msg:error.message})
  }
}

module.exports = { 
  addProduct,
  getCheapOrOffer,
  autocompleteProducts,
  getProductsByBrand
}