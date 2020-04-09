const express = require('express');
const router = express.Router();

//CRUD Create - Retrieve - Update - Delete
// 배달 상태 ID 불러오기 

router.get ('/', (req, res) => {
    res.json ({
        msg: "Successfully get Delivery Order Status"
    });
});

// 배달 상태 ID 등록
router.post ('/', (req, res) => {
    res.json ({
        msg: "Successfully post Delivery Order Status"
    });
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