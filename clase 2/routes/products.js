const { Router } = require("express");
const { addProduct, getCheapOrOffer, autocompleteProducts } = require("../controllers/products");
const router = Router();

router.post('/', addProduct);

router.get('/', autocompleteProducts);

router.get('/cheap',getCheapOrOffer);

module.exports = router;