import { MessageCircle, Mic, Thermometer, Cpu } from "lucide-react";

const reasons = [
  {
    icon: MessageCircle,
    text: "Farmers already use WhatsApp daily",
  },
  {
    icon: Mic,
    text: "Voice is preferred over typing or apps",
  },
  {
    icon: Thermometer,
    text: "Climate uncertainty is increasing",
  },
  {
    icon: Cpu,
    text: "AI + voice technology is now affordable",
  },
];

const WhyNowSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Now?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            The perfect time for voice-first farming assistance
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 bg-secondary rounded-xl text-left"
              >
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-foreground font-medium">
                  {reason.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;
