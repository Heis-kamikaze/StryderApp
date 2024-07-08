import { useState } from "react"
import toast from "react-hot-toast";
import {useAuthContext} from '../context/AuthContext'

const useSignUp = () => { 
  const [loading, setLoading] = useState(false);
  const  {setAuthUser}  = useAuthContext()

  const signup = async({fullName, username, password, confirmPassword, gender, emailAddress}) => {
    const success = handleInputErrors({fullName, username, password, confirmPassword, gender, emailAddress})
    if(!success) return;

    setLoading(true);
    try {
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({fullName, username, password, confirmPassword, emailAddress, gender,})
        })

        const data = await res.json
        if (data.error){
            throw new Error(data.error)
        }
        console.log(res)

        localStorage.setItem("user", JSON.stringify(data))

        setAuthUser(data)

    } catch (error) {
        toast.error(error.message)
    } finally {
        setLoading(false);
    }
  }

  return {loading, signup}
}

export default useSignUp

const handleInputErrors = ({fullName, username, password, confirmPassword, gender, emailAddress}) => {
    if (!fullName || !username || !password || !confirmPassword || !gender || !emailAddress){
        toast.error(`We don't accept empty fields😤`)
        return false
    }

    if (password !== confirmPassword){
        toast.error('Passwords do not match')
        return false
    }

    if (password.length < 6){
        toast.error('Stop right there! Password must be at least 6 characters long!')
        return false
    }

    return true
}