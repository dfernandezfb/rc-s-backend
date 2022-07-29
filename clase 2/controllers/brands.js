const Brand = require("../models/Brand");

const addBrand = async (req,res) =>{
  try {
    const newBrand = new Brand(req.body);
    await newBrand.save();
    res.status(200).json({msg:'La marca se agregó correctamente'})
  } catch (error) {
    res.status(error.code || 400).json({msg:error.code})
  }
}

module.exports = addBrand;