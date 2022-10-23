import React, { useContext, useState , useEffect} from 'react'
import { auth } from '../firebase'
import { FirebaseApp } from 'firebase/app'


const AuthContext = React.createContext()


export function useAuth(){
    return useContext(AuthContext)
}


export function authProvider({children}) {

    const [currentUser , setCurrentUser] = useState()

    function signup(username,email,phone,password){
        return auth.createUserWithUsernameEmailPhoneAndPassword(username,email,phone,password)
    }


    useEffect(()=>{
       const unsubscribe =  auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe

    },[])

    

    const value = {
        currentUser,
        signup
    }


  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export default authProvider