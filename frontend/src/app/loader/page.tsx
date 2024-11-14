import React from "react";
import "../globals.css";

const Loader = () => {
  return (
    <div className="h-[800px] flex justify-center items-center mx-auto gap-6 bg-slate-100">
     <span className="loader"></span>
      <p className="text-xs">Түр хүлээнэ үү...</p>
    </div>
  );
};

export default Loader;
