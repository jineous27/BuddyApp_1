const express = require('express');
const app = express();

const buddyIdRoutes = require('./routes/Buddy_ID');
const buddyVehicleIdRoutes = require('./routes/Buddys_Vehicle');
const buddyTaskId = require('./routes/Buddy_Task_ID');
const deliveryOrderStatus = require('./routes/Delivery_Order_Status');


app.use('/api/buddyid', buddyIdRoutes);
app.use('/api/vehicleid', buddyVehicleIdRoutes);
app.use('/api/buddytaskid', buddyTaskId);
app.use('/api/deliveryorderstatus', deliveryOrderStatus);







const port = 1234;
app.listen(port, console.log(`Server running on port ${port}`));