const router = require('express').Router();
const axiosController = require('../controllers/axios.controller');

router.get('/axios/quote', axiosController.getQuote);

module.exports=router;