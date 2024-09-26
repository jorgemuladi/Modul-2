import { FC } from "react";
import HeroImg from "../../assets/hero-img.png";
// import OverlayMenu from "./components/OverlayMenu";
import './styles.css';

const Index: FC = () => {
  return (
    <div className="hero">
      {/*<OverlayMenu />*/}
      <img src={HeroImg} alt="hero" className="hero-image"/>
    </div>
  );
}

export default Index;