import { Auth } from "aws-amplify"
import React, { useEffect, useState } from "react"

export const UserContext = React.createContext(null)

const UserProvider = (props) => {
    const [user, setUser] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        fetchUser()
    }, [])

    const Logout = async () => {
        setUser(undefined)
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    const fetchUser = async () => {
        try {
            const {attributes} = await Auth.currentAuthenticatedUser()
            if(!attributes) setIsLoggedIn(false)
            else setIsLoggedIn(true)
            setUser(attributes)
        } catch (error) {
            console.log('error fetching user details', error);
        }
    }

    const Login = () => {
        fetchUser()
    }

    return (
        <UserContext.Provider value={{
            user: user,
            setUser: setUser,
            Logout: Logout
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider

const UserConsumer = UserContext.Consumer
export {UserConsumer}