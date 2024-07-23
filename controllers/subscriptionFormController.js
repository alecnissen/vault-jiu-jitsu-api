const { body, validationResult } = require('express-validator');
const SubscriptionForm = require('../models/subscriptionForm');
const asyncHandler = require('express-async-handler');


exports.createSubscriptionForm = [
    body('email', 'Email cannot be blank')
        .trim()
        .isEmail()
        .normalizeEmail()
        .isLength({ max: 50 }),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        const subscriptionForm = new SubscriptionForm({
            email: req.body.email,
        });

        if (!errors.isEmpty()) {
                errors: errors.array(),
                res.json(subscriptionForm)
                console.log(errors)
            } else {
            res.json(await subscriptionForm.save())
        }
    })
];