" use client"

import React, { useState } from 'react'
import { createContext } from 'vm'

export const UserContext = createContext();

export const UserProvider = ({ children}) =>{
    const [user, setUser] = useState({
        userId: "",
        firstname: "",
        email: ""
    })

    const getUserData = async () =>{
        try {
            
        } catch (error) {
            
        }
    }
}