import mongoose from "mongoose";

const connectToDb = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connected to MongoDB: ${connection.connection.host}`.cyan.underline.bold);

    } catch (error) {
        console.log(`Error: ${error.message}`.red.bold);
        
    }
}

export default connectToDb;