const { Schema, model, SchemaType } = require("mongoose");

const ProductSchema = new Schema({
  name:{
    type:String,
    required:[true,'El nombre es obligatorio'],
    minLength:[3, 'La cantidad de caracteres minima es 3'],
    maxLength:[30,'La cantidad de caracteres máxima es 30'],
    trim:true
  },

  price:{
    type:Number,
    required:[true,'El nombre es obligatorio'],
    min:[0,'No puede ser un valor negativo']
  },
  offer:{
    type:Boolean,
    default:false
  },
  brand:{
    type: Schema.Types.ObjectId,
    ref: 'Brand'
  }
},
{
  versionKey:false
})

module.exports = model('Product', ProductSchema);