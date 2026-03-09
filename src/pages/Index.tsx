import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QualitySection from "@/components/QualitySection";
import BlendsSection from "@/components/BlendsSection";
import StorySection from "@/components/StorySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <QualitySection />
      <BlendsSection />
      <StorySection />
      <Footer />
    </div>
  );
};

export default Index;
