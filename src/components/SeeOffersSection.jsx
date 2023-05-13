import image4 from "../assets/image4.png";
import Button from "./common/Button";

const SeeOffersSection = () => {
  return (
    <div className="p-8 bg-color-1 flex flex-col md:flex-row md:items-center md:p-14 md:gap-x-20">
      <div className="flex flex-col items-start gap-y-5">
        <h1 className="text-4xl md:text-6xl font-bold font-color-2">
          See our Offers
        </h1>
        <p className="font-color-2 md:text-xl font-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </p>
        <Button text={"see offers"} flag={true} />
      </div>
      <img src={image4} alt="" className="w-full md:w-2/5 object-cover mb-5" />
    </div>
  );
};

export default SeeOffersSection;
