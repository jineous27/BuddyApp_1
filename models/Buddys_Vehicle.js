const mongoose = require ('mongoose');
const buddyVehicleIdSchema = mongoose.Schema(
    {
        buddy_vehicle_Id: {
            type: Number,
            required: true
        },
        delivery_buddy_id: {
            type: Number,
            required: true
        },
        vehicle_registration_number: {
            type: String,
            required: true
        },
        vehicle_model: {
            type: String,
            required: true
        },
        vehicle_color: {
            type: String,
            required: true
        },
        vehicle_insurance: {
            type: Boolean,
            required: true
        },
        vehicle_insurance_documents: { //여기서 어떻게 해야하지? 첨부파일?//
            type: String,
            required: true
        }


    },
    {
        timestamp: true
    }
);


module.exports = mongoose.model ("buddy_vehicle_id", buddyVehicleIdSchema);