const express = require('express');
const { addCountry } = require('../controllers/countriesControllers');
const router = express.Router();
const controller = require('../controllers/countriesControllers')

router.get('/all', controller.getCountries)

router.get('/id/:id', controller.getCountryById)

router.post('/post', controller.addCountry)

router.put('update/:id', controller.updateCountry)

router.delete('/delete/:id', controller.deleteCountry)

module.exports = router