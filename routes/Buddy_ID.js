const express = require('express');
const router = express.Router();

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
    res.json({
        msg: "Buddy's ID 등록함"
    });
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