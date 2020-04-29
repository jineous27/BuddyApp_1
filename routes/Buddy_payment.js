const express = require('express');
const router = express.Router();
const buddyPaymentIdModel = require("../models/Buddy_payment");

router.get ('/', (req,res) => {
    res.json ({
        msg: "Successfully GET Buddy Payment Id"
    });
});


router.post ('/', (req,res) => {
    const newBuddyPaymentId = new buddyPaymentIdModel ({
        delivery_payment_id: req.body.delivery_payment_id,
        order_id: req.body.order_id,
        delivery_buddy_id: req.body.delivery_buddy_id,
        payment_comment: req.body.payment_comment
    });

    newBuddyPaymentId
        .save()
        .then(result => {
            res.status(201).json({
                message: "Handling POST requests to buddy payment Id",
                createdBuddyPaymentIdInfo: result
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        });

    // res.json ({
    //     msg: "Successfully Post Buddy Payment Id"
    // })
});

module.exports =router;