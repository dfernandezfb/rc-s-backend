const addUser = ()=>{
  console.log('Hola soy undefined');
}
const getUser = (req, res)=>{
  const {clave} = req.body
  console.log(req.params)
  console.log(clave);
  console.log(req.body.clave2);

  console.log('Hola soy undefined');
  res.send(req.params.idUser);
}
const editUser = ()=>{
  console.log('Hola soy undefined');
}
const deleteUser = ()=>{
  console.log('Hola soy undefined');
}

module.exports = {
  addUser,
  getUser,
  editUser,
  deleteUser
}