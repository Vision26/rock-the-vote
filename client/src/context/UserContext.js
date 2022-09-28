import React from "react"
import axios from "axios"
import User from "../../../models/User"
import { PromiseProvider } from "mongoose"
const UserContext = React.createContext()

function UserProvider(){

    return(
        <UserContext.Provider value={{}}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserProvider, UserContext }