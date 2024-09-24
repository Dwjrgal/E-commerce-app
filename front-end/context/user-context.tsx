// " use client"

// import axios from 'axios';
// import React, { Children, useEffect, useState } from 'react'
// import { createContext } from 'vm'


// export const UserContext = createContext();

//  export  const UserProvider = ({ children}) =>{
//  const [user, setUser] = useState({
//         userId: "",
//         firstname: "",
//         email: ""
//     })

//     const fetchUserData = async () =>{
//         try {
//             const token = localStorage.getItem("token")
//             const res = await axios.get("http://localhost:8000/api/v1/auth/test/users", {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                   },
//             })
//             if ( res.status === 200 ) {
//                 setUser( res.data.user);
//                 console.log("User", res.data);
//             }
//         } catch (error) {
//             console.error("Error fetching user data:", error)
            
//         }
//     }
//     useEffect( () => {
//         if( !user) {
//         }
//         fetchUserData();
//     },[user])

//     return (
//        <UserContext.Provider value = {{ user, fetchUserData }}>
//        { children}
//        </UserContext.Provider>
//     )
// }