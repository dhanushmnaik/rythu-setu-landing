import { Quote } from "lucide-react";

const FounderSection = () => {
  return (
    <section className="py-16 md:py-20 nature-gradient">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border relative">
            {/* Quote icon */}
            <div className="absolute -top-4 left-8 w-12 h-12 hero-gradient rounded-xl flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary-foreground" />
            </div>

            <div className="pt-4">
              <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8">
                "I didn't just study farming – I grew up with it. As a farmer's daughter, I've seen the confusion, fear, and loss. That's why I'm building Rythu Setu."
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full hero-gradient flex items-center justify-center">
                  <span className="text-2xl">👩‍🌾</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Founder's Story</p>
                  <p className="text-sm text-muted-foreground">Rythu Setu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
