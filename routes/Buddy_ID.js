const express = require('express');
const router = express.Router();
const buddyIdModel = require("../models/Buddy_ID");


//CRUD Create-Retrieve-Update-Delete 를 만드는게 핵심이다//

//Buddy's ID 불러오는 API - 전체 API 불러오기
router.get('/', (req, res) => {
    res.json({
        msg: "전체 Buddy's ID 불러옴"
    });
});


//Buddy's ID 불러오는 API - 특정 Buddy's ID 만 불러오는 API

//Buddy's ID 등록하는 API
router.post('/', (req, res) => {
    
    const newBuddyId = new buddyIdModel({
        Deliery_Buddy_Id: req.body.Delivery_Buddy_Id,
        Buddy_First_Name: req.body.Buddy_First_Name,
        Buddy_Last_Name: req.body.Buddy_Last_Name,
        Buddy_Account_Email: req.body.Buddy_Account_Email,
        Buddy_Account_Password: req.body.Buddy_Account_Password,
        Buddy_DOB: req.body.Buddy_DOB,
        Buddy_Work_Type: req.body.Buddy_Work_Type,
        Buddy_ABN: req.body.Buddy_ABN,
        Buddy_GST_Registration: req.body.Buddy_GST_Registration,
        Buddy_Contract: req.body.Buddy_Contract,
        Buddy_Emergence_Name:req.body.Buddy_Emergence_Name,
        Buddy_Emergence_Number:req.body.Buddy_Emergence_Number
    });

    newBuddyId 
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Handling POST requests to buddy Id',
                createdBuddyIdInfo: result
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        });

    // res.json({
    //     msg: "Buddy's ID 등록함",
    //     buddyInfo: newBuddyId
    // });
});








//Buddy's ID 수정하는 API
router.patch('/', (req, res) => {
    res.json({
        msg: "Buddy's ID 수정함"
    });
});
//Buddy's ID 삭제하는 API
router.delete('/', (req,res) => {
    res.json({
        msg: "Buddy's ID 삭제함"
    });
});


















module.exports = router;