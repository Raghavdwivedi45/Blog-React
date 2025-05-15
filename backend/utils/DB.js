import mongoose from "mongoose";

const connectDB = async() => {
    try {
        console.log("Hello from DB");
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB connected`)
    }
    catch(err) {
        console.log(`MongoDB Connection Error: ${err}`);
    }
}

export default connectDB;