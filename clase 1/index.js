const http = require("http");
const fs = require("fs");
require('dotenv').config();

const server = http.createServer((req, res)=>{
  switch(req.url){
    case'/':
      res.setHeader('Content-Type','text/plain');
      res.statusCode=200;
      res.write('Andaaaaaaaaa')
      res.end();
    break;
    case '/hola':
      res.setHeader('Content-Type','text/plain');
      res.statusCode=404;
      res.write('No existe esa url my king')
      res.end();
      break;
  }
  // console.log(req.url);
  // // console.log(res);
  // console.log(process.env.DB_URI);
  // fs.readFile('./index.html',(err, data)=>{
  //   if(err)console.log(err);
  //   res.write(data)
  //   res.end()
  // })
});


server.listen(4500,()=>{
  console.log('Escuchando..');
})