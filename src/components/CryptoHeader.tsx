import { Menu, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const CryptoHeader = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-neon-purple to-neon-pink rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold gradient-text">Memefi</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">How it Work</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Blog</a>
          </nav>

          {/* Download Button */}
          <Button className="bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 text-white hidden md:flex">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>

          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default CryptoHeader;