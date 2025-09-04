import { Download, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import phoneImage from "@/assets/crypto-phone-mockup.png";

const CryptoHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-purple via-space-blue to-dark-bg"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-16 h-16 bg-neon-purple/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-24 h-24 bg-neon-pink/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse delay-500"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 bg-card-bg rounded-full border border-neon-purple/30">
            <span className="text-sm gradient-text font-semibold">SCROLL-TRADING</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            <span className="gradient-text">Discover Viral Memecoins</span>
            <br />
            <span className="text-foreground">Before Everyone Else</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            Scroll through and discover meme coins before they explode. 
            Get early access to the next viral crypto trends.
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 text-white px-8 py-6 text-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Google Play
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white px-8 py-6 text-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              App Store
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-8">
            <div>
              <div className="text-2xl font-bold gradient-text">99K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text">$2M+</div>
              <div className="text-sm text-muted-foreground">Trading Volume</div>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text">50+</div>
              <div className="text-sm text-muted-foreground">Meme Coins</div>
            </div>
          </div>
        </div>

        {/* Right Content - Phone Mockup */}
        <div className="relative flex justify-center">
          <div className="relative">
            <img 
              src={phoneImage} 
              alt="Crypto Trading App Interface" 
              className="w-80 h-auto relative z-10"
            />
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink opacity-20 blur-3xl scale-110"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoHero;