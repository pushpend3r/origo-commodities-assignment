import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";
import whatsapp from "../assets/whatsapp.png";

const Footer = () => {
  return (
    <footer className="flex flex-col px-5 py-16 bg-color-1 md:flex-row md:gap-x-10 md:px-14 md:justify-between md:py-32">
      <div className="md:w-1/2">
        <p className="font-color-2 text-2xl">Mariachi</p>
        <p className="font-color-2 text-base mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint et
          necessitatibus cumque voluptatem perferendis alias mollitia
          repudiandae veniam similique ipsa! Quod porro veritatis tempora iure
          qui molestias error vitae. Voluptatum!
        </p>
        <div className="flex gap-2 mt-5">
          <img src={fb} alt="" />
          <img src={insta} alt="" />
          <img src={twitter} alt="" />
          <img src={whatsapp} alt="" />
        </div>
      </div>
      <div>
        <p className="font-color-2 text-2xl mt-10 md:mt-0">About</p>
        <ul>
          <li className="font-color-2 text-base mt-8">History</li>
          <li className="font-color-2 text-base">Our Team</li>
          <li className="font-color-2 text-base">Brand Guidelines</li>
          <li className="font-color-2 text-base">Terms & Condition</li>
          <li className="font-color-2 text-base">Privacy Policy</li>
        </ul>
      </div>
      <div>
        <p className="font-color-2 text-2xl mt-10 md:mt-0">Services</p>
        <ul>
          <li className="font-color-2 text-base mt-8">How to Order</li>
          <li className="font-color-2 text-base">Our Product</li>
          <li className="font-color-2 text-base">Offers</li>
          <li className="font-color-2 text-base">Promo</li>
          <li className="font-color-2 text-base">Payment Method</li>
        </ul>
      </div>
      <div>
        <p className="font-color-2 text-2xl mt-10 md:mt-0">Other</p>
        <ul>
          <li className="font-color-2 text-base mt-8">Contact Us</li>
          <li className="font-color-2 text-base">Help</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
