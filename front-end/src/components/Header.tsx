import React, { useContext, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { BiSearchAlt2 } from "react-icons/bi";
import { PiShoppingCart } from "react-icons/pi";
import { VscHeart } from "react-icons/vsc";
import Link from "next/link";
import { UserContext } from "@/context/user-context";
import { FiUser } from "react-icons/fi";
import { ProductsContext } from "@/context/products-context";
import { MdLogout } from "react-icons/md";
import Image from "next/image";

const Header = () => {
  const { fetchUserData, user, logOut } = useContext(UserContext);
  const { setSearchValue } = useContext(ProductsContext);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  console.log("fetchUserData", fetchUserData);
  console.log("userrrr:", user);
  return (
    <div>
      <header className="h-20 bg-black flex justify-between items-center px-20">
        <div className="flex gap-8 items-center">
          <Link href={"/"}>
            <Image src="/img/Logo/Logo.png" alt="" />
          </Link>
          <Link href="../category">
            <h3 className="text-slate-200">Ангилал</h3>
          </Link>
        </div>
        <div className="w-64 h-10   rounded-full bg-neutral-900 pl-4 flex items-center gap-2">
          <BiSearchAlt2 className="text-2xl font-bold text-white " />
          <input
            type="text"
            placeholder="
      Бүтээгдэхүүн хайх"
            className="bg-neutral-900 text-white"
            onChange={handleChange}
          />
        </div>
        <div className="text-white  text-2xl flex gap-4 items-center font-extralight">
          <Link href={"../save"}>
            <VscHeart />
          </Link>
          <Link href={"../buy-steps/cart"}>
            <PiShoppingCart />
          </Link>
          {user && (
            <div className="flex gap-3">
              <Link href={"../user-form"}>
                {" "}
                <FiUser />{" "}
              </Link>
              <MdLogout onClick={logOut} />
            </div>
          )}
          {!user && (
            <>
              <Link href="/signup">
                <Button
                  variant="outline"
                  className="rounded-3xl text-white-primary border-blue-500"
                >
                  Бүртгүүлэх
                </Button>
              </Link>
              <Link href="/login">
                <Button className="rounded-full bg-blue-600 text-white">
                  Нэвтрэх
                </Button>
              </Link>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
