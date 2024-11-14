import Link from "next/link";

export const AddressInfo = () => {
  return (
    <section className="bg-white border rounded-xl h-[550px] py-6 px-6">
      <h3 className="text-md font-semibold mb-6">
        2.Хүргэлтийн мэдээлэл оруулах
      </h3>
      <main className="flex flex-col gap-4 font-semibold text-xs">
        <div>
          {" "}
          <p>Овог:</p>
          <input
            type="text"
            className="h-6 w-[600px] border rounded-full pl-2 text-xs mt-2"
            name="lastname"
          />{" "}
        </div>
        <div>
          {" "}
          <p>Нэр:</p>
          <input
            type="text"
            className="h-6 w-[600px] border rounded-full pl-2 text-xs mt-2"
            name="lastname"
          />{" "}
        </div>
        <div>
          {" "}
          <p>Утасны дугаар:</p>
          <input
            type="text"
            className="h-6 w-[600px] border rounded-full pl-2 text-xs mt-2"
            name="lastname"
          />{" "}
        </div>
        <div>
          {" "}
          <p>Хаяг:</p>
          <input
            type="text"
            className="h-20 w-[600px] border rounded-xl pl-2 text-xs mt-2"
            name="lastname"
          />{" "}
        </div>
        <div>
          {" "}
          <p>Нэмэлт мэдээлэл</p>
          <input
            type="text"
            className="h-12 w-[600px] border rounded-xl pl-2 text-xs mt-2"
            name="lastname"
          />
          <p className="text-xs text-gray-500 font-normal">
            Хүргэлттэй холбоотой нэмэлт мэдээлэл үлдээгээрэй
          </p>
        </div>
        <div className="flex justify-between">
          <Link href="./cart">
            <button className="w-20 h-6 border rounded-xl">Буцах</button>
          </Link>
          <Link href="./pay">
            <button className="w-32 h-6 border rounded-xl bg-blue-700 text-white">
              Төлбөр төлөх
            </button>
          </Link>
        </div>
      </main>
    </section>
  );
};
