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
            WORKS SEAMLESSLY WITH ARDUINO IDE • 100% FREE • INSTANT ACCESS
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your AI-Powered Arduino Coding Assistant.
            <br />
            <span className="text-gradient">Code Faster. Debug Smarter. Build Better.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Arduino Assistant Coding integrates directly with Arduino IDE to instantly fix bugs, optimize code, and provide expert explanations — helping thousands of developers from hobbyists to professionals accelerate their projects.
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
          Why Arduino Developers <span className="text-gradient">Choose It</span>
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Fully compatible with Arduino IDE — works alongside your existing workflow without disrupting your development process
        </p>
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
          Join 5,000+ Arduino developers worldwide who've accelerated their projects with AI-powered assistance
        </p>
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
            price="$10"
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
          />
        </div>
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>✓ Windows Compatible • ✓ Works with Arduino IDE • ✓ Instant Download • ✓ Internet Connection Required</p>
          <p className="mt-2">Created by IOT4YOU2 • Trusted by developers worldwide</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          What <span className="text-gradient">Makers Say</span>
        </h2>
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
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 shadow-[var(--shadow-elevated)] text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Every Arduino Developer Deserves an AI Assistant
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Arduino Assistant Coding isn't about replacing your skills — it's about amplifying them. Debug faster, learn deeper, and build production-ready projects with confidence. Works seamlessly with Arduino IDE.
          </p>
          <Button
            onClick={handleDownload}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-10 py-7 text-xl font-bold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Download Arduino Assistant Coding — Free Forever
          </Button>
          <p className="text-sm mt-6 opacity-75">
            Quick email registration • Arduino IDE compatible • Internet connection required • Created by IOT4YOU2
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Arduino Assistant Coding</h3>
            <p className="text-sm text-muted-foreground">Created by IOT4YOU2 • Compatible with Arduino IDE</p>
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
