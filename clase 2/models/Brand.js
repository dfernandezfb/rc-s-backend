const { model, Schema } = require("mongoose");

const BrandSchema = new Schema({
  name:{
    type:String,
    required:[true,'El nombre es obligatorio'],
    minLength:[3, 'La cantidad de caracteres minima es 3'],
    maxLength:[30,'La cantidad de caracteres máxima es 30'],
    trim:true
  },
  owner:{
    type:String,
    required:[true,'El nombre es obligatorio'],
    minLength:[3, 'La cantidad de caracteres minima es 3'],
    maxLength:[30,'La cantidad de caracteres máxima es 30'],
    trim:true
  }
},
{
  versionKey:false
}
)
// this.methods.toJSON = {
//   const obj = this.Object;
//   delete obj.__v;
//   return obj
// }

module.exports = model('Brand',BrandSchema);