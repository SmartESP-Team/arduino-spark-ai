import { Button } from "@/components/ui/button";
import CodeEditor from "@/components/CodeEditor";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import PricingCard from "@/components/PricingCard";

export default function Index() {
  const downloadUrl = "https://github.com/SmartESP-Team/Site_de_smart_ESP/releases/download/v1.0/arduino-ide-hepler.IOT4YOU2.exe";
  const tutorialUrl = "https://www.youtube.com/watch?v=NITh5km9cD4";

  const handleDownload = () => {
    window.open(downloadUrl, "_blank");
  };

  const handleTutorial = () => {
    window.open(tutorialUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Particle Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block bg-accent/10 text-accent px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-accent/20">
            100% FREE • QUICK EMAIL REGISTRATION • INSTANT ACCESS
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Stop Struggling with Arduino.
            <br />
            <span className="text-gradient">Start Building Projects.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            AI-powered assistant that fixes bugs, explains errors, and teaches you Arduino programming — so you learn faster and build with confidence.
          </p>
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
            variant="outline"
            className="px-8 py-6 text-lg font-bold rounded-xl border-2 border-primary hover:bg-primary/10 transition-all duration-300"
          >
            Watch Tutorial
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Why Beginners <span className="text-gradient">Love It</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            emoji="🧠"
            title="Intelligent Bug Detection"
            description="Instantly finds missing semicolons, typos, and syntax errors that would take hours to debug manually."
          />
          <FeatureCard
            emoji="⚡"
            title="Real-Time Analysis"
            description="Get instant feedback as you code. No more waiting for compilation errors to understand what went wrong."
          />
          <FeatureCard
            emoji="📚"
            title="Educational Explanations"
            description="Doesn't just fix — it teaches WHY. Learn proper Arduino programming while solving real problems."
          />
          <FeatureCard
            emoji="🎯"
            title="Arduino-Specialized"
            description="Unlike generic AI tools, this is built specifically for Arduino. Understands pinMode, digitalWrite, and all Arduino functions."
          />
          <FeatureCard
            emoji="📋"
            title="Bug History Tracking"
            description="Keep track of all the bugs you've fixed and learn from your patterns to become a better programmer."
          />
          <FeatureCard
            emoji="🔑"
            title="Flexible API Options"
            description="Use the included free API key or add your own Google Gemini key for unlimited usage."
          />
        </div>
      </section>

      {/* Video Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          See It <span className="text-gradient">In Action</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)] border-4 border-primary/20">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/NITh5km9cD4"
                title="Arduino IDE Helper Tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Choose Your <span className="text-gradient">Plan</span>
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Join 1,000+ makers who've already accelerated their Arduino journey
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard
            title="Free Forever"
            price="$0"
            features={[
              "Full AI-powered bug detection",
              "Real-time code analysis",
              "Educational explanations",
              "Bug history tracking",
              "Pre-configured API key included",
              "Lifetime access",
              "Quick email registration",
              "Windows compatible",
            ]}
            buttonText="Download Free Now"
            buttonAction={handleDownload}
            isPrimary={true}
          />
          <PricingCard
            title="Premium"
            price="$10"
            features={[
              "Everything in Free",
              "Priority support",
              "Advanced code suggestions",
              "Extended bug history",
              "Custom API key integration",
              "Early access to new features",
            ]}
            buttonText="Sold Out"
            buttonAction={() => {}}
            isSoldOut={true}
          />
        </div>
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>Windows Compatible • Instant Download • Internet Connection Required</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          What <span className="text-gradient">Makers Say</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <TestimonialCard
            quote="This tool saved me hours of frustration. I was ready to give up on Arduino until I found this!"
            author="Alex M."
            role="Hobby Maker"
          />
          <TestimonialCard
            quote="Perfect for beginners. It doesn't just fix errors — it teaches you why they happened. Game changer!"
            author="Sarah K."
            role="Engineering Student"
          />
          <TestimonialCard
            quote="I've been using Arduino for 6 months and this has accelerated my learning more than any tutorial."
            author="Mike T."
            role="DIY Enthusiast"
          />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 shadow-[var(--shadow-elevated)] text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The World Is Moving to AI. Learn to Use It Mindfully.
          </h2>
          <p className="text-xl mb-8 opacity-90">
            This tool isn't about copying code — it's about understanding it. Use AI to learn faster, build better, and become a confident Arduino programmer.
          </p>
          <Button
            onClick={handleDownload}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-10 py-7 text-xl font-bold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Start Learning Today — 100% Free
          </Button>
          <p className="text-sm mt-6 opacity-75">
            Simple email registration • Internet connection required • Free forever
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Arduino IDE Helper</h3>
            <p className="text-sm text-muted-foreground">by IOT4YOU2</p>
          </div>
          <div className="flex gap-6">
            <button onClick={handleTutorial} className="text-muted-foreground hover:text-primary transition-colors">
              Tutorial
            </button>
            <button onClick={handleDownload} className="text-muted-foreground hover:text-primary transition-colors">
              Download
            </button>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>© 2025 IOT4YOU2. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
