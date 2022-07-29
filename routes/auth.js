/**
  path: api/login
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { crearUsuario, login, renewToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarjwt } = require('../middlewares/validar-jwt');

const router = Router();

router.post('/new', [
  check('nombre', 'el nombre es obligatorio').not().isEmpty(),
  check('password', 'la constraseña es obligatoria').not().isEmpty(),
  check('email', 'el correo es obligatorio').isEmail(),
  validarCampos
], crearUsuario);

router.post('/', [
  check('password', 'la constraseña es obligatoria').not().isEmpty(),
  check('email', 'el correo es obligatorio').isEmail(),
], login);

// validarJWT
router.get('/renew',  validarjwt ,renewToken);

module.exports = router;