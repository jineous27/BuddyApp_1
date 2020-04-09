const express = require('express');
const router = express.Router();

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
    res.json ({
        msg: "Register buddy's task ID"
    });
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