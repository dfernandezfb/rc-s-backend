const User = require('./../models/User');

const addUser = async (req, res)=>{
  try {
    const newUser = new User(req.body);
    const userSaved = await newUser.save()
    res.status(201).json({user: userSaved, message:'El usuario fue creado correctamente'})
  } catch (error) {
    // if(!error.code) return res.status(400).json({message:error.message})
    res.status(error.code || 400).json(error.message)
  }
}
const getUsers = async(req, res)=>{
  const users = await User.find()
  res.status(200).json(users)
}
const getUsersByName = async(req, res)=>{
  try {
    // const { q } = req.query;
    // const users = await User.find()
    // const usersByName = users.filter(user=> user.name === q)
    // res.status(200).json(usersByName)
    //? 61ms
    const { q } = req.query;
    const usersByName = await User.find({name:q});
    res.status(200).json(usersByName)

} catch (error) {
  res.status(error.code || 400).json({message:error.message})
}
}
const getYoungUsers = async(req, res)=>{
  try {
    // const { q } = req.query;
    // const users = await User.find()
    // const usersByName = users.filter(user=> user.name === q)
    // res.status(200).json(usersByName)
    //? 61ms
    const usersByName = await User.find({$and:[{age:{$lte:26}},{name:"diego",$options:"i"}]});
    res.status(200).json(usersByName)

} catch (error) {
  res.status(error.code || 400).json({message:error.message})
}
}
const editUser = ()=>{
}
const deleteUser = ()=>{
}

module.exports = {
  addUser,
  getUsers,
  editUser,
  deleteUser,
  getUsersByName,
  getYoungUsers
}
  // const addUser = ()=>{
  //   console.log('Hola soy undefined');
  // }
  // const getUser = (req, res)=>{
  //   const {clave} = req.body
  //   console.log(req.params)
  //   console.log(clave);
  //   console.log(req.body.clave2);
  
  //   console.log('Hola soy undefined');
  //   res.send(req.params.idUser);
  // }
  // const editUser = ()=>{
  //   console.log('Hola soy undefined');
  // }
  // const deleteUser = ()=>{
  //   console.log('Hola soy undefined');
  // }