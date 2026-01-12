import { Sprout } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl gold-gradient">
                <Sprout className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold text-background">
                RYTHU SETU
              </span>
            </div>
            <p className="text-background/60 max-w-sm">
              A Voice Farmer Can Trust. Instant farming advice in your language through WhatsApp.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">
                  About Rythu Setu
                </a>
              </li>
              <li>
                <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10">
          <p className="text-center text-background/40 text-sm">
            © {new Date().getFullYear()} Rythu Setu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
