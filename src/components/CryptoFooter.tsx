import { Download, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const CryptoFooter = () => {
  return (
    <footer className="relative py-20 border-t border-neon-purple/20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent"></div>
      
      <div className="relative container mx-auto px-4">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Scroll. Discover. Trade.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't miss out on the next big meme coin. Download the app and start your crypto journey today.
          </p>
          
          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Trading</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Analytics</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neon-purple/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-neon-purple to-neon-pink rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold gradient-text">Memefi</span>
          </div>

          <p className="text-muted-foreground text-sm">
            © 2024 Memefi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CryptoFooter;