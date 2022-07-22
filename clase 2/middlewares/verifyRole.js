const verifyRole = (req, res, next)=>{
  true? next() : res.status(403).send('No podes')
}
module.exports = verifyRole

/*
* MENSAJE HTTP
* method: {get, post, put, delete, patch, options}
* headers: config { Content-Type, Autorization}
* body:{}
*
*
*
*
*
*/