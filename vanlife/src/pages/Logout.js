import React from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../components/UserProvider";

export default function Logout() {
    const {setUser} = React.useContext(UserContext)
    React.useEffect(()=>{
        setUser(null)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <Navigate
            to={"/"}
        />
    )
}