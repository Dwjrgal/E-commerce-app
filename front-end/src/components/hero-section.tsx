import React from "react";

export const HeroSection = () => {
  return (
    <div>
      <img src="/img/Logo/slider_img.png" alt="" className="w-full h-[500px]" />
      <CategorySection />
    </div>
  );
};

export const CategorySection = () => {
  return (
    <>
      <section className="flex justify-center gap-3 mt-4">
        <div className="flex flex-col">
          <img src="" alt="" className="w-[250px] h-[300px] border rounded" />
          <h4 className="font-normal text-primary"> The Prompt Magazine</h4>
          <p className="font-bold"> 120,000</p>
        </div>
        <div className="flex flex-col">
          <img src="" alt="" className="w-[250px] h-[300px] border rounded" />
          <h4 className="font-normal text-primary"> The Prompt Magazine</h4>
          <p className="font-bold"> 120,000</p>
        </div>
        <div className="flex flex-col">
          <img src="" alt="" className="w-[250px] h-[300px] border rounded" />
          <h4 className="font-normal text-primary"> The Prompt Magazine</h4>
          <p className="font-bold"> 120,000</p>
        </div>
        <div className="flex flex-col">
          <img src="" alt="" className="w-[250px] h-[300px] border rounded" />
          <h4 className="font-normal text-primary"> The Prompt Magazine</h4>
          <p className="font-bold"> 120,000</p>
        </div>
      </section>
    </>
  );
};
