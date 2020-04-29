const express = require('express');
const router = express.Router();
const buddyVehicleIdModel = require("../models/Buddys_Vehicle");

//CRUD Create - Retrieve - Update - Delete
// 전체 Vehicle's ID 불러오기 
router.get('/', (req, res) => {
    res.json ({
        msg: "전체 Buddy's Vehicle 불러옴"
    });
});


// 선택된 특정 Vehicle's ID 만 불러오기 

//Buddy's Vehicle ID 등록하는 API
router.post('/', (req, res) => {

    const newBuddyVehicleId = new buddyVehicleIdModel ({
        buddy_vehicle_Id: req.body.buddy_vehicle_Id,
        delivery_buddy_id: req.body.delivery_buddy_id,
        vehicle_registration_number: req.body.vehicle_registration_number,
        vehicle_model: req.body.vehicle_model,
        vehicle_color: req.body.vehicle_color,
        vehicle_insurance: req.body.vehicle_insurance,
        vehicle_insurance_documents: req.body.vehicle_insurance_documents
    });

    newBuddyVehicleId
    .save()
    .then(result => {
        res.status(201).json ({
            message: "Handling POST requests to buddy ID",
            createBuddyIdInfo: result
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err.message
        });
    });

    // res.json ({
    //     msg: "Buddy's Vehicle ID 등록함",
    //     buddyVehicleInfo: newBuddyVehicleId
    // });
});

//특정 Buddy's Vehicle ID 불러오는 API
// router.get ('/', (req, res) => {
//     res.json ({
//         msg: "특정 Buddy's Vehicle ID 불러옴"
//     });
// });

//Buddy's Vehicle ID 업데이트 API
router.patch ('/', (req, res) => {
    res.json ({
        msg: "Buddy's Vehicle ID 업데이트"
    });
});

//Buddy's Vehicle ID 삭제하는 API
router.delete ('/', (req,res) => {
    res.json ({
        msg: "Buddy's Vehicle ID 삭제함"
    });
});













module.exports = router;