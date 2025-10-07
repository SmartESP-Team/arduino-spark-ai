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
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { MessageCircle, Star } from "lucide-react";
import screenshotComponents from "@/assets/screenshot-components-browser.png";
import screenshotAI from "@/assets/screenshot-ai-assistant.png";
import screenshotAnalyzer from "@/assets/screenshot-code-analyzer.png";

export default function Index() {
  const { t } = useLanguage();
  const downloadUrl = "https://github.com/SmartESP-Team/Site_de_smart_ESP/releases/download/v1.0/arduino-ide-hepler.IOT4YOU2.exe";
  const proDownloadUrl = "https://github.com/SmartESP-Team/Site_de_smart_ESP/releases/download/v1.0/arduino-ide-hepler_Pro.IOT4YOU2.exe";
  const tutorialUrl = "https://www.youtube.com/watch?v=010Wn18qU7o";
  const [showTesterDialog, setShowTesterDialog] = useState(false);
  const [testerId, setTesterId] = useState("");

  // Valid tester IDs
  const validTesterIds = ["TESTER-2025-0e01", "TESTER-2025-0za02", "TESTER-2025-0a03", "TESTER-2025-0po04", "TESTER-2025-00dd5", "TESTER-2025-00ee6", "TESTER-2025-00sq7", "TESTER-2025-00bv8", "TESTER-2025-00vb9", "TESTER-2025-0dx10", "TESTER-2025-01xs1", "TESTER-2025-01aw2", "TESTER-2025-01oo3", "TESTER-2025-0az14", "TESTER-2025-01az5"];
  const handleDownload = () => {
    window.open(downloadUrl, "_blank");
  };
  const handleTutorial = () => {
    window.open(tutorialUrl, "_blank");
  };
  const handleTesterIdSubmit = () => {
    if (validTesterIds.includes(testerId.trim())) {
      toast.success(t.dialog.validSuccess);
      window.open(proDownloadUrl, "_blank");
      setShowTesterDialog(false);
      setTesterId("");
    } else {
      toast.error(t.dialog.invalidError);
    }
  };
  return <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Community Action Bar - Sticky at top */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-primary/30 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-sm font-semibold text-foreground">
            🚀 {t.topBar.join} <span className="text-primary">5,000+</span> {t.topBar.developers}
          </div>
          <div className="flex gap-3">
            <LanguageSwitcher />
            <Button onClick={() => window.open('https://discord.gg/your-discord-invite', '_blank')} variant="outline" size="sm" className="glass-effect border-primary/50 hover:bg-primary/20 hover:border-primary font-semibold">
              <MessageCircle className="w-4 h-4 mr-2" />
              {t.topBar.joinDiscord}
            </Button>
            <Button onClick={() => window.open('https://www.trustpilot.com/review/arduino-ide-ai.vercel.app', '_blank')} size="sm" className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 font-semibold shadow-lg">
              <Star className="w-4 h-4 mr-2" />
              {t.topBar.leaveReview}
            </Button>
          </div>
        </div>
      </div>

      {/* Futuristic Glass Mesh Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0" style={{
        background: 'var(--gradient-mesh)'
      }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        
        {/* Animated orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{
        animationDelay: "2s"
      }} />
        <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-accent/15 rounded-full blur-3xl animate-float" style={{
        animationDelay: "4s"
      }} />
        
        {/* Grid overlay for depth */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(hsl(220 20% 10%) 1px, transparent 1px), linear-gradient(90deg, hsl(220 20% 10%) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 glass-effect px-6 py-3 rounded-full text-sm font-bold mb-8 animate-glow">
            <span className="text-accent">●</span>
            <span className="text-foreground">{t.hero.badge}</span>
            <span className="text-accent">●</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">{t.hero.title1}</span>
            <br />
            <span className="text-gradient">{t.hero.title2}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto mb-8 leading-relaxed">
            <span className="font-semibold text-foreground">{t.hero.subtitle}</span> {t.hero.subtitleCont} <span className="text-primary font-semibold">{t.hero.learnFaster}</span>, <span className="text-secondary font-semibold">{t.hero.buildSmarter}</span>, and <span className="text-accent font-semibold">{t.hero.growContinuously}</span>{t.hero.subtitleEnd}
          </p>
          
          <div className="inline-block glass-card px-6 py-3 rounded-2xl mb-12">
            <p className="text-sm font-semibold text-foreground">
              {t.hero.features}
            </p>
          </div>
        </div>

        {/* Code Editor Simulation */}
        <div className="mb-12 animate-fade-in" style={{
        animationDelay: "200ms"
      }}>
          <CodeEditor />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{
        animationDelay: "400ms"
      }}>
          <Button onClick={handleDownload} size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-bold rounded-xl shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-elevated)] hover:scale-105 transition-all duration-300">
            {t.hero.downloadBtn}
          </Button>
          <Button onClick={handleTutorial} size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg font-bold rounded-xl shadow-lg transition-all duration-300">
            {t.hero.tutorialBtn}
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">{t.features.title1}</span> <span className="text-gradient">{t.features.title2}</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            {t.features.subtitle} <span className="font-semibold text-primary">{t.features.accelerates}</span>{t.features.helping} <span className="font-semibold text-accent">{t.features.stayRelevant}</span>{t.features.future}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.items.map((item, index) => (
            <FeatureCard key={index} emoji={['🔌', '🧠', '⚡', '📚', '🎯', '📈', '📋', '🔑', '🌐'][index]} title={item.title} description={item.description} />
          ))}
        </div>
      </section>

      {/* How It Works - Screenshots Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">See It</span> <span className="text-gradient">In Action</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">Real screenshots from Arduino Assistant Coding. This is exactly what you'll experience—AI-powered analysis, component browsing, and intelligent debugging built right into your workflow. </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-3xl group">
              <div className="mb-6 overflow-hidden rounded-xl border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-300">
                <img src={screenshotComponents} alt="Arduino IDE Components Browser showing XBee modules and servo motors with detailed specifications" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Smart Component Browser</h3>
              <p className="text-foreground/70 leading-relaxed">Browse components with detailed specs, voltage info, and instant integration guides—all within your Arduino IDE.</p>
            </div>

            <div className="glass-card p-6 rounded-3xl group">
              <div className="mb-6 overflow-hidden rounded-xl border-2 border-secondary/30 group-hover:border-secondary/60 transition-all duration-300">
                <img src={screenshotAI} alt="Arduino AI Assistant panel showing selected components and deep analysis functionality" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">AI-Powered Analysis</h3>
              <p className="text-foreground/70 leading-relaxed">Select components and get instant AI analysis with context-aware instructions and optimization suggestions.</p>
            </div>

            <div className="glass-card p-6 rounded-3xl group">
              <div className="mb-6 overflow-hidden rounded-xl border-2 border-accent/30 group-hover:border-accent/60 transition-all duration-300">
                <img src={screenshotAnalyzer} alt="Arduino Code Analyzer interface showing real-time debugging and intelligent code analysis" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500" loading="lazy" />
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
            <span className="text-gradient">{t.video.title}</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">{t.video.subtitle}</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)] p-2">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <YouTubeFacade videoId="010Wn18qU7o" title="Arduino IDE Helper Tutorial - Learn how to use the AI-powered assistant" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">{t.pricing.title1}</span> <span className="text-gradient">{t.pricing.title2}</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            {t.pricing.subtitle} <span className="font-semibold text-primary">5,000+ {t.pricing.subtitle2}</span>{t.pricing.subtitle3} <span className="font-semibold text-accent">{t.pricing.subtitle4}</span>{t.pricing.subtitle5}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard 
            title={t.pricing.free.title} 
            price={t.pricing.free.price} 
            features={t.pricing.free.features} 
            buttonText={t.pricing.free.button} 
            buttonAction={handleDownload} 
            isPrimary={true} 
          />
          <PricingCard 
            title={t.pricing.premium.title} 
            price={t.pricing.premium.price} 
            features={t.pricing.premium.features} 
            buttonText={t.pricing.premium.button} 
            buttonAction={() => {}} 
            isSoldOut={true} 
            secondaryButtonText={t.pricing.premium.secondaryButton} 
            secondaryButtonAction={() => setShowTesterDialog(true)} 
          />
        </div>
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>{t.pricing.footer1}</p>
          <p className="mt-2">{t.pricing.footer2}</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">{t.testimonials.title1}</span> <span className="text-gradient">{t.testimonials.title2}</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            {t.testimonials.subtitle} <span className="font-semibold text-primary">{t.testimonials.levelingUp}</span>{t.testimonials.subtitle2}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.testimonials.items.map((item, index) => (
            <TestimonialCard key={index} quote={item.quote} author={item.author} role={item.role} />
          ))}
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
              {t.finalCta.badge}
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              {t.finalCta.title1}<br />
              <span className="text-gradient">{t.finalCta.title2}</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-10 text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              {t.finalCta.subtitle} <span className="font-semibold text-primary">{t.finalCta.keepPace}</span>, <span className="font-semibold text-secondary">{t.finalCta.learnContinuously}</span>, and <span className="font-semibold text-accent">{t.finalCta.buildConfidently}</span>{t.finalCta.subtitleEnd}
            </p>
            
            <Button onClick={handleDownload} size="lg" className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 px-12 py-8 text-xl font-bold rounded-2xl shadow-[var(--shadow-glow)] hover:scale-105 transition-all duration-300">
              {t.finalCta.button}
            </Button>
            
            <p className="text-sm mt-8 text-muted-foreground">
              {t.finalCta.footer}
            </p>
          </div>
        </div>
      </section>

      {/* Tester ID Dialog */}
      <Dialog open={showTesterDialog} onOpenChange={setShowTesterDialog}>
        <DialogContent className="bg-background border border-border shadow-xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-foreground">{t.dialog.title}</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {t.dialog.description}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <Input type="text" placeholder={t.dialog.placeholder} value={testerId} onChange={e => setTesterId(e.target.value)} className="bg-background border-input focus-visible:ring-ring" onKeyDown={e => {
            if (e.key === "Enter") {
              handleTesterIdSubmit();
            }
          }} />
            <div className="flex gap-3">
              <Button onClick={handleTesterIdSubmit} className="flex-1 bg-primary hover:bg-primary/90 text-white">
                {t.dialog.verify}
              </Button>
              <Button onClick={() => {
              setShowTesterDialog(false);
              setTesterId("");
            }} variant="outline" className="flex-1">
                {t.dialog.cancel}
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
              <h3 className="text-2xl font-bold mb-2 text-foreground">{t.footer.title}</h3>
              <p className="text-sm text-foreground/70">{t.footer.subtitle}</p>
              <p className="text-xs text-foreground/60 mt-1">{t.footer.created}</p>
            </div>
            <div className="flex gap-6">
              <button onClick={handleTutorial} className="text-foreground/70 hover:text-primary transition-colors font-medium">
                {t.footer.tutorial}
              </button>
              <button onClick={handleDownload} className="text-foreground/70 hover:text-primary transition-colors font-medium">
                {t.footer.download}
              </button>
            </div>
          </div>
          <div className="text-center mt-8 pt-6 border-t border-border/30">
            <p className="text-sm text-foreground/60">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>;
}
