const express = require('express');
const app = express();
const morgan = require('morgan');

const buddyIdRoutes = require('./routes/Buddy_ID');
const buddyVehicleIdRoutes = require('./routes/Buddys_Vehicle');
const buddyTaskId = require('./routes/Buddy_Task_ID');
const deliveryOrderStatus = require('./routes/Delivery_Order_Status');

app.use(morgan('dev')); //dev 버전으로 log를 찍겠다. 일반적인 dev version

app.use('/api/buddyid', buddyIdRoutes);
app.use('/api/vehicleid', buddyVehicleIdRoutes);
app.use('/api/buddytaskid', buddyTaskId);
app.use('/api/deliveryorderstatus', deliveryOrderStatus);







const port = 1234;
app.listen(port, console.log(`Server running on port ${port}`));