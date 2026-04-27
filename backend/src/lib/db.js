import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		if (mongoose.connection.readyState >= 1) {
			console.log("Already connected to MongoDB");
			return;
		}
		
		const conn = await mongoose.connect(process.env.MONGODB_URI, {
			serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 10s for server selection
			socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
		});
		console.log(`Connected to MongoDB ${conn.connection.host}`);
	} catch (error) {
		console.error("Failed to connect to MongoDB:", error.message);
		// In serverless, we don't want to kill the process necessarily, 
		// but we want to know it failed.
		throw error;
	}
};
