interface FeatureCardProps {
  emoji: string;
  title: string;
  description: string;
}

export default function FeatureCard({ emoji, title, description }: FeatureCardProps) {
  return (
    <div className="group relative glass-card rounded-2xl p-8 hover:shadow-[var(--shadow-elevated)] transition-all duration-500 hover:-translate-y-3 overflow-hidden">
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      
      <div className="relative z-10">
        <div className="text-5xl mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
          {emoji}
        </div>
        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-foreground/70 leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}
