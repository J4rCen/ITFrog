import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://root:password@localhost:27017/store?authSource=admin")
    } catch (error) {
        console.error(error)
    }
}

export default connectDB