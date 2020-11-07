var users = [
    {
        "id": 1,
        "name": "Ngoc D.",
        "cart": []
    }
]

exports.get = (user_id) => {
    return users.find(e => e["id"] === user_id);
};

exports.add_to_cart = (user_id, product_ids) => {
    var cart = users.find(u => u["id"] === user_id);
    cart.push(...product_ids);
    return true;
};

exports.remove_from_cart = (user_id, product_ids) => {
    var cart = users.find(u => u["id"] === user_id);
    _.remove(cart, function(e) {
        return product_ids.includes(e);
    });
    return true;
};

/*mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname: {
        type: String
    },
    cart: [
        {
            productId: Number,
            checked: Boolean
        }
    ]
}, { timestamps: false });

userSchema.index({ "fullname": 1 });
const User = mongoose.model('User', userSchema);
module.exports = { User }*/