import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import GaleriaBox from "../components/GaleriaBox";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <SubNavbar />
      <Carousel />
      <GaleriaBox />
      <Footer />
    </>
  );
}
