const { model, Schema} = require('mongoose')

const UserSchema = new Schema({
  name:{
    type:String,
    required:[true,'El nombre es obligatorio'],
    trim:true,
    minlength:[3, 'Debe tener más de 3 caracteres'],
    maxlength:20
  },
  age:{
    type:Number,
    default:18,
    min:18,
    max:100
  },
  email:{
    type:String,
    match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'El email no está en un formato correcto'],
    unique:[true, 'El email debe ser único'],
  },
  gender:{
    type:String,
    select:false,
    enum:['M', 'F']
  },
  hobbies:{
    type:Array
  },
  car:{
    type: Object,
  }
},{
  versionKey:false,
  timestamps:true
})

module.exports = model('User', UserSchema);