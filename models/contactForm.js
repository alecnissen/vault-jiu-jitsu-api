const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContactFormSchema = new Schema({
    fullName: { type: String, required: true, maxLength: 50 },
    email: { type: String, required: true, maxLength: 20  },
    phone: { type: String, required: true, maxLength: 20  },
    message: { type: String, required: true, maxLength: 200  },
});

module.exports = mongoose.model("ContactForm", ContactFormSchema);