import image3 from "../assets/image3.png";

const TacoDiscountSection = () => {
  return (
    <div className="px-10 pt-56 relative bg-color-2 flex flex-col items-center md:px-14 md:pt-32">
      <div className="absolute top-10 left-5 md:left-14">
        <p
          className="text-8xl md:text-9xl font-bold"
          style={{
            color: "rgb(230, 57, 86)",
          }}
        >
          25%
        </p>
        <p
          className="text-4xl md:text-6xl font-black uppercase"
          style={{
            color: "rgb(85, 17, 46)",
          }}
        >
          discount
        </p>
        <p
          className="text-5xl md:text-8xl font-black uppercase"
          style={{
            color: "rgb(108, 197, 172)",
          }}
        >
          on tacos!
        </p>
      </div>
      <img src={image3} alt="" className="w-full md:w-7/12 object-cover" />
    </div>
  );
};

export default TacoDiscountSection;
