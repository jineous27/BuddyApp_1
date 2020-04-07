const express = require('express');
const app = express();

const buddyIdRoutes = require('./routes/Buddy_ID');
const buddyVehicleIdRoutes = require('./routes/Buddys_Vehicle');

app.use('/api/buddyid', buddyIdRoutes);
app.use('/api/vehicleid', buddyVehicleIdRoutes);








const port = 1234;
app.listen(port, console.log(`Server running on port ${port}`));