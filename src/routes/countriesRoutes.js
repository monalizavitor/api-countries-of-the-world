const express = require('express');
const { addCountry } = require('../controllers/countriesControllers');
const router = express.Router();
const controller = require('../controllers/countriesControllers')

router.get('/countries', controller.getCountries)

router.get('/country/:id', controller.getCountryById)

router.post('/countries', controller.addCountry)

router.put('countries/:id', controller.updateCountry)

router.delete('/country/:id', controller.deleteCountry)

module.exports = router