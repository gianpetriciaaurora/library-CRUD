const router = require('express').Router();
const circularController  = require('../controllers/circular.controllers');
const authc = require('../middlewares/authentication');

router.get('/circular/', authc, circularController.read);

router.get('/circular/:id', authc, circularController.findById);

router.post('/circular/', authc, circularController.create);

router.delete('/circular/:id', authc,  circularController.delete);

router.put('/circular/:id', authc, circularController.update);

module.exports = router;