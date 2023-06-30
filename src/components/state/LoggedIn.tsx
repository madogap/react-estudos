import { useState } from 'react'

export const LoggedIn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        //console.log('Logged in')
        setIsLoggedIn(true)
    }

    const handleLogout = () => {
        console.log('Logged out')
        setIsLoggedIn(false)

    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn ? 'Logged in' : 'logged out'} </div>
        </div>
    )

    

}