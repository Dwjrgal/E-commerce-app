import React from "react";
import "@/app/loader/loader-module.css";

const Loader = () => {
  return (
    <div className="h-[800px] flex justify-center items-center mx-auto ">
      <span className="loader"></span>
      <p className="text-xs">Түр хүлээнэ үү...</p>
    </div>
  );
};

export default Loader;
