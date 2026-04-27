import { connectDB } from "../lib/db.js";

export const ensureDbConnected = async (req, res, next) => {
	try {
		await connectDB();
		next();
	} catch (error) {
		res.status(500).json({ message: "Database connection failed" });
	}
};
