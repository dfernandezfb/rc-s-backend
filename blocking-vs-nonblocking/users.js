
const getUserSync = (id) => {
  const start = new Date().getTime();
  while(new Date().getTime() - start <= 3000){
    //una tarea que se demora unos tres segundos:
    //pedido a una base
    //comunicacion con un api
    //hackeando a la nasa
  }
  return {id:id}
}

const getUserAsync = (id,callback)=>{
  const user= {id:id};
  setTimeout(()=>{
    callback(user)
  },3000)
}

module.exports = {getUserSync, getUserAsync}