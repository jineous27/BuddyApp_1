const mongoose = require ('mongoose');
const buddyPaymentSchema = mongoose.Schema(
    {
        delivery_buddy_id: {
            type: String,
            required: true
        },

    },
    {
        timestamp: true
    }
);


module.exports = mongoose.model ("buddy_payment", buddyPaymentSchema);