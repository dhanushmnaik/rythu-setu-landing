import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ValueSection from "@/components/ValueSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyNowSection from "@/components/WhyNowSection";
import FounderSection from "@/components/FounderSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";

const Index = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup");

  const handleLoginClick = () => {
    setAuthMode("login");
    setAuthModalOpen(true);
  };

  const handleSignUpClick = () => {
    setAuthMode("signup");
    setAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onLoginClick={handleLoginClick} 
        onSignUpClick={handleSignUpClick} 
      />
      
      <main>
        <HeroSection 
          onSignUpClick={handleSignUpClick}
          onLoginClick={handleLoginClick}
        />
        <ProblemSection />
        <SolutionSection />
        <ValueSection />
        <HowItWorksSection />
        <WhyNowSection />
        <FounderSection />
        <CTASection 
          onSignUpClick={handleSignUpClick}
          onLoginClick={handleLoginClick}
        />
      </main>

      <Footer />

      <AuthModal 
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </div>
  );
};

export default Index;
