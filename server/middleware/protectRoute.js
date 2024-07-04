import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
    try {
        // Extract the cookies from the server
        const token = req.cookies.token;

        // Check if the token exists
        if (!token) {
            return res.status(401).json({ error: "Not authorized: No valid token provided" });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded) {
            return res.status(401).json({ error: "Not authorized: Invalid token" });
        
        }

        // Find the user by the decoded token
        const user = await User.findById(decoded.userId).select("-password");

        if(!user) {
            return res.status(401).json({ error: "Not authorized: User not found" });
        }

        // Attach the user to the request object
        req.user = user;

        // Call the next function
        next();

    } catch (error) {
        console.log("Error in protectRoute middleware:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export default protectRoute;
 