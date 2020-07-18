var Product = require('../models/product');

var mongoose = require('mongoose');
const { exists } = require('../models/product');

mongoose.connect('mongodb://localhost:27017/shopping',{ useNewUrlParser:true , useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err));

var products = [

    new Product({
    title: 'Apple Macbook Pro 2018',
    imagePath: '/Image/mac.jpg',
    cpu: "6-core Intel i7, 8th generation",
    ram: "16GB",
    storage: "1TB GB SSD",
    screen: "15-inch Retina display",
    description: 'Apple Laptop',
    price: 3199
    }),

    new Product({
    title: 'Huawei MateBook X Pro',
    imagePath: '/Image/hu.jpg',
    cpu: "Intel Core i7, 8th generation",
    ram: "8GB",
    storage: "512 GB SSD",
    screen: "13.9-inch, 3K (3,000 x 2,080)",
    description: 'Huawei Laptop',
    price: 1499
    }),

    new Product({
    title: 'Dell XPS 13',
    imagePath: '/Image/dell.png',
    cpu: "Intel Core i7, 8th generation",
    ram: "16GB",
    storage: "512 GB SSD",
    screen: "13.3-inch, Full HD",
    description: 'Dell Laptop',
    price: 1199
    }),

    new Product({
    title: 'Samsung Notebook 9',
    imagePath: '/Image/samsung.jpg',
    cpu: "Intel Core i7, 8th generation",
    ram: "16GB",
    storage: "256 GB SSD",
    screen: "15-inch, Full HD",
    description: 'Samsung Laptop',
    price: 1499
    })
];

var done = 0;
for (var i = 0; i < products.length; i++){

    products[i].save(function(err,result){
        done++;
        if (done === products.length){
            ex()
        }
    });
}
function ex(){
    mongoose.disconnect();
}



