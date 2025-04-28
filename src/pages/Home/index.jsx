// Components
import ChatSection from "../../components/ChatSection";
import Header from "../../components/Header";
import TeamSection from "../../components/TeamSection";
import HeroSection from "../../components/HeroSection";
import BrandSection from "../../components/BrandSection";
import FeaturesSection from "../../components/FeaturesSection";

import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <BrandSection />
      <TeamSection />
      <FeaturesSection />
      <ChatSection />
      <Footer />
    </>
  );
}
