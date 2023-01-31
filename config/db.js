const mongoose = require("mongoose")

const db = () => {
    try {
        mongoose.set('strictQuery', true)
        mongoose.connect(process.env.MONGO_URL)
        console.log("DB CONNECTED".bgMagenta);
    } catch (error) {
        console.log(`unable to  connect${error}`);
        process.exit()     //it will stop the server
    }
}
module.exports = db