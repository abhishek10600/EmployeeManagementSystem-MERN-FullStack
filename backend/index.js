require("dotenv").config();
const app = require("./app.js");
const connectWithDb = require("./config/database.js");

connectWithDb();

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`App running on PORT ${PORT}...`);
})