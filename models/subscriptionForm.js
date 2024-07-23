const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SubscriptionFormSchema = new Schema({
    email: { type: String, required: true, maxLength: 50  },
});

module.exports = mongoose.model("SubscriptionForm", SubscriptionFormSchema);