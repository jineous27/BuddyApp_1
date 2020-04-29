const express = require('express');
const router = express.Router();
const buddyTaskIdModel = require("../models/Buddy_Task_ID");

//CRUD - Create Retrieve Update Delete
//Get buddy task ID  

router.get('/', (req, res) => {    
    res.json ({
        msg: "전체 buddy task ID 불러옴"
    });
});

//선택된 특정한 ID만 불러오기

//Register Buddy's Task ID API
router.post('/', (req, res) => {
    const newBuddyTaskId = new buddyTaskIdModel({
        delivery_task_id: req.body.delivery_task_id,
        order_id: req.body.order_id,
        delivery_buddy_id: req.body.delivery_buddy_id,
        delay_at_shop: req.body.delay_at_shop,
        shop_delay_reason: req.body.shop_delay_reason,
        buddy_comment_delay: req.body.buddy_comment_delay,
        users_signature: req.body.users_signature,
        user_delivery_report: req.body.user_delivery_report,
        user_issue_report: req.body.user_issue_report,
        cash_receivable: req.body.cash_receivable,
        buddy_service_fee: req.body.buddy_service_fee,
        buddy_task_status: req.body.buddy_task_status
    });

    newBuddyTaskId
        .save()
        .then(result =>{
            res.status(201).json({
                message: "Handling POST requests to Buddy Task Id",
                createBuddyTaskIdInfo: result
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        });
    // res.json ({
    //     msg: "Register buddy's task ID"
    // });
});

//Update Buddy's Task ID API
router.patch ('/', (req, res) => {
    res.json ({
        msg: "Update Buddy's Task ID"
    });
});

//Delete Buddy's Vehicle ID 
router.delete ('/', (req, res) => {
    res.json ({
        msg: "Delete Buddy's Task ID"
    });
});





module.exports = router;