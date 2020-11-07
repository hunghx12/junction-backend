const express = require('express');
const router = express.Router();

var product_controller = require('../controllers/productController');

router.post("/", product_controller.create_product);
router.get("/", product_controller.get_list_product);

module.exports = router;
