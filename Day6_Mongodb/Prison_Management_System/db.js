const mongoose = require("mongoose");

const connectDB = async() => {
    try{
        await mongoose.connect(
            "mongodb+srv://dhungana21_db_user:!!FArgyMon535%402XY@cluster0.grxqjoq.mongodb.net/"
        );
        console.log("MongoDB connected successfully!");
    }catch(error){
        console.error("Database connection failed: ",error.message);
        process.exit(1);
    }
};

module.exports = connectDB;