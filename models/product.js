var products = [
    {
        "id": 1,
        "name": "Liquid detergent",
        "image_url": "",
    },
    {
        "id": 11,
        "name": "liquid detergent for top load washer",
        "image_url": "",
        "parent_id": 1
    },
    {
        "id": 12,
        "name": "liquid detergent for front load washer",
        "image_url": "",
        "parent_id": 1
    },
    {
        "id": 2,
        "name": "fabric softener",
        "image_url": "",
    },
    {
        "id": 3,
        "name": "hand sanitizer",
        "image_url": "",
    },
    {
        "id": 4,
        "name": "cleaning liquid",
        "image_url": "",
    },
    {
        "id": 5,
        "name": "Shampoo",
        "image_url": "",
    },
    {
        "id": 51,
        "name": "Anti-dandruff",
        "image_url": "",
        "parent_id": 5
    },
    {
        "id": 52,
        "name": "Oily scalp",
        "image_url": "",
        "parent_id": 5
    },
    {
        "id": 53,
        "name": "Dry scalp",
        "image_url": "",
        "parent_id": 5
    },
    {
        "id": 54,
        "name": "Anti hair-fall",
        "image_url": "",
        "parent_id": 5
    },
    {
        "id": 6,
        "name": "Toothpaste",
        "image_url": "",
    },
    {
        "id": 61,
        "name": "Toothpaste for sensitive teeth",
        "image_url": "",
        "parent_id": 6
    },
    {
        "id": 62,
        "name": "Toothpaste Whitening",
        "image_url": "",
        "parent_id": 6
    },
    {
        "id": 63,
        "name": "Toothpaste Herbal",
        "image_url": "",
        "parent_id": 6
    },
    {
        "id": 64,
        "name": "Toothpaste Children",
        "image_url": "",
        "parent_id": 6
    },
    {
        "id": 7,
        "name": "Razor",
        "image_url": "",
    },
    {
        "id": 71,
        "name": "Razor 2 blades",
        "image_url": "",
        "parent_id": 7
    },
    {
        "id": 72,
        "name": "Razor 3 blades",
        "image_url": "",
        "parent_id": 7
    },
    {
        "id": 73,
        "name": "Razor 5 blades",
        "image_url": "",
        "parent_id": 7
    },
    {
        "id": 8,
        "name": "toothbrush",
        "image_url": ""
    },
    {
        "id": 9,
        "name": "Cleanser",
        "image_url": ""
    },
    {
        "id": 91,
        "name": "Cleanser For dry skin",
        "image_url": "",
        "parent_id": 9
    },
    {
        "id": 92,
        "name": "Cleanser For acne",
        "image_url": "",
        "parent_id": 9
    },
    {
        "id": 93,
        "name": "Cleanser For oily skin",
        "image_url": "",
        "parent_id": 9
    },
    {
        "id": 10,
        "name": "Dish washing",
        "image_url": "",
    },
    {
        "id": 101,
        "name": "Dish washing gel",
        "image_url": "",
        "parent_id": 10
    },
    {
        "id": 102,
        "name": "Dish washing tablet",
        "image_url": "",
        "parent_id": 10
    },
    {
        "id": 103,
        "name": "Dish washing powder",
        "image_url": "",
        "parent_id": 10
    },
    {
        "id": 20,
        "name": "Toilet paper",
        "image_url": ""
    }
];

exports.list = () => {
    var result = [];
    products.forEach(c => {
        if(!c.parent_id) {
            result.push(c);
        } else {
            var p = result.find(p => p["id"] === c["parent_id"]);
            if(p["variants"]) p["variants"].push(c);
            else {
                p["variants"] = [];
                p["variants"].push(c);
            }
        }
    });
    return result;
};

// mongoose = require('mongoose');
// const productSchema = mongoose.Schema({
//     name: {
//         type: String
//     },
//     image: {
//         type: String
//     },
//     variants: [this]
// }, { timestamps: false });

// productSchema.index({ "name": 1 });
// const Product = mongoose.model('Product', productSchema);
// module.exports = { Product }