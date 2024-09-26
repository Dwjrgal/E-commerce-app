import React from "react";

const RecoveryPass1 = () => {
  return (
    <div className="flex flex-col gap-3 items-center h-[800px] pt-40 bg-slate-100">
      <h2 className="font-bold text-lg mb-4">Нууц үг сэргээх</h2>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          className="w-72 h-8 border rounded-full pl-2 text-xs"
          placeholder="Имэйл хаяг оруулах"
        />
        <button className="w-72 h-8 border bg-blue-600 rounded-full text-white">
          Илгээх
        </button>
      </div>
    </div>
  );
};

export default RecoveryPass1;
