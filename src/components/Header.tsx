import { Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Listings", href: "#" },
    { label: "Members", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Pages", href: "#" },
    { label: "Contact", href: "#" }
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <div className="w-4 h-4 bg-primary-foreground rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-foreground">JustHome</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact & Account */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-warm-gray">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+88 685 88666</span>
            </div>
            
            <Button variant="ghost" size="sm" className="rounded-full">
              <User className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;