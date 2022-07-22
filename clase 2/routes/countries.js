const { Router } = require('express');
const {getStatesOfCountry, getCountries } = require('../controllers/countries');
const router = Router();

router.get('/:id?', getCountries);

router.get('/state/:idCountry', getStatesOfCountry)

module.exports = router;