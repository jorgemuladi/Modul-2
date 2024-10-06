import { FC, useEffect, useState } from "react";
import HeroImage from "../../../../assets/hero-img.png";
import CTAButton from "./components/CTAButton";
import MenuOnClick from "./components/MenuOnClick";
import BurgerButton from "./components/BurgerButton";

const Index: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBurgerButton, setShowBurgerButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      if (window.scrollY > heroHeight) {
        setShowBurgerButton(true);
      } else {
        setShowBurgerButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" caret-transparent" id="hero">
      <div>
        <div className="flex justify-center bg-[#c7d0d9] w-full h-screen">
          <img src={HeroImage} alt="hero image" className="hero-image" />
        </div>
        <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="">
          {isMenuOpen ? <MenuOnClick /> : <CTAButton />}
        </div>
      </div>
      {showBurgerButton && (
        <div>
          <BurgerButton />
        </div>
      )}
    </div>
  );
};

export default Index;
