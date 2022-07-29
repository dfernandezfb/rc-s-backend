const {Router} = require('express');
const { getUser, addUser, getUsers, getUsersByName, getYoungUsers } = require('../controllers/users');
const verifyRole = require('../middlewares/verifyRole');
const router = Router();

// router.get('/:idUser?', verifyRole /*? middleware*/, getUser)
// //! http://localhost:4500/users/
router.get('/',getUsers)

router.get('/:pais?',(req,res)=>{
  res.send('Usuarios Argentinos')
})
//! http://localhost:4500/users/argentina
//! http://localhost:4500/users/brasil
//! http://localhost:4500/users/eeuu

router.get('/name', getUsersByName)
router.get('/young', getYoungUsers)

router.post('/',addUser)

module.exports = router