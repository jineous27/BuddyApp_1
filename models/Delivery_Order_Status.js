const mongoose = require ('mongoose');
const deliveryOrderStatusSchema = mongoose.Schema(
    {
        delivery_status_id: {
            type: Number,
            required: true
        },
        buddy_task_id: {
            type: Number,
            required: true
        },
        delivery_order_status: {
            type: String,
            required: true
        },
        time_to_accept: {
            type: Date,
            required: true
        },
        time_to_pickup: {
            type: Date,
            required: true
        },
        time_to_complete: {
            type: Date,
            required: true
        },
        time_to_incomplete: {
            type: Date
        },
        time_to_cancel: {
            type: Date
        }

    },
    {
        timestamp: true
    }
);


module.exports = mongoose.model ("delivery_order_status", deliveryOrderStatusSchema);