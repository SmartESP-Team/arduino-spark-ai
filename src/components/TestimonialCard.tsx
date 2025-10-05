interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="glass-card rounded-2xl p-8 hover:shadow-[var(--shadow-elevated)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group">
      {/* Subtle gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      
      <div className="relative z-10">
        <div className="text-6xl text-primary/30 mb-4 font-serif leading-none">"</div>
        <p className="text-foreground/90 italic mb-6 leading-relaxed text-lg">
          {quote}
        </p>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg">
            {author[0]}
          </div>
          <div>
            <div className="font-bold text-foreground text-lg">{author}</div>
            <div className="text-sm text-foreground/60">{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
