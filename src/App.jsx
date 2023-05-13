import DontMissOurMenuSection from "./components/DontMissOurMenuSection";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import Image1 from "./assets/image1.png";
import AboutSection from "./components/AboutSection";
import TacoDiscountSection from "./components/TacoDiscountSection";
import SeeOffersSection from "./components/SeeOffersSection";
import TestimonialSection from "./components/TestimonialSection";
import LatestOffersSection from "./components/LatestOffersSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <DontMissOurMenuSection />
      <img src={Image1} alt="" className="w-full h-48 object-cover" />
      <AboutSection />
      <TacoDiscountSection />
      <SeeOffersSection />
      <TestimonialSection />
      <LatestOffersSection />
      <Footer />
    </>
  );
}

export default App;
