import { Search, TrendingUp, DollarSign, Zap } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Create order for any meme coin",
      description: "Browse through trending meme coins and place your order instantly"
    },
    {
      icon: TrendingUp,
      title: "Create account for any coin",
      description: "Set up your trading account with just a few taps"
    },
    {
      icon: DollarSign,
      title: "Confirm trades in one tap",
      description: "Execute trades quickly with our streamlined interface"
    },
    {
      icon: Zap,
      title: "Get alerts from the feed",
      description: "Stay updated with real-time notifications on market movements"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">How It Works</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-card-gradient rounded-2xl flex items-center justify-center border border-neon-purple/20 group-hover:border-neon-purple/40 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-neon-purple" />
                  </div>
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;