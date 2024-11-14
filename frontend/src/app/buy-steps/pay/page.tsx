import Image from "next/image";
import React from "react";

const Pay = () => {
  return (
    <section className="flex justify-center items-center bg-slate-100 h-screen">
      <div className="w-[500px] h-[400px] bg-white my-20 rounded-xl">
        <h3 className="font-semibold ml-3 mt-4"> 3. Төлбөр төлөлт</h3>
        <div className="flex flex-col items-center my-5">
          <span className="bg-gray-100 border rounded-xl w-14 text-center text-xs">
            14:50
          </span>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
            alt="pay"
            width={36}
            height={36}
            className="w-36 h-36"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="text-xs">Төлөх боломжтой банкууд:</p>
          <Image src="../img/Logo/Banks.png" alt="iam" width={400} className="w-[400px]" />
        </div>
      </div>
    </section>
  );
};

export default Pay;
