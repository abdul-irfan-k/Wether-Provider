import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        if (mongoose.connection.readyState == 1) {
            return { isError: false, dbCreated: false }
        }

        await mongoose.connect('mongodb://127.0.0.1:27017/WetherApp')
        return { isError: false, dbCreated: true }
    } catch (error) {
        return { isError: true, error }
    }
}