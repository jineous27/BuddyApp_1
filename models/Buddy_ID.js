// Model 이라는 폴더안에 각 JS 파일을 만들어서, 역할은 데이터베이스 구조설계를 위함이다. 몽고디비에 담기니깐 Mongoos 먼저 불러오기//
const mongoose = require('mongoose');
const buddyIdSchema = mongoose.Schema(
    {

        Delivery_Buddy_Id: {
            type: Number,
            required: true
        },
        Buddy_First_Name: {
            type: String,
            required: true
        },
        Buddy_Last_Name: {
            type: String,
            required: true
        },
        Buddy_Account_Email: {
            type: String,
            required: true
        },
        Buddy_Account_Password: {
            type: String,
            required: true

        },
        Buddy_DOB: {
            type: Date,
            required: true
        },
        Buddy_Work_Type: {
            type: String,
            required: true

        },
        Buddy_ABN: {
            type: Number,
            required: true

        },
        Buddy_GST_Registration: {
            type: Boolean,
            default: false
        },
        Buddy_Contract: {
            type: Number,
            required: true

        },
        Buddy_Emergence_Name: {
            type: String,
            required: true
        },
        Buddy_Emergence_Number: {
            type: Number,
            required: true
        }

    },
    {
        timestamps: true
    }
);




module.exports = mongoose.model ("buddy_id", buddyIdSchema);