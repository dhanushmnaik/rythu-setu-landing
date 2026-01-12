import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Phone, ArrowRight, MessageCircle } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "login" | "signup";
  onModeChange: (mode: "login" | "signup") => void;
}

const AuthModal = ({ isOpen, onClose, mode, onModeChange }: AuthModalProps) => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"phone" | "otp">("phone");

  if (!isOpen) return null;

  const handleSubmitPhone = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 10) {
      setStep("otp");
    }
  };

  const handleSubmitOtp = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle OTP verification - ready for backend integration
    console.log("Verify OTP:", otp);
    onClose();
    setStep("phone");
    setPhone("");
    setOtp("");
  };

  const handleBack = () => {
    setStep("phone");
    setOtp("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-card rounded-2xl shadow-xl animate-scale-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {mode === "login" ? "Welcome Back" : "Get Started"}
            </h2>
            <p className="text-muted-foreground">
              {mode === "login" 
                ? "Login with your phone number" 
                : "Create your Rythu Setu account"}
            </p>
          </div>

          {step === "phone" ? (
            <form onSubmit={handleSubmitPhone} className="space-y-4">
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  className="pl-12 h-14 text-lg rounded-xl"
                  required
                />
              </div>

              <Button 
                type="submit" 
                variant="default" 
                size="lg" 
                className="w-full"
                disabled={phone.length < 10}
              >
                Continue
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          ) : (
            <form onSubmit={handleSubmitOtp} className="space-y-4">
              <p className="text-sm text-muted-foreground text-center mb-4">
                Enter the 6-digit code sent to +91 {phone}
              </p>
              
              <Input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                className="h-14 text-lg text-center tracking-widest rounded-xl"
                maxLength={6}
                required
              />

              <Button 
                type="submit" 
                variant="default" 
                size="lg" 
                className="w-full"
                disabled={otp.length < 6}
              >
                Verify OTP
              </Button>

              <button
                type="button"
                onClick={handleBack}
                className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back to phone number
              </button>
            </form>
          )}

          {/* Toggle mode */}
          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              {mode === "login" ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => onModeChange(mode === "login" ? "signup" : "login")}
                className="ml-1 text-primary font-semibold hover:underline"
              >
                {mode === "login" ? "Sign Up" : "Login"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
