// Components
import Chat from "../../components/Chat";
import Header from "../../components/Header";
import TeamSection from "../../components/TeamSection";
import HeroSection from "../../components/HeroSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <TeamSection />
      <Chat />
    </>
  );
}
