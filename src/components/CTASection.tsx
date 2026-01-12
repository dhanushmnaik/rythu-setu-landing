import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

interface CTASectionProps {
  onSignUpClick: () => void;
  onLoginClick: () => void;
}

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
              variant="hero" 
              size="xl" 
              className="text-lg"
              onClick={onSignUpClick}
            >
              <MessageCircle className="w-6 h-6" />
              Sign Up Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground text-lg"
              onClick={onLoginClick}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
