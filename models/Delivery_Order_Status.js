const mongoose = require ('mongoose');
const deliveryOrderStatusSchema = mongoose.Schema(
    {
        delivery_status_id: {
            type: Number,
            required: 
        },
        buddy_task_id: {
            type: Number,
            required: true
        },
        delivery_order_status_id: {
            type: Number,
        }

    },
    {
        timestamp: true
    }
);


module.exports = mongoose.model ("delivery_order_status", deliveryOrderStatusSchema);