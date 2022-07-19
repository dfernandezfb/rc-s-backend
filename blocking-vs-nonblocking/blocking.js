const { getUserSync } = require("./users");

console.log('Inicio del programa');
console.time('timer');

const user1 = getUserSync(1);
console.log(user1);
const user2= getUserSync(2);
console.log(user2);

console.log('Terminó el programa');
console.timeEnd('timer');