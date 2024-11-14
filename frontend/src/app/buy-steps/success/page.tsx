import React from "react";
import { BsCheck2Circle } from "react-icons/bs";

const Success = () => {
  return (
    <section className="h-screen bg-slate-100 flex justify-center pt-40">
      <div className="w-80 h-40 bg-white border rounded-xl flex flex-col justify-center items-center gap-3">
        <BsCheck2Circle className="text-xl text-sky-500" />
        <p className="text-sm">Захиалга амжилттай баталгаажлаа.</p>
      </div>
    </section>
  );
};

export default Success;
