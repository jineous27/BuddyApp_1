const mongoose = require ('mongoose');
const buddyTaskIdSchema = mongoose.Schema(
    {
        delivery_task_id: {
            type: Number,
            required: true
        },
        order_id: {
            type: Number,
            required: true
        },
        delivery_buddy_id: {
            type: Number,
            required: true
        },
        delay_at_shop: {
            type: Boolean,
            required: false
        },
        shop_delay_reason: {
            type: String
        },
        buddy_comment_delay: {
            type: String
        },
        users_signature: {
            type: Attachments  
        },
        user_delivery_report: {
            type: Boolean,
            required: false
        },
        user_issue_report: {
            type: String,
        },
        cash_receivable: {
            type: Number,

        },
        buddy_service_fee: {
            type: Number,
        },
        buddy_task_status: {
            type: String,
        },

    },
    {
        timestamp: true
    }
);


module.exports = mongoose.model ("buddy_task_id", buddyTaskIdSchema);