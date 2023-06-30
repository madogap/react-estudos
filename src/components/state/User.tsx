import { useState } from "react";


type AuthUser = {
    name: string
    email: string
}


export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null)
    
    const handleLogin = () => {
        console.log('Logged in')
        setUser({
            name:'Mado',
            email: 'madogap@gmail.com',
        })
    }
    const handleLogout=()=>{
        console.log('Logged out')
        setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <p>User name is: {user?.name}</p>
            <p>User email is: {user?.email}</p>
        </div>
    )

}