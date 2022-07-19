const { getUserAsync } = require("./users");

console.log("Inicio del programa");
console.time('timer')
console.time('timer2')
console.time('timer3')

getUserAsync(1,(id)=>{
  console.log({id:id});
  console.timeEnd("timer2")
})
getUserAsync(2,(id)=>{
  console.log({id:id});
  console.timeEnd("timer3")
})

console.log('Terminó el programa');
console.timeEnd("timer")