import image5 from "../assets/image5.png";
import logo from "../assets/logo.png";

const TestimonialSection = () => {
  return (
    <div className="relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-3/5 flex flex-col items-center gap-y-6 p-10 z-10">
        <img src={logo} alt="" className="w-32 md:w-48" />
        <p className="font-color-2 text-bold text-center text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          reprehenderit suscipit esse eius vitae fugit cupiditate fugiat ex, rem
          culpa.
        </p>
        <p className="font-color-2 text-bold text-center text-2xl">
          Pedro Rodriguez
        </p>
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      ></div>
      <img
        src={image5}
        alt="hero-image"
        className="object-cover"
        style={{
          height: "600px",
          width: "100%",
        }}
      />
    </div>
  );
};

export default TestimonialSection;
