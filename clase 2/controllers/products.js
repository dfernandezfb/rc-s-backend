const Product = require("../models/Product")

const addProduct = async(req,res)=>{
  try {
    // const { offer, ...product } = req.body
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({msg:'El producto fue agregado correctamente'})
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
    const {q} = req.body;
    const products = await Product.find({brand:q});
    res.status(200).json(products)
  } catch (error) {
    res.status(error.code || 400).json({msg:error.message})
  }
}

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
  autocompleteProducts
}