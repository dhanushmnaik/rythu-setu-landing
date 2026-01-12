import { Button } from "@/components/ui/button";
import { Sprout, Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onLoginClick: () => void;
  onSignUpClick: () => void;
}

const Header = ({ onLoginClick, onSignUpClick }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container flex h-16 md:h-20 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl hero-gradient">
            <Sprout className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-bold text-primary tracking-tight">
              RYTHU SETU
            </span>
            <span className="text-[10px] md:text-xs text-muted-foreground leading-tight hidden sm:block">
              A Voice Farmer Can Trust
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="soft" onClick={onLoginClick}>
            Login
          </Button>
          <Button variant="default" onClick={onSignUpClick}>
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-border p-4 animate-fade-in">
          <div className="flex flex-col gap-3">
            <Button variant="soft" className="w-full" onClick={onLoginClick}>
              Login
            </Button>
            <Button variant="default" className="w-full" onClick={onSignUpClick}>
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
