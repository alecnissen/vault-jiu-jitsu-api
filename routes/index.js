const express = require('express');
const router = express.Router();
const contactFormController = require('../controllers/contactFormController');
const subscriptionFormController = require('../controllers/subscriptionFormController');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/contact', contactFormController.createContactForm);

router.post('/subscription', subscriptionFormController.createSubscriptionForm);

module.exports = router;
