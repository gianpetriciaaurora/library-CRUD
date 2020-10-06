const router = require('express').Router();
const bookController = require('../controllers/book.controllers');
const authc = require('../middlewares/authentication');
const authz = require('../middlewares/authorization');

router.get('/book/', authc, bookController.read);

router.get('/book/:id', authc, bookController.findById);

router.post('/book/', authc, authz, bookController.create);

router.delete('/book/:id', authc, authz, bookController.delete);

router.put('/book/:id', authc, authz, bookController.update);

module.exports = router;