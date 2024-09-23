" use client"

import React, { useState } from 'react'
import { createContext } from 'vm'

export const UserContext = createContext();

export const UserProvider = ({ children}) =>{
    const [user, setUser] = useState({

    })
}