const express = require("express");
const app = express();
const users = require('./routes/users');
const countries = require('./routes/countries');
const products = require('./routes/products');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require("./config/db");

dotenv.config();
connectDB().catch(err=>console.log(err)); 

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.use('/users', users);
app.use('/countries', countries);
app.use('/products', products)


app.listen(process.env.PORT,()=>console.log('Escuchando...'))
