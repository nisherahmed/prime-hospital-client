import { useContext } from "react"
import { authContext } from "../contexts/AuthProvider/AuthProvider"

const useAuth = () => {
    const auth = useContext(authContext)
    return auth;
}

export default useAuth;


// after creating useAuth hook then we use it register page and set loader