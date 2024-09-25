"use client";

import axios from "axios";
import React, {
  PropsWithChildren,
  useEffect,
  useState,
  createContext,
} from "react";

export const UserContext = createContext({});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState({
    _id: "",
    firstname: "",
    email: "",
  });

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:8000/api/v1/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        setUser(res.data.user);
        console.log("User", res.data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    if (!user) {
    }
    fetchUserData();
  }, [user]);

  return (
    <UserContext.Provider value={{ user, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
