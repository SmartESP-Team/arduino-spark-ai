import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonAction: () => void;
  isSoldOut?: boolean;
  isPrimary?: boolean;
  secondaryButtonText?: string;
  secondaryButtonAction?: () => void;
}

export default function PricingCard({
  title,
  price,
  features,
  buttonText,
  buttonAction,
  isSoldOut = false,
  isPrimary = false,
  secondaryButtonText,
  secondaryButtonAction,
}: PricingCardProps) {
  const { t } = useLanguage();
  
  return (
    <div
      className={`relative glass-card rounded-3xl p-10 transition-all duration-500 ${
        isPrimary
          ? "scale-105 shadow-[var(--shadow-glow)] ring-2 ring-primary/30"
          : "hover:scale-[1.02] hover:shadow-[var(--shadow-elevated)]"
      } ${isSoldOut ? "opacity-60" : ""}`}
    >
      {isSoldOut && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 glass-effect px-6 py-2 rounded-full text-sm font-bold shadow-lg text-destructive ring-2 ring-destructive/20">
          {t.pricingLabels.soldOut}
        </div>
      )}
      {isPrimary && !isSoldOut && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-2 rounded-full text-sm font-bold shadow-[var(--shadow-glow)] animate-glow">
          {t.pricingLabels.mostPopular}
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-4 text-foreground">{title}</h3>
        <div className="mb-2">
          <span className="text-6xl font-bold text-gradient">{price}</span>
        </div>
        {price === "$0" && (
          <div className="inline-block bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-semibold animate-glow">
            {t.pricingLabels.lifetimeAccess}
          </div>
        )}
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-accent text-xl flex-shrink-0 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
              ✓
            </span>
            <span className="text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="space-y-3">
        <Button
          onClick={buttonAction}
          disabled={isSoldOut}
          className={`w-full py-6 text-lg font-bold rounded-xl transition-all duration-300 ${
            isPrimary && !isSoldOut
              ? "bg-primary hover:bg-primary/90 text-white shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-elevated)] hover:scale-105"
              : isSoldOut
              ? "bg-muted text-muted-foreground cursor-not-allowed"
              : "bg-secondary hover:bg-secondary/90 text-white"
          }`}
        >
          {buttonText}
        </Button>
        
        {secondaryButtonText && secondaryButtonAction && (
          <Button
            onClick={secondaryButtonAction}
            variant="outline"
            className="w-full py-4 text-sm font-semibold rounded-xl border-2 border-primary/30 hover:border-primary bg-background/50 hover:bg-background/80 text-foreground transition-all duration-300"
          >
            {secondaryButtonText}
          </Button>
        )}
      </div>
    </div>
  );
}
