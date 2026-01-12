import { MessageSquare, Brain, Volume2, Phone } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: MessageSquare,
    title: "Send Voice Message",
    description: "Farmer sends a voice message on WhatsApp about their crop issue",
    color: "bg-whatsapp",
  },
  {
    step: 2,
    icon: Brain,
    title: "AI Understands",
    description: "Our AI understands your crop, problem, and local conditions",
    color: "hero-gradient",
  },
  {
    step: 3,
    icon: Volume2,
    title: "Get Voice Guidance",
    description: "Receive clear voice instructions plus weather & price alerts",
    color: "gold-gradient",
  },
  {
    step: 4,
    icon: Phone,
    title: "Expert Callback",
    description: "If needed, a human expert calls you for complex issues",
    color: "bg-primary",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-20 nature-gradient">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simple as sending a WhatsApp message
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((item, index) => (
              <div
                key={index}
                className="relative flex gap-4 p-6 bg-card rounded-2xl border border-border hover:shadow-card transition-all duration-300"
              >
                {/* Step number */}
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-primary bg-secondary px-2 py-1 rounded-full">
                      Step {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
