var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');

router.get("/cart", user_controller.get_cart);
router.post("/cart", user_controller.add_to_cart);
router.delete("/cart", user_controller.remove_from_cart);

module.exports = router;
