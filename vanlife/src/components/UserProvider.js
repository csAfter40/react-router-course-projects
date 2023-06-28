import React, { createContext } from "react";

const UserContext = createContext();

function UserProvider(props) {
    const [user, setUser] = React.useState(null)

    React.useEffect(()=>{
        localStorage.setItem("vanlifeIsLoggedIn", JSON.stringify(user))
    },[user])

    return (
        <UserContext.Provider
            value={{user, setUser}}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export {UserProvider, UserContext}