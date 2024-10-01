import React from "react";

const productCards = [
  {
    photo: "",
    title: "The Prompt Magazine",
    price: "120,000",
  },
  {
    photo: "",
    title: "The Prompt Magazine",
    price: "120,000",
  },
  {
    photo: "",
    title: "The Prompt Magazine",
    price: "120,000",
  },
  {
    photo: "",
    title: "The Prompt Magazine",
    price: "120,000",
  },
];

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
        {productCards.map((card) => (
          <div className="flex flex-col">
            <img
              src=""
              alt=""
              className="w-[250px] h-[300px] border rounded-lg"
            />
            <h4 className="font-normal text-primary">{card.title}</h4>
            <p className="font-bold">{card.price}</p>
          </div>
        ))}
      </section>
    </>
  );
};
