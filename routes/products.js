const express = require('express');
const router = express.Router();

var product_controller = require('../controllers/productController');

router.get("/", product_controller.get_list_product);
router.get("/recommendation", product_controller.get_list_recommendation);

module.exports = router;
