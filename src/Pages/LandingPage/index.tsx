import { FC } from "react";
import Header from "../../components/Header";
import Hero from "../../Pages/LandingPage/Components/Hero";
import Portfolio from "../../components/Portofolio";
import About from "../../Pages/LandingPage/Components/About";
import Footer from "../../Pages/LandingPage/Components/Footer";
import Gallery from "../../Pages/LandingPage/Components/Gallery";

const LandingPage: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Gallery />
      <Footer />
    </>
  );
};

export default LandingPage;
