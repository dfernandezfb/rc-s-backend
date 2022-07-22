const {Router} = require('express');
const { getUser } = require('../controllers/users');
const verifyRole = require('../middlewares/verifyRole');
const router = Router();

router.get('/:idUser?', verifyRole /*? middleware*/, getUser)
//! http://localhost:4500/users/

router.get('/argentina',(req,res)=>{
  res.send('Usuarios Argentinos')
})
//! http://localhost:4500/users/argentina

router.post('/',(req,res)=>{})

module.exports = router