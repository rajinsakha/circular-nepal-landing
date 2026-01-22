import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import AboutSection from "@/components/about/about";
import HeroSection from "@/components/hero/hero-section";
import JoinSection from "@/components/join/join-section";
// import PersistentSun from "@/components/sun/persistent-sun";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}
