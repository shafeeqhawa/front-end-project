import { createContext, useState } from "react";

export const AuthContext=createContext()

const UserManger= ({children})=>{
    const [user, setUser]= useState(JSON.parse(localStorage.getItem('the-user') || '{}'))
    const [token, setToken]=useState(localStorage.getItem('the-token')|| '{}')

    const signIn=(userData, userToken)=>{
        setUser(userData)
        setToken(userToken)
        localStorage.setItem('the-token', userToken)
        localStorage.setItem('the-user', JSON.stringify(userData))

    }
    const signOut=()=>{
        setUser({})
        setToken('')
        localStorage.removeItem('the-user')
        localStorage.removeItem('the-token')
        
    }

    return (
        <AuthContext.Provider value={{
            user,
            token,
            signIn,
            signOut

        }}>
            {children}

        </AuthContext.Provider>
       

    )
}
export default UserManger