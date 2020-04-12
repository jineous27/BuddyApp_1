const express = require('express');
const router = express.Router();

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

    const newBuddyVehicleId = {
        buddyVehicleId: req.body.buddyVehicleId,
        buddyId: req.body.buddyId,
        vehicleType: req.body.vehicleType,
        vehicleModel: req.body.vehicleModel,
        vehicleColor: req.body.vehicleColor,
        vehicleInsurance: req.body.vehicleInsurance
    };


    res.json ({
        msg: "Buddy's Vehicle ID 등록함",
        buddyVehicleInfo: newBuddyVehicleId
    });
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