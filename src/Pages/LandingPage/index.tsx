import {FC} from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Portofolio from "../../components/Portofolio";

const LandingPage: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Portofolio />
    </>
  );
}

export default LandingPage;