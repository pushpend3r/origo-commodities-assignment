import Button from "./common/Button";

const DontMissOurMenuSection = () => {
  return (
    <div className="section-2 flex flex-col items-center gap-y-5 py-16 px-5 bg-color-2">
      <h1 className="text-4xl text-center md:text-6xl font-bold font-color-1">
        Don’t Miss our Menu!
      </h1>
      <p className="font-color-1 text-center md:text-xl md:w-2/3 font-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fuga
        tenetur quae minus. Consequatur, dignissimos.
      </p>
      <Button flag={false} text={"see menu"} />
    </div>
  );
};

export default DontMissOurMenuSection;
