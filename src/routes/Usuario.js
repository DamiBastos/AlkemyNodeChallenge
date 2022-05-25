const { Router } = require('express');
const router = Router();
const usuarioControllers = require('../controllers/usersControllers');



router.post('/auth/login', usuarioControllers.getLogin);

router.post('/auth/register', usuarioControllers.getRegister);





module.exports = router;