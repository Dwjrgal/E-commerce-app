import React from "react";

const Loader = () => {
  return (
    <div className="w-40 h-40 bg-cyan-400">
      <span className="loading loading-spinner loading-lg mb-2"></span>
      <p className="text-xs">Түр хүлээнэ үү...</p>
    </div>
  );
};

export default Loader;
