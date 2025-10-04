interface FeatureCardProps {
  emoji: string;
  title: string;
  description: string;
}

export default function FeatureCard({ emoji, title, description }: FeatureCardProps) {
  return (
    <div className="group relative bg-card glass-effect rounded-xl p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 border">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {emoji}
      </div>
      <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
    </div>
  );
}
