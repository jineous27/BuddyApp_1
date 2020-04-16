const mongoose = require("mongoose");

mongoose.connect("", {useNewUrlParser:true}) //데이터베이스와 연결하는 기본형 코드 (3줄) - 데이터베이스와 연결되었는지 여부만 확인 (데이터 넣고 빼는건 다른곳에서)
    .then() => console.log ("Congratulations MongoDB is Connected")
    .catch(err => console.log(error));