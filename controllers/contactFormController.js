const { body, validationResult } = require('express-validator');
const ContactForm = require('../models/contactForm');
const asyncHandler = require('express-async-handler');

exports.createContactForm = [
    body('fullName', 'First name cannot be blank')
        .trim()
        .isLength({ min: 1 })
        .isLength({ max: 50 })
        .escape(),
    body('email', 'Email cannot be blank')
        .trim()
        .isEmail()
        .normalizeEmail()
        .isLength({ max: 50 }),
    body('phone', 'Phone cannot be blank')
        .trim()
        .isLength({ min: 1 })
        .isLength({ max: 20 })
        .escape(),
    body('message', "Message cannot be blank.")
        .trim()
        .isLength({ min: 1 })
        .isLength({ max: 200 })
        .escape(),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        const contactForm = new ContactForm({
            fullName: req.body.fullName,
            email: req.body.email,
            phone: req.body.phone,
            message: req.body.message,
        });

        if (!errors.isEmpty()) {
                errors: errors.array(),
                res.json(contactForm)
                console.log(errors)
            } else {
            res.json(await contactForm.save())
        }
    })
];