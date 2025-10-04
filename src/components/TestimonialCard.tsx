interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="bg-card glass-effect rounded-xl p-8 shadow-lg hover:shadow-[var(--shadow-elevated)] transition-all duration-300 border">
      <div className="text-5xl text-primary mb-4 opacity-20">"</div>
      <p className="text-foreground italic mb-6 leading-relaxed">{quote}</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
          {author[0]}
        </div>
        <div>
          <div className="font-bold text-foreground">{author}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
        </div>
      </div>
    </div>
  );
}
