import { createContext, useState } from "react"


export type AuthUser = {
    name: string
    email: string
}


type UserContextType= {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type UserContextProviderProp = {
    children:  React.ReactNode
}

export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({children}: UserContextProviderProp) => {
        const [user, setUser] = useState<AuthUser| null>(null) //because the user is logged out orginally

        return (
            <UserContext.Provider value={{user, setUser}}>
                {children}
            </UserContext.Provider>
        )



}

