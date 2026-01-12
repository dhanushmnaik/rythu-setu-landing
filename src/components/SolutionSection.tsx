import { Mic2, Wheat, Clock, CloudSun, MessageSquareText } from "lucide-react";

const solutions = [
  {
    icon: Mic2,
    title: "Voice Input",
    description: "Speak your query in your language",
  },
  {
    icon: MessageSquareText,
    title: "Text Responses",
    description: "Get clear text guidance on WhatsApp",
  },
  {
    icon: Wheat,
    title: "Local Language",
    description: "Telugu, Tamil, Kannada & more",
  },
  {
    icon: Clock,
    title: "Right Input, Right Time",
    description: "Precise dosage recommendations",
  },
  {
    icon: CloudSun,
    title: "Daily Alerts",
    description: "Weather & mandi price updates",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-16 md:py-20 nature-gradient">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How Rythu Setu Helps
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simple, voice-first solutions designed for busy farmers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card text-center"
            >
              <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                <solution.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {solution.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
