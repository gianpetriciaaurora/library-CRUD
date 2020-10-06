const router = require('express').Router();
const userController = require('../controllers/user.controllers');
const authc = require('../middlewares/authentication');
const authz = require('../middlewares/authorization');

router.get('/user/', authc, userController.read);

router.get('/user/:id', authc,  userController.findById);

router.post('/user/', authc, authz, userController.create);

router.delete('/user/:id', authc, authz, userController.delete);

router.put('/user/:id', authc, authz, userController.update);

router.post('/login/', userController.login);

module.exports = router;