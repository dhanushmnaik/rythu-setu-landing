import { AlertTriangle, Skull, TrendingDown, CloudOff } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Confusing Dosage",
    description: "Wrong chemical quantities damage crops and soil",
  },
  {
    icon: Skull,
    title: "Biased Dealer Advice",
    description: "Dealers push expensive products, not the right ones",
  },
  {
    icon: TrendingDown,
    title: "No Clear Mandi Prices",
    description: "Farmers sell at low prices without market info",
  },
  {
    icon: CloudOff,
    title: "Late Weather Alerts",
    description: "Missing timely warnings means crop losses",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Problems Farmers Face
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everyday challenges that cost farmers money and peace of mind
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-destructive/30 transition-all duration-300 hover:shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
