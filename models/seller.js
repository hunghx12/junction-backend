var sellers = [
    {
        "id": 1,
        "name": "Vinmart 34T",
        "website": "",
        "location": {
            // 34T
            "lat": "21.008297",
            "lng": "105.802547",
        },
        "promotion": [
            {
                "productId": 8,
                "originalPrice": 10,
                "discount": 2,
                "valid_from": "",
                "valid_to": "",
            },
        ]
    },
    {
        "id": 2,
        "name": "Walmart TDH",
        "website": "",
        "location": {
            // Tran Duy Hung
            "lat": "21.010946",
            "lng": "105.799102",
        },
        "promotion": [
            {
                "productId": 8,
                "originalPrice": 12,
                "discount": 3,
                "valid_from": "",
                "valid_to": "",
            },
        ]
    },
    {
        "id": 3,
        "name": "Times City",
        "website": "",
        "location": {
            // Vinh Tuy
            "lat": "20.998668",
            "lng": "105.868369",
        },
        "promotion": [
            {
                "productId": 8,
                "originalPrice": 20,
                "discount": 10,
                "valid_from": "",
                "valid_to": "",
            },
        ]
    },
    {
        "id": 4,
        "name": "Yen So",
        "website": "",
        "location": {
            // 20.964281, 105.858772
            "lat": "20.964281",
            "lng": "105.858772",
        },
        "promotion": [
            {
                "productId": 8,
                "originalPrice": 14,
                "discount": 2,
                "valid_from": "",
                "valid_to": "",
            },
        ]
    },
    {
        "id": 5,
        "name": "Skrrrrrmart",
        "website": "",
        "location": {
            "lat": "1.27832046633393",
            "lng": "103.83762574759974",
        },
        "promotion": [
            {
                "productId": 8,
                "originalPrice": 5,
                "discount": 1,
                "valid_from": "",
                "valid_to": "",
            },
        ]
    },
]

exports.suggestion = (user_lat, user_lng, product_ids) => {
    console.log("List: "+ product_ids.length);
    var recommendShops = sellers.filter(shop => 
        distance(user_lat, user_lng, shop.location.lat, shop.location.lng, "K") < 5 // 5km radius
        && shop.promotion.find(p => product_ids.includes(p.productId))); 
    return recommendShops;
}

function distance(lat1, lon1, lat2, lon2, unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        console.log("Dist: "+ dist);
		return dist;
	}
}

/*mongoose = require('mongoose');
const sellerSchema = mongoose.Schema({
    name: {
        type: String
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    products: [
        {
          productId: Number,
          originalPrice: Number,
          discount: Number
        }
      ],
}, { timestamps: false });

sellerSchema.index({ location: '2dsphere' });
const Seller = mongoose.model('Seller', sellerSchema);
module.exports = { Seller }*/