var express = require('express');
var router = express.Router();
var passport = require('passport');
var csrf = require('csurf');

var csrfProtection = csrf();
router.use(csrfProtection);

var Order = require('../models/order');
var Cart = require('../models/cart');

router.get('/profile', isLoggedIn, function (req, res, next) {
  Order.find({user: req.user}, function(err, orders) {
      if (err) {
          return res.write('Error!');
      }
      var cart;
      orders.forEach(function(order) {
          cart = new Cart(order.cart);
          order.items = cart.generateArray();
      });
      res.render('users/profile', { orders: orders });
  });
});

router.get('/logout',isLoggedIn,function(req,res,next){
    req.logout();
    res.redirect('/');
  });

router.use('/', isNotLoggedIn, function(req,res,next){
    next();
});

router.get('/signup',function(req,res,next){
    var messages = req.flash('error');
    res.render('users/signup', {csrfToken:req.csrfToken(), messages:messages,hasErrors:messages.length > 0});
  });
  
  router.post('/signup', passport.authenticate('local.signup', {
    failureRedirect: '/users/signup',
    failureFlash: true
}), function (req, res, next) {
    if (req.session.oldUrl) {
        var oldUrl = req.session.oldUrl;
        req.session.oldUrl = null;
        res.redirect(oldUrl);
    } else {
        res.redirect('/users/profile');
    }
});
  
  
  router.get('/signin',function(req,res,next){
    var messages = req.flash('error');
    res.render('users/signin', {csrfToken:req.csrfToken(), messages:messages,hasErrors:messages.length > 0});
  });
  
  router.post('/signin', passport.authenticate('local.signin', {
    failureRedirect: '/users/signin',
    failureFlash: true
}), function (req, res, next) {
    if (req.session.oldUrl) {
        var oldUrl = req.session.oldUrl;
        req.session.oldUrl = null;
        res.redirect(oldUrl);
    } else {
        res.redirect('/users/profile');
    }
});

 module.exports = router;

  function isLoggedIn(req,res,next){
      if (req.isAuthenticated()){
          return next();
      }
      res.redirect('/');
  }

  function isNotLoggedIn(req,res,next){
    if (!req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}