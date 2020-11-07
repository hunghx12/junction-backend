const Product = require("../models/Product");
const Seller = require("../models/Seller");

// exports.create_product = async (req, res) => {
//     try {
//         var products = req.body;
//         products.forEach(function (msg) {
//             let product = new Product({ name: msg.name, image: msg.image })
//             product.save((err, doc) => {
//                 if (err) return res.json({ success: false, err })

//             })
//         });
//         res.status(201).end();
//     } catch (error) {
//         console.error(error);
//         res.status(400).send(error);
//     }
// },

exports.get_list_product = async (req, res) => {
    // try {
    //     await Product.find()
    //         .populate("variants")
    //         .exec((err, prods) => {
    //             if (err) return res.status(400).send(err);
    //             res.status(200).send(prods)
    //         })
    // } catch (error) {
    //     console.error(error);
    //     res.status(400).send(error);
    // }
    return res.status(200).send(Product.list());
};

exports.get_list_recommendation = async (req, res) => {
    return res.status(200).send(Seller.suggestion(req.params.user_lat, req.req.params.user_lng, req.params.product_ids.split(',')));
};

