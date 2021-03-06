const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const buddyIdRoutes = require('./routes/Buddy_ID');
const buddyVehicleIdRoutes = require('./routes/Buddys_Vehicle');
const buddyTaskIdRoutes = require('./routes/Buddy_Task_ID');
const deliveryOrderStatusRoutes = require('./routes/Delivery_Order_Status');
const buddyPaymenetIdRoutes = require('./routes/Buddy_payment');

require("./database");
app.use(morgan('dev')); //dev 버전으로 log를 찍겠다. 일반적인 dev version
app.use(bodyParser.json()); //사용자 입력값 각각을 Json 형태로 만들겠다. 
app.use(bodyParser.urlencoded({ extended: false})) ; //encoding은 컴퓨터가 알아먹을 수 있게 16진법으로 바꿔줌


app.use('/api/buddyid', buddyIdRoutes);
app.use('/api/vehicleid', buddyVehicleIdRoutes);
app.use('/api/buddytaskid', buddyTaskIdRoutes);
app.use('/api/deliveryorderstatus', deliveryOrderStatusRoutes);
app.use('/api/buddypaymentid', buddyPaymenetIdRoutes);







const port = 1234;
app.listen(port, console.log(`Server running on port ${port}`));