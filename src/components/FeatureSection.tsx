import { Button } from "@/components/ui/button";
import phoneImage from "@/assets/crypto-phone-mockup.png";

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  imageLeft?: boolean;
}

const FeatureSection = ({ 
  title, 
  subtitle, 
  description, 
  buttonText, 
  imageLeft = false 
}: FeatureSectionProps) => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${imageLeft ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Content */}
          <div className={`space-y-8 ${imageLeft ? 'lg:col-start-2' : ''}`}>
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="gradient-text">{title}</span>
                <br />
                <span className="text-foreground">{subtitle}</span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                {description}
              </p>
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 text-white px-8 py-6"
            >
              {buttonText}
            </Button>
          </div>

          {/* Phone Mockup */}
          <div className={`relative flex justify-center ${imageLeft ? 'lg:col-start-1' : ''}`}>
            <div className="relative">
              <img 
                src={phoneImage} 
                alt="App Feature" 
                className="w-80 h-auto relative z-10"
              />
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink opacity-10 blur-3xl scale-110"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;