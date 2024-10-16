"use client";

import axios from "axios";
import React, {
  PropsWithChildren,
  useEffect,
  useState,
  createContext,
  useContext,
} from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { apiUrl } from "@/lib/util";

interface IUserForm {
  _id: any;
  firstname: String;
  email: string;
  password: String;
  repassword: String;
}
interface UserType {
  _id: any;
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

export const UserContext = createContext<UserContextType>({
  fetchUserData: () => {},
  handleLogForm: (e: React.ChangeEvent<HTMLInputElement>) => {},
  logIn: () => {},
  signUp: () => {},
  user: null,
  setUser: () => {},
  logOut: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<UserType | null>(null);
  const [token, setToken] = useState("");
  const [userForm, setUserForm] = useState<IUserForm>({
    _id: "",
    firstname: "",
    // lastName: "",
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
      console.log("response:", res);

      if (res.status === 200) {
        toast.success("User successfully signed up", { autoClose: 1000 });
        router.push("/login");
      }
    } catch (error) {
      console.error("There was an error signing up:", error);
      toast.error("Failed to sign up. Please try again.");
    }

    console.log("user data", userForm);
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

  const fetchUserData = async () => {
    try {
      const token: any = localStorage.getItem("token");
      setToken(token);
      const res = await axios.get(`${apiUrl}/auth/current-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        setUser(res.data.user);
        console.log("User res", res.data.user);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  console.log("userdata:", user);

  const logOut = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  useEffect(() => {
    fetchUserData();
  }, [token]);
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
export default UserProvider;
