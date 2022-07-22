const mongoose = require('mongoose');

const connectDB = async ()=>{
    await mongoose.connect( process.env.DB_URI ,()=>console.log('Conectado a la DB'))
}

module.exports = connectDB