
console.log('Hola'); //1

setTimeout(()=>{
  console.log('A');  //5
},2000);

setTimeout(()=>{
  console.log('B');  //2
},0);

setTimeout(()=>{
  console.log('C');  //3
},0);

console.log("Chau"); //4