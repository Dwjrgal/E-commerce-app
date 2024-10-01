export const Hero = () => {
    return (
      <section
        style={{
          backgroundImage: `url("/img/Logo/slider_img.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "60vh",
          position: "relative",
        }}
      >
        <div className="absolute bottom-5 left-28">
          <h1 className="text-md font-normal">Wildflower Hoodie</h1>
          <h1 className="font-bold text-3xl">120’000₮</h1>
        </div>
      </section>
    );
  };
  