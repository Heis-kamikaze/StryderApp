import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: "15d"
    })

    res.cookie("token", token, {
        httpOnly: true, // to prevent cross site scripting attacks
        maxAge: 15 * 24 * 60 * 60 * 1000,
        sameSite: "Strict",
        secure: process.env.Node_ENV !== "development"
   })
}

export default generateTokenAndSetCookie