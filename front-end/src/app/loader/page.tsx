import React from "react";

const Loader = () => {
  return (
    <div className="h-[800px] flex justify-center items-center mx-auto ">
      <span className="loading loading-spinner loading-lg mb-2"></span>
      <p className="text-xs">Түр хүлээнэ үү...</p>
    </div>
  );
};

export default Loader;
