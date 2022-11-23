import { Auth, Hub } from "aws-amplify"
import React, { useEffect, useState } from "react"

export const UserContext = React.createContext(null)

const UserProvider = (props) => {
    const [user, setUser] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        // fetch user initially
        fetchUser()

        // Change states as per actions
        Hub.listen('auth', (data) => {
            const {payload} = data
            switch (payload.event) {
                case 'signIn':
                    setUser(payload.data.attributes)
                    setIsLoggedIn(true)
                    break;
                case 'signUp':
                    console.log('user signed up');
                    break;
                case 'signOut':
                    setUser(undefined)
                    setIs
                    break;
                case 'signIn_failure':
                    console.log('user sign in failed');
                    break;
                case 'configured':
                    console.log('the Auth module is configured');
              }
        })
    }, [])

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

    return (
        <UserContext.Provider value={{
            user: user,
            setUser: setUser,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider

const UserConsumer = UserContext.Consumer
export {UserConsumer}