export const login = (req, res) => {
    console.log("loginUser")
}
export const logout = (req, res) => {
    console.log("logoutUser")
}
export const signup = async (req, res) => {
    
    try {
        const {fullName, userName, passWord, confirmPassword, emailAddress, phoneNumber, gender}= req.body
    } catch (error) {
        
    }
}