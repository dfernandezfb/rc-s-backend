const { Router } = require("express");
const { addProduct, getCheapOrOffer, autocompleteProducts, getProductsByBrand } = require("../controllers/products");
const router = Router();

router.post('/', addProduct);

router.get('/', autocompleteProducts);

router.get('/cheap',getCheapOrOffer);

router.get('/brand',getProductsByBrand);

module.exports = router;