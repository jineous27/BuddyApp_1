const express = require('express');
const router = express.Router();
const deliveryOrderStatusIdModel = require('../models/Delivery_Order_Status');

//CRUD Create - Retrieve - Update - Delete
// 배달 상태 ID 불러오기 

router.get ('/', (req, res) => {
    res.json ({
        msg: "Successfully get Delivery Order Status"
    });
});

// 배달 상태 ID 등록
router.post ('/', (req, res) => {

    const newdeliveryOrderStatus = new deliveryOrderStatusIdModel ({
        delivery_status_id: req.body.delivery_status_id,
        buddy_task_id: req.body.buddy_task_id,
        delivery_order_status: req.body.delivery_order_status,
        time_to_accept: req.body.time_to_accept,
        time_to_pickup: req.body.time_to_pickup,
        time_to_complete: req.body.time_to_complete,
        time_to_incomplete: req.body.time_to_incomplete,
        time_to_cancel: req.body.time_to_cancel
    });

    newdeliveryOrderStatus
        .save()
        .then(result => {
            res.status(201).json({
                message: "Handling POST requests to delivery order status",
                createdBuddyIdInfo: result
            })
        })
        .catch(err => {
            res.status(500).json ({
                error: err.message
            });
        });

    // res.json ({
    //     msg: "Successfully post Delivery Order Status"
    // });
});

// 배달 상태 ID 업데이트
router.patch ('/', (req, res) => {
    res.json ({
        msg: "Successfully update Delivery Order Status"
    });
});

// 배달 상태 ID 삭제
router.delete ('/', (req, res) => {
    res.json ({
        msg: "Successfully delete Delivery Order Status"
    });
});



module.exports =router;