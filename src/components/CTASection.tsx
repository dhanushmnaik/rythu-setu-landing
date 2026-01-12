import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

interface CTASectionProps {
  onSignUpClick: () => void;
  onLoginClick: () => void;
}

const WHATSAPP_LINK = "https://wa.me/919876543210?text=Hi%20Rythu%20Setu"; // Replace with your WhatsApp number

const CTASection = ({ onSignUpClick, onLoginClick }: CTASectionProps) => {
  return (
    <section className="py-20 md:py-28 hero-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Start Farming with Confidence
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10">
            Join thousands of farmers who trust Rythu Setu for daily guidance
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="whatsapp" 
              size="xl" 
              className="text-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button 
              variant="hero" 
              size="xl" 
              className="text-lg"
              onClick={onSignUpClick}
            >
              Sign Up Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
