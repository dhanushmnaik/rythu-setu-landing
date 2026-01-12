import { IndianRupee, Leaf, TrendingUp, Smartphone } from "lucide-react";

const values = [
  {
    icon: IndianRupee,
    title: "Save ₹6,000–₹12,000",
    subtitle: "per acre per season",
    description: "Reduce wasteful spending on wrong inputs",
  },
  {
    icon: Leaf,
    title: "Less Chemical Waste",
    subtitle: "Protect your soil",
    description: "Right dosage means healthier crops and land",
  },
  {
    icon: TrendingUp,
    title: "Better Yield",
    subtitle: "Improved income",
    description: "Timely advice leads to better harvests",
  },
  {
    icon: Smartphone,
    title: "WhatsApp Access",
    subtitle: "No new app to learn",
    description: "Use what you already know and trust",
  },
];

const ValueSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Farmers Trust Rythu Setu
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real benefits that make a real difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex items-start gap-5 p-6 bg-card rounded-2xl border border-border hover:shadow-card transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm font-medium text-primary mb-1">
                  {value.subtitle}
                </p>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
