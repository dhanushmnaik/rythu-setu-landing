import { Button } from "@/components/ui/button";
import { MessageCircle, Mic } from "lucide-react";

interface HeroSectionProps {
  onSignUpClick: () => void;
  onLoginClick: () => void;
}

const WHATSAPP_LINK = "https://wa.me/919876543210?text=Hi%20Rythu%20Setu"; // Replace with your WhatsApp number

const HeroSection = ({ onSignUpClick, onLoginClick }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden hero-gradient py-16 md:py-24 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Tagline */}
          <p className="text-primary-foreground/80 text-sm md:text-base font-medium mb-4 animate-fade-up">
            🌾 A Farmer's Voice Deserves Answers, Not Assumptions.
          </p>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Instant Farming Advice in Your Own Language
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 md:mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Get correct crop guidance, right dosage, daily weather & mandi prices – through simple voice messages on WhatsApp.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              variant="whatsapp" 
              size="lg" 
              className="text-lg"
              asChild
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg"
              onClick={onSignUpClick}
            >
              Get Started
            </Button>
          </div>

          {/* WhatsApp indicator */}
          <div className="mt-8 flex items-center justify-center gap-2 text-primary-foreground/70 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Mic className="w-5 h-5 animate-pulse-soft" />
            <span className="text-sm">Send voice message • Get text response on WhatsApp</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
