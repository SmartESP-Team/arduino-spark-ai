import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import CodeEditor from "@/components/CodeEditor";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import PricingCard from "@/components/PricingCard";
import YouTubeFacade from "@/components/YouTubeFacade";
import { MessageCircle, Star } from "lucide-react";
import screenshotComponents from "@/assets/screenshot-components-browser.png";
import screenshotAI from "@/assets/screenshot-ai-assistant.png";
import screenshotAnalyzer from "@/assets/screenshot-code-analyzer.png";

export default function Index() {
  const downloadUrl = "https://github.com/SmartESP-Team/Site_de_smart_ESP/releases/download/v1.0/arduino-ide-hepler.IOT4YOU2.exe";
  const proDownloadUrl = "https://github.com/SmartESP-Team/Site_de_smart_ESP/releases/download/v1.0/arduino-ide-hepler_Pro.IOT4YOU2.exe";
  const tutorialUrl = "https://www.youtube.com/watch?v=NITh5km9cD4";

  const [showTesterDialog, setShowTesterDialog] = useState(false);
  const [testerId, setTesterId] = useState("");

  // Valid tester IDs
  const validTesterIds = [
    "TESTER-2025-0e01",
    "TESTER-2025-0za02",
    "TESTER-2025-0a03",
    "TESTER-2025-0po04",
    "TESTER-2025-00dd5",
    "TESTER-2025-00ee6",
    "TESTER-2025-00sq7",
    "TESTER-2025-00bv8",
    "TESTER-2025-00vb9",
    "TESTER-2025-0dx10",
    "TESTER-2025-01xs1",
    "TESTER-2025-01aw2",
    "TESTER-2025-01oo3",
    "TESTER-2025-0az14",
    "TESTER-2025-01az5",
  ];

  const handleDownload = () => {
    window.open(downloadUrl, "_blank");
  };

  const handleTutorial = () => {
    window.open(tutorialUrl, "_blank");
  };

  const handleTesterIdSubmit = () => {
    if (validTesterIds.includes(testerId.trim())) {
      toast.success("Valid Tester ID! Starting download...");
      window.open(proDownloadUrl, "_blank");
      setShowTesterDialog(false);
      setTesterId("");
    } else {
      toast.error("Invalid Tester ID. Please check and try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Community Action Bar - Sticky at top */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-primary/30 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-sm font-semibold text-foreground">
            🚀 Join <span className="text-primary">5,000+</span> developers leveling up with AI
          </div>
          <div className="flex gap-3">
            <Button
              onClick={() => window.open('https://discord.gg/your-discord-invite', '_blank')}
              variant="outline"
              size="sm"
              className="glass-effect border-primary/50 hover:bg-primary/20 hover:border-primary font-semibold"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Join Discord
            </Button>
            <Button
              onClick={() => window.open('https://www.trustpilot.com/review/arduino-ide-ai.vercel.app', '_blank')}
              size="sm"
              className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 font-semibold shadow-lg"
            >
              <Star className="w-4 h-4 mr-2" />
              Leave Review
            </Button>
          </div>
        </div>
      </div>

      {/* Futuristic Glass Mesh Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0" style={{ background: 'var(--gradient-mesh)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        
        {/* Animated orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
        
        {/* Grid overlay for depth */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: 'linear-gradient(hsl(220 20% 10%) 1px, transparent 1px), linear-gradient(90deg, hsl(220 20% 10%) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} 
        />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 glass-effect px-6 py-3 rounded-full text-sm font-bold mb-8 animate-glow">
            <span className="text-accent">●</span>
            <span className="text-foreground">DON'T GET LEFT BEHIND IN THE AI REVOLUTION</span>
            <span className="text-accent">●</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Master Arduino Development</span>
            <br />
            <span className="text-gradient">With Your AI-Powered Learning Companion</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto mb-8 leading-relaxed">
            <span className="font-semibold text-foreground">Stay ahead in a fast-evolving tech world.</span> Arduino Assistant Coding doesn't just fix your code—it empowers you to <span className="text-primary font-semibold">learn faster</span>, <span className="text-secondary font-semibold">build smarter</span>, and <span className="text-accent font-semibold">grow continuously</span>. Join thousands who've unlocked their full potential.
          </p>
          
          <div className="inline-block glass-card px-6 py-3 rounded-2xl mb-12">
            <p className="text-sm font-semibold text-foreground">
              ✓ Works with Arduino IDE • ✓ Instant AI Analysis • ✓ Learn While You Code
            </p>
          </div>
        </div>

        {/* Code Editor Simulation */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <CodeEditor />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "400ms" }}>
          <Button
            onClick={handleDownload}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-bold rounded-xl shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-elevated)] hover:scale-105 transition-all duration-300"
          >
            Download Free Now
          </Button>
          <Button
            onClick={handleTutorial}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg font-bold rounded-xl shadow-lg transition-all duration-300"
          >
            Watch Tutorial
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Empower Your</span> <span className="text-gradient">Growth Journey</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            Technology moves fast—but you don't have to struggle alone. Arduino Assistant Coding <span className="font-semibold text-primary">accelerates your learning</span>, helping you adapt, evolve, and <span className="font-semibold text-accent">stay relevant</span> in the AI-powered future.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            emoji="🔌"
            title="Arduino IDE Integration"
            description="Works seamlessly with your existing Arduino IDE setup. No workflow disruption — just enhanced productivity."
          />
          <FeatureCard
            emoji="🧠"
            title="Intelligent Bug Detection"
            description="Instantly identifies syntax errors, logical issues, and optimization opportunities that save hours of debugging time."
          />
          <FeatureCard
            emoji="⚡"
            title="Real-Time Code Analysis"
            description="Get instant feedback as you code. Catch errors before compilation and understand issues immediately."
          />
          <FeatureCard
            emoji="📚"
            title="Expert-Level Explanations"
            description="Doesn't just fix — provides detailed explanations to deepen your understanding of Arduino programming concepts."
          />
          <FeatureCard
            emoji="🎯"
            title="Arduino-Specialized AI"
            description="Built specifically for Arduino by IOT4YOU2. Deep understanding of all Arduino libraries, functions, and hardware interactions."
          />
          <FeatureCard
            emoji="📈"
            title="Code Optimization Suggestions"
            description="Get recommendations to improve code efficiency, reduce memory usage, and enhance performance for production-ready projects."
          />
          <FeatureCard
            emoji="📋"
            title="Comprehensive Bug History"
            description="Track all detected issues and solutions. Learn from patterns and improve your coding skills over time."
          />
          <FeatureCard
            emoji="🔑"
            title="Flexible API Configuration"
            description="Use the included pre-configured API key or integrate your own Google Gemini key for unlimited, customized usage."
          />
          <FeatureCard
            emoji="🌐"
            title="Universal Compatibility"
            description="Helps everyone from hobbyists to professionals. Whether prototyping or building production systems, Arduino Assistant Coding scales with your needs."
          />
        </div>
      </section>

      {/* How It Works - Screenshots Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">See It</span> <span className="text-gradient">In Action</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Real screenshots from Arduino Assistant Coding. This is exactly what you'll experience—AI-powered analysis, component browsing, and intelligent debugging built right into your workflow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-3xl group">
              <div className="mb-6 overflow-hidden rounded-xl border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-300">
                <img 
                  src={screenshotComponents} 
                  alt="Arduino IDE Components Browser showing XBee modules and servo motors with detailed specifications"
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Smart Component Browser</h3>
              <p className="text-foreground/70 leading-relaxed">Browse components with detailed specs, voltage info, and instant integration guides—all within your Arduino IDE.</p>
            </div>

            <div className="glass-card p-6 rounded-3xl group">
              <div className="mb-6 overflow-hidden rounded-xl border-2 border-secondary/30 group-hover:border-secondary/60 transition-all duration-300">
                <img 
                  src={screenshotAI} 
                  alt="Arduino AI Assistant panel showing selected components and deep analysis functionality"
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">AI-Powered Analysis</h3>
              <p className="text-foreground/70 leading-relaxed">Select components and get instant AI analysis with context-aware instructions and optimization suggestions.</p>
            </div>

            <div className="glass-card p-6 rounded-3xl group">
              <div className="mb-6 overflow-hidden rounded-xl border-2 border-accent/30 group-hover:border-accent/60 transition-all duration-300">
                <img 
                  src={screenshotAnalyzer} 
                  alt="Arduino Code Analyzer interface showing real-time debugging and intelligent code analysis"
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Real-Time Debugging</h3>
              <p className="text-foreground/70 leading-relaxed">Get instant bug detection, smart solutions, and code quality improvements as you develop your Arduino projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See <span className="text-gradient">Real Growth</span> In Action
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Watch how Arduino Assistant Coding transforms confusion into clarity—empowering you to learn, adapt, and thrive in the AI era.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)] p-2">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <YouTubeFacade 
                videoId="NITh5km9cD4" 
                title="Arduino IDE Helper Tutorial - Learn how to use the AI-powered assistant" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Start Your</span> <span className="text-gradient">Growth Journey</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Join <span className="font-semibold text-primary">5,000+ developers</span> who refuse to be left behind. Embrace AI-powered learning and <span className="font-semibold text-accent">unlock your full potential</span> today.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard
            title="Free Forever"
            price="$0"
            features={[
              "Full Arduino IDE integration",
              "AI-powered bug detection & fixes",
              "Real-time code analysis & optimization",
              "Expert-level explanations",
              "Comprehensive bug history tracking",
              "Pre-configured Google Gemini API key",
              "Lifetime access with no hidden fees",
              "Quick email registration",
              "Windows compatible",
              "Internet connection required",
            ]}
            buttonText="Download Free Now"
            buttonAction={handleDownload}
            isPrimary={true}
          />
          <PricingCard
            title="Premium"
            price="$2/month"
            features={[
              "Everything in Free +",
              "Priority email support",
              "Advanced code optimization algorithms",
              "Extended bug history (unlimited)",
              "Custom API key integration options",
              "Early access to new features",
              "Advanced debugging tools",
              "Code performance profiling",
            ]}
            buttonText="Sold Out"
            buttonAction={() => {}}
            isSoldOut={true}
            secondaryButtonText="I have a Tester ID"
            secondaryButtonAction={() => setShowTesterDialog(true)}
          />
        </div>
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>✓ Windows Compatible • ✓ Works with Arduino IDE • ✓ Instant Download • ✓ Internet Connection Required</p>
          <p className="mt-2">Created by IOT4YOU2 • Trusted by developers worldwide</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Real Stories,</span> <span className="text-gradient">Real Growth</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Discover how developers are staying ahead and <span className="font-semibold text-primary">leveling up their skills</span> with AI-powered learning.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <TestimonialCard
            quote="As a professional IoT developer, this tool has cut my debugging time in half. The Arduino IDE integration is seamless and the AI explanations are spot-on."
            author="Alex M."
            role="IoT Solutions Architect"
          />
          <TestimonialCard
            quote="Game-changing for my engineering projects. It doesn't just fix errors — it teaches me better coding practices. My professors are impressed with my code quality now."
            author="Sarah K."
            role="Engineering Student"
          />
          <TestimonialCard
            quote="I've been coding Arduino for 5 years and wish I had this from day one. It catches issues I would have missed and optimizes my code automatically. Essential tool for any serious Arduino developer."
            author="Mike T."
            role="Robotics Engineer"
          />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 py-32">
        <div className="max-w-5xl mx-auto text-center glass-hero rounded-[2rem] p-12 md:p-16 relative overflow-hidden">
          {/* Background glow effect */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="inline-block glass-effect px-6 py-2 rounded-full text-sm font-bold mb-6 text-accent">
              THE FUTURE WAITS FOR NO ONE
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Don't Get Left Behind.<br />
              <span className="text-gradient">Start Growing Today.</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-10 text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Technology evolves rapidly—AI is here to help you <span className="font-semibold text-primary">keep pace</span>, <span className="font-semibold text-secondary">learn continuously</span>, and <span className="font-semibold text-accent">build confidently</span>. Arduino Assistant Coding amplifies your potential, so you stay ahead in an AI-driven world.
            </p>
            
            <Button
              onClick={handleDownload}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 px-12 py-8 text-xl font-bold rounded-2xl shadow-[var(--shadow-glow)] hover:scale-105 transition-all duration-300"
            >
              Download Free Now — Unlock Your Potential
            </Button>
            
            <p className="text-sm mt-8 text-muted-foreground">
              ✓ No credit card • ✓ Lifetime access • ✓ Arduino IDE compatible • ✓ Join 5,000+ developers
            </p>
          </div>
        </div>
      </section>

      {/* Tester ID Dialog */}
      <Dialog open={showTesterDialog} onOpenChange={setShowTesterDialog}>
        <DialogContent className="glass-card border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground">Enter Tester ID</DialogTitle>
            <DialogDescription className="text-foreground/70">
              Enter your valid tester ID to download the Premium version
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <Input
              type="text"
              placeholder="TESTER-2025-XXX"
              value={testerId}
              onChange={(e) => setTesterId(e.target.value)}
              className="glass-effect border-primary/30 focus:border-primary"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleTesterIdSubmit();
                }
              }}
            />
            <div className="flex gap-3">
              <Button
                onClick={handleTesterIdSubmit}
                className="flex-1 bg-primary hover:bg-primary/90 text-white"
              >
                Verify & Download
              </Button>
              <Button
                onClick={() => {
                  setShowTesterDialog(false);
                  setTesterId("");
                }}
                variant="outline"
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-border/50">
        <div className="glass-effect rounded-2xl p-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 text-foreground">Arduino Assistant Coding</h3>
              <p className="text-sm text-foreground/70">Empowering developers to stay ahead in the AI revolution</p>
              <p className="text-xs text-foreground/60 mt-1">Created by IOT4YOU2 • Compatible with Arduino IDE</p>
            </div>
            <div className="flex gap-6">
              <button onClick={handleTutorial} className="text-foreground/70 hover:text-primary transition-colors font-medium">
                Tutorial
              </button>
              <button onClick={handleDownload} className="text-foreground/70 hover:text-primary transition-colors font-medium">
                Download
              </button>
            </div>
          </div>
          <div className="text-center mt-8 pt-6 border-t border-border/30">
            <p className="text-sm text-foreground/60">© 2025 IOT4YOU2. All rights reserved. • Making technology accessible to everyone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
