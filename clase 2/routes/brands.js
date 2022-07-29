const { Router } = require("express");
const addBrand = require("../controllers/brands");
const router = Router();

router.post("/", addBrand);

module.exports = router;