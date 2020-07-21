var Product = require('../models/product');

var mongoose = require('mongoose');
const { exists } = require('../models/product');

mongoose.connect('mongodb://localhost:27017/shopping',{ useNewUrlParser:true , useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err));

var products = [

    new Product({
    title: 'Superman Americana T-Shirt',
    imagePath: '/Image/superman.jpeg',
    co: "DC Comics",
    description: '100% spun cotton',
    price: 30
    }),

    new Product({
    title: 'Batman Built-Up Backpack',
    imagePath: '/Image/batmanbag.png',
    co: "DC Comics",
    description: 'Approx. 12" x 19 1/2"',
    price: 70
    }),

    new Product({
    title: 'The Joker Comedy Club T-Shirt',
    imagePath: '/Image/jokertee.jpg',
    co: "DC Comics",
    description: '100% cotton',
    price: 30
    }),

    new Product({
    title: 'Birds of Prey Blind Box Vinyl',
    imagePath: '/Image/birdsofprey.jpg',
    co: "DC Comics",
    description: 'Approx. 2" - 3" tall',
    price: 8
    }),

    new Product({
    title: 'Marvel Womens T-Shirt',
    imagePath: '/Image/marveltee.jpg',
    co: "Marvel Comics",
    description: '100% cotton',
    price: 29
    }),

    new Product({
    title: 'Endgame Nano Gauntlet Mug',
    imagePath: '/Image/marvelmug.jpg',
    co: "Marvel Avengers",
    description: '20 oz. Ceramic',
    price: 17
    }),

    new Product({
    title: 'Eat the Universe: Cookbook',
    imagePath: '/Image/marvelbook.jpg',
    co: "Marvel Comics",
    description: 'By Justin Warner',
    price: 30
    }),

    new Product({
    title: 'Iron Man Single Cup Coffee Maker',
    imagePath: '/Image/marvelcoffee.jpg',
    co: "Marvel Avengers",
    description: 'Approx. 8" x 15" 13"',
    price: 150
    }),

    new Product({
    title: 'Spider-Man Interactive Watch',
    imagePath: '/Image/marvelwatch.jpg',
    co: "Marvel Avengers",
    description: 'Touch screen',
    price: 40
    }),

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
