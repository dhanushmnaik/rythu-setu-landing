import { MessageSquare, Brain, MessageSquareText } from "lucide-react";

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
    icon: MessageSquareText,
    title: "Get Text Guidance",
    description: "Receive clear text instructions plus weather & price alerts on WhatsApp",
    color: "gold-gradient",
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border hover:shadow-card transition-all duration-300"
              >
                {/* Step number */}
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-4`}>
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <div className="flex-1">
                  <span className="inline-block text-xs font-semibold text-primary bg-secondary px-3 py-1 rounded-full mb-3">
                    Step {item.step}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
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
