import hero from "../assets/hero.png";
import logo from "../assets/logo.png";
import Button from "./common/Button";

const HeroSection = () => {
  return (
    <div className="hero-section relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-1/2 md:top-0 md:left-0 md:translate-x-0 md:translate-y-0 flex flex-col items-center md:items-start gap-y-6 md:px-10 md:py-10">
        <img src={logo} alt="" className="w-32 md:w-48" />
        <h1 className="text-6xl md:text-7xl font-bold font-color-2">
          Mariachi
        </h1>
        <p className="font-color-2 text-center md:text-left md:text-xl font-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          reprehenderit suscipit esse eius vitae fugit cupiditate fugiat ex, rem
          culpa.
        </p>
        <Button flag={true} text="Order Now" />
      </div>
      <img
        src={hero}
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

export default HeroSection;
