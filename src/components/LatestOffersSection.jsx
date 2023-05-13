import Button from "./common/Button";

const LatestOffersSection = () => {
  return (
    <div className="section-2 flex flex-col items-center gap-y-5 py-28 px-5 bg-color-2">
      <h1 className="text-4xl text-center md:text-6xl font-bold font-color-1">
        Get our Latest Offers!
      </h1>
      <p className="font-color-1 text-center md:text-xl md:w-2/3 font-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fuga
        tenetur quae minus. Consequatur, dignissimos.
      </p>
      <div className="relative w-full md:max-w-screen-md">
        <input
          type="text"
          className="w-full h-12 rounded-full px-5 py-2"
          placeholder="Your Email"
        />
        <Button
          flag={false}
          text={"subscribe"}
          className="absolute top-0 right-0"
        />
      </div>
    </div>
  );
};

export default LatestOffersSection;
