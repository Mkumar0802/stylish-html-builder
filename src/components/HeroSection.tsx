import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-family.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Top Button */}
        <Button variant="hero" className="mb-8">
          LET US HIRE YOUR HOME
        </Button>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
          Discover a place you'll love to live
        </h1>

        {/* Sale/Rent Toggle */}
        <div className="flex items-center justify-center mb-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-1 flex">
            <Button 
              variant="default" 
              size="sm" 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Sale
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:bg-white/10"
            >
              Rent
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <div className="relative flex">
            <Input
              type="text"
              placeholder="Enter Name, Keywords..."
              className="pr-12 h-14 text-lg bg-white text-foreground placeholder:text-muted-foreground border-0 rounded-l-lg"
            />
            <Button 
              size="lg" 
              className="h-14 px-6 rounded-l-none bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;