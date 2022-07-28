const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  name:String,
  price:Number,
  offer:Boolean
},
{
  versionKey:false
})

module.exports = model('Product', ProductSchema);