"use client";

import axios from "axios";
import React, { useEffect, useState, createContext, useCallback } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { apiUrl } from "@/lib/util";

interface IUserForm {
  _id: string;
  firstname: string;
  email: string;
  password: string;
  repassword: string;
}
interface UserType {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  profile_img: string;
}
interface UserContextType {
  fetchUserData: () => void;
  handleLogForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  logIn: () => void;
  signUp: () => void;
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  logOut: () => void;
}
export type UserToken = {
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
  user: {
    id: string;
    email: string;
    roles: string[];
  };
};

export const UserContext = createContext<UserContextType>({
  fetchUserData: () => {},
  handleLogForm: () => {},
  logIn: () => {},
  signUp: () => {},
  user: null,
  setUser: () => {},
  logOut: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<UserType | null>(null);
  const [userForm, setUserForm] = useState<IUserForm>({
    _id: "",
    firstname: "",
    email: "",
    password: "",
    repassword: "",
  });

  const handleLogForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const signUp = async () => {
    const { firstname, email, password, repassword } = userForm;

    if (password !== repassword) {
      toast.error("Нууц үг хоорондоо тохирохгүй байна.");
      return;
    }
    try {
      const res = await axios.post(`${apiUrl}/auth/signup`, {
        firstname,
        email,
        password,
        repassword,
      });

      if (res.status === 200) {
        toast.success("User successfully signed up", { autoClose: 1000 });
        router.push("/login");
      }
    } catch (error) {
      console.error("There was an error signing up:", error);
      toast.error("Failed to sign up. Please try again.");
    }
  };

  const logIn = async () => {
    const { email, password } = userForm;
    console.log("user", email, password);
    try {
      const res = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });
      console.log("res", res);

      if (res.status === 200) {
        toast.success("User successfully logged in", { autoClose: 1000 });
        const { token } = res.data;
        console.log("token", token);
        localStorage.setItem("token", token);
        router.push("/");
      }
    } catch (error) {
      console.error("There was an error logged in:", error);
      toast.error("Failed to log in . Please try again.");
    }
    console.log("user data", userForm);
  };

  const fetchUserData = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const res = await axios.get(`${apiUrl}/auth/current-user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.status === 200) {
          setUser(res.data.user);
        }
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching user data:", error.message);
      }
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserData();
    }
  }, [fetchUserData]);
  return (
    <UserContext.Provider
      value={{
        fetchUserData,
        handleLogForm,
        signUp,
        logIn,
        user,
        setUser,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
