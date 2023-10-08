const mongoose = require("mongoose");

const connectWithDb = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(
        console.log("Connected to database successfully")
    ).catch(error => {
        console.log("Database connection failed");
        console.log(error.message);
        process.exit(1);
    })
}

module.exports = connectWithDb;