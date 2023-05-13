import image2 from "../assets/image2.png";
import Button from "./common/Button";

const AboutSection = () => {
  return (
    <div className="p-8 bg-color-2 flex flex-col md:flex-row md:items-center md:p-14 md:gap-x-20">
      <img src={image2} alt="" className="w-full md:w-2/5 object-cover mb-5" />
      <div className="flex flex-col items-start gap-y-5">
        <h1 className="text-4xl md:text-6xl font-bold font-color-1">
          About Mariachi
        </h1>
        <p className="font-color-1 md:text-xl font-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </p>
        <Button text={"tell me more"} flag={false} />
      </div>
    </div>
  );
};

export default AboutSection;
