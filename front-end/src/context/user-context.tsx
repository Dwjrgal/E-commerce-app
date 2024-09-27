"use client";

import axios from "axios";
import React, {
  PropsWithChildren,
  useEffect,
  useState,
  createContext,
} from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface IUser {
  firstName: String;
  lastName: String;
  email: string;
  password: String;
  repassword: String;
}

interface UserContextType {
  fetchUserData: () => void;
  handleLogForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  logIn: () => void;
  signUp: () => void;
}

export const UserContext = createContext<UserContextType>({
  fetchUserData: () => {},
  handleLogForm: (e: React.ChangeEvent<HTMLInputElement>) => {},
  logIn: () => {},
  signUp: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<IUser>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repassword: "",
  });
  const handleLogForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const signUp = async () => {
    const { firstName, email, password, repassword } = user;

    if (password !== repassword) {
      toast.error("Нууц үг хоорондоо тохирохгүй байна.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8000/api/v1/auth/signup", {
        firstName,
        email,
        password,
      });

      if (res.status === 200) {
        toast.success("User successfully signed up", { autoClose: 1000 });
        router.push("/login");
      }
    } catch (error) {
      console.error("There was an error signing up:", error);
      toast.error("Failed to sign up. Please try again.");
    }

    console.log("user data", user);
  };

  const logIn = async () => {
    const { email, password } = user;
    console.log("user", email, password);
    try {
      const res = await axios.post("http://localhost:8000/api/v1/auth/login", {
        email,
        password,
      });
      console.log("res", res);

      if (res.status === 200) {
        toast.success(" User successfully logged in", { autoClose: 1000 });
        const { token } = res.data;
        console.log("token", token);
        localStorage.setItem("token", token);
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("There was an error logged in:", error);
      toast.error("Failed to log in . Please try again.");
    }
    console.log("user data", user);
  };

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "http://localhost:8000/api/v1/auth/current-user",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
        setUser(res.data.user);
        console.log("User", res.data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <UserContext.Provider
      value={{ fetchUserData, handleLogForm, signUp, logIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
