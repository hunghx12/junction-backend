const User = require("../models/User");

exports.get_cart = async (req, res) => {
    try {
        var cart = User.get(req.query.id);
        res.ok({ data: cart });
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
};

exports.add_to_cart = async (req, res) => {
    User.add_to_cart(req.query.id, req.body.product_ids);
    return res.status(201);
}

exports.remove_from_cart = async (req, res) => {
    User.remove_from_cart(req.query.id, req.body.product_ids);
    return res.status(204);
}

