// Components
import Chat from "../../components/Chat";
import Header from "../../components/Header";
import TeamSection from "../../components/TeamSection";
import HeroSection from "../../components/HeroSection";
import BrandSection from "../../components/BrandSection";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <BrandSection />
      <TeamSection />
      <Chat />
      <Footer />
    </>
  );
}
