import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";

/**
 * SOVRA Coming Soon Landing Page
 * Design: Cyberpunk Minimalism with Luxury Tech Aesthetic
 * 
 * Key Design Elements:
 * - Deep black background (#0A0A0A) for premium exclusivity
 * - Neon green (#39FF14) accents for profit/growth indicators
 * - Electric purple (#7000FF) for tech sophistication
 * - Glassmorphic cards with blur effects
 * - Space Mono typography for headlines (tech credibility)
 * - Asymmetric layout with video hero section
 */
export default function Home() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("You're on the list! Check your email for updates.");
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated background grid */}
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(57, 255, 20, 0.1) 25%, rgba(57, 255, 20, 0.1) 26%, transparent 27%, transparent 74%, rgba(57, 255, 20, 0.1) 75%, rgba(57, 255, 20, 0.1) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(57, 255, 20, 0.1) 25%, rgba(57, 255, 20, 0.1) 26%, transparent 27%, transparent 74%, rgba(57, 255, 20, 0.1) 75%, rgba(57, 255, 20, 0.1) 76%, transparent 77%, transparent)
          `,
          backgroundSize: "50px 50px",
          animation: "grid-shift 10s linear infinite"
        }}
      />

      {/* Gradient overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-green-900/20" />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Video */}
            <div className="animate-slide-up order-2 lg:order-1">
              <div className="relative rounded-lg overflow-hidden border border-accent/30 shadow-2xl">
                {/* Video container with aspect ratio */}
                <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ paddingBottom: "56.25%" }}>
                  <video
                    src="/manus-storage/SnfpZlTD0mb0yR1D_f41e7a8c.mp4"
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  {/* Neon border glow effect */}
                  <div className="absolute inset-0 rounded-lg pointer-events-none" style={{
                    boxShadow: "inset 0 0 20px rgba(57, 255, 20, 0.2), 0 0 20px rgba(57, 255, 20, 0.1)"
                  }} />
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="animate-slide-up order-1 lg:order-2 space-y-8">
              {/* Logo/Brand */}
              <div className="space-y-2">
                <div className="inline-block">
                  <span className="text-sm font-mono text-accent tracking-widest uppercase">
                    Coming Soon
                  </span>
                </div>
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block">SOVRA</span>
                  <span className="block text-accent neon-glow">AWAITS</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-md">
                  The future of trading is here. Secure your exclusive access to the platform that's redefining digital wealth.
                </p>
              </div>

              {/* Stats/Features */}
              <div className="grid grid-cols-2 gap-4 py-6">
                <div className="glass-card p-4">
                  <div className="text-2xl font-bold text-accent">∞</div>
                  <p className="text-sm text-muted-foreground mt-2">Unlimited Potential</p>
                </div>
                <div className="glass-card p-4">
                  <div className="text-2xl font-bold text-accent">24/7</div>
                  <p className="text-sm text-muted-foreground mt-2">Always Active</p>
                </div>
              </div>

              {/* Email Signup */}
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="glass-card p-1 flex items-center gap-2 border-accent/50 focus-within:border-accent transition-colors">
                  <Mail className="w-5 h-5 text-accent ml-3 flex-shrink-0" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold py-6 text-base rounded-lg transition-all duration-200 hover:shadow-lg neon-glow"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <span className="inline-block animate-spin">⚡</span>
                      Securing Access...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Secure Your Access
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  )}
                </Button>
              </form>

              {/* Footer text */}
              <p className="text-xs text-muted-foreground">
                Be the first to experience the revolution. No spam, just exclusive updates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating accent elements */}
      <div className="fixed top-20 right-10 w-32 h-32 opacity-20 pointer-events-none">
        <img 
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663530638614/dh2yy8Vb654XqhkvWPwQCb/sovra-glow-orb-HxvkdqcFg8gpoPw96E6wjY.webp"
          alt="Glow orb"
          className="w-full h-full object-contain animate-pulse"
        />
      </div>

      <div className="fixed bottom-20 left-10 w-40 h-40 opacity-10 pointer-events-none">
        <img 
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663530638614/dh2yy8Vb654XqhkvWPwQCb/sovra-accent-pattern-HhkN6oYsZPzVUQqZ2YwiNo.webp"
          alt="Accent pattern"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
