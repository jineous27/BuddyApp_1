const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin-buddyapp:wlsl4378@cluster0-ptcl2.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser:true, useUnifiedTopology: true })
    .then(() => console.log ("Congratulations MongoDB is Connected"))
    .catch(err => console.log(error));