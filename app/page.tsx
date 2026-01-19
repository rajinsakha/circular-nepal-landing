import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import AboutSection from "@/components/about/about";
import HeroSection from "@/components/hero/hero-section";
import JoinSection from "@/components/join-section/join-section";
import ApproachSection from "@/components/approach/approach-section";
import CitySection from "@/components/city/city-section";
// import PersistentSun from "@/components/sun/persistent-sun";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Persistent sun element that follows scroll */}
      {/* <PersistentSun /> */}

      <Header />
      <main>
        <HeroSection />
        <CitySection />
        <AboutSection />
        <ApproachSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}
