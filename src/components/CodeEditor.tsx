import { useEffect, useState } from "react";

const buggyCode = `void setup() {
  pinMode(13, OUTPUT)  // ← Missing semicolon
}

void loop() {
  digita1Write(13, HIGH);  // ← Typo: digita1
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}`;

const fixedCode = `void setup() {
  pinMode(13, OUTPUT);  // ✓ Fixed
}

void loop() {
  digitalWrite(13, HIGH);  // ✓ Fixed
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}`;

const phases = [
  { name: "typing", duration: 3000 },
  { name: "error", duration: 2000 },
  { name: "analyzing", duration: 2000 },
  { name: "fixing", duration: 2000 },
  { name: "complete", duration: 3000 },
  { name: "pause", duration: 1000 },
];

export default function CodeEditor() {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const phase = phases[currentPhase];
    
    if (phase.name === "typing") {
      if (charIndex < buggyCode.length) {
        const timer = setTimeout(() => {
          setDisplayedCode(buggyCode.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 30);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setCurrentPhase(1);
        }, 500);
        return () => clearTimeout(timer);
      }
    } else if (phase.name === "pause") {
      const timer = setTimeout(() => {
        setCurrentPhase(0);
        setCharIndex(0);
        setDisplayedCode("");
      }, phase.duration);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentPhase((prev) => (prev + 1) % phases.length);
        if (phase.name === "fixing") {
          setDisplayedCode(fixedCode);
        }
      }, phase.duration);
      return () => clearTimeout(timer);
    }
  }, [currentPhase, charIndex]);

  const showErrors = currentPhase >= 1 && currentPhase < 4;
  const showAnalyzing = currentPhase === 2;
  const showFixed = currentPhase >= 3 && currentPhase < 5;
  const showExplanation = currentPhase === 4;

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="glass-hero rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)] border-2 border-white/20">
        {/* Menu bar */}
        <div className="glass-effect px-6 py-3 flex items-center gap-6 text-xs font-semibold text-foreground/80 border-b border-white/10">
          <span className="hover:text-primary cursor-pointer transition-colors">File</span>
          <span className="hover:text-primary cursor-pointer transition-colors">Edit</span>
          <span className="hover:text-primary cursor-pointer transition-colors">Sketch</span>
          <span className="hover:text-primary cursor-pointer transition-colors">Tools</span>
          <span className="hover:text-primary cursor-pointer transition-colors">Help</span>
        </div>

        {/* Toolbar */}
        <div className="glass-card px-6 py-3 flex items-center gap-4 border-b border-white/10">
          <button className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-primary/80 hover:scale-105 transition-all shadow-md flex items-center justify-center text-white text-xs font-bold">
            ✓
          </button>
          <button className="w-9 h-9 rounded-lg bg-gradient-to-br from-secondary to-secondary/80 hover:scale-105 transition-all shadow-md flex items-center justify-center text-white text-xs font-bold">
            →
          </button>
          <div className="h-6 w-px bg-border/30 mx-1" />
          <div className="text-xs font-medium text-foreground/70">Arduino Uno on COM3</div>
        </div>

        {/* Code area */}
        <div className="relative bg-[hsl(var(--code-bg))]/80 backdrop-blur-sm">
          <div className="flex">
            {/* Line numbers */}
            <div className="bg-black/20 px-4 py-6 text-right text-gray-400 text-sm font-mono select-none border-r border-white/5">
              {displayedCode.split("\n").map((_, i) => (
                <div key={i} className="leading-6">{i + 1}</div>
              ))}
            </div>

            {/* Code content */}
            <div className="flex-1 p-6 text-[hsl(var(--code-text))] text-sm font-mono leading-6 relative min-h-[300px]">
              <pre className="whitespace-pre">
                {displayedCode.split("\n").map((line, i) => {
                  const hasError = showErrors && (i === 1 || i === 5);
                  const isFixed = showFixed && (i === 1 || i === 5);
                  
                  return (
                    <div key={i} className="relative">
                      <span className={hasError ? "bg-red-500/20 px-1 rounded" : ""}>
                        {highlightSyntax(line)}
                      </span>
                      {hasError && (
                        <span className="text-red-400 text-xs ml-2 animate-pulse font-semibold">
                          {i === 1 ? "⚠ Missing semicolon" : "⚠ Undeclared function"}
                        </span>
                      )}
                      {isFixed && (
                        <span className="text-accent text-xs ml-2 animate-fade-in font-semibold">
                          ✓
                        </span>
                      )}
                    </div>
                  );
                })}
              </pre>

              {showAnalyzing && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-hero px-8 py-5 rounded-2xl shadow-[var(--shadow-glow)] animate-glow">
                  <div className="flex items-center gap-4">
                    <div className="w-7 h-7 border-3 border-primary border-t-transparent rounded-full animate-spin" />
                    <span className="text-foreground font-bold text-lg">AI Analyzing Code...</span>
                  </div>
                </div>
              )}

              {showExplanation && (
                <div className="absolute bottom-4 right-4 glass-card px-5 py-4 rounded-2xl shadow-xl max-w-xs animate-slide-in-right text-xs border border-accent/30">
                  <div className="font-bold mb-2 text-accent text-sm">✓ Code Fixed!</div>
                  <div className="text-foreground/80 space-y-1 leading-relaxed">
                    • Added missing semicolon after pinMode<br />
                    • Fixed typo: digita1Write → digitalWrite<br />
                    • Tip: digitalWrite controls digital pins
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Console */}
        <div className="bg-black/60 backdrop-blur-sm text-white px-6 py-4 text-xs font-mono border-t border-white/5">
          {showErrors && !showFixed && (
            <div className="text-red-400 space-y-1">
              <div>error: expected &apos;;&apos; before &apos;{`{`}&apos;  token</div>
              <div>error: &apos;digita1Write&apos; was not declared in this scope</div>
            </div>
          )}
          {showFixed && (
            <div className="text-accent font-semibold">
              ✓ Compilation successful. Upload ready.
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="glass-effect px-6 py-4 flex items-center justify-center gap-4 border-t border-white/10">
          <a
            href="https://discord.gg/Q3FW3ed2Vu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <span className="text-base">💬</span>
            Join us on Discord
          </a>
          <a
            href="https://www.trustpilot.com/review/arduino-ide-ai.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <span className="text-base">⭐</span>
            Leave a Review on Trustpilot
          </a>
        </div>
      </div>
    </div>
  );
}

function highlightSyntax(line: string): JSX.Element[] {
  const keywords = ["void", "int", "setup", "loop", "pinMode", "digitalWrite", "digita1Write", "delay", "OUTPUT", "HIGH", "LOW"];
  const result: JSX.Element[] = [];
  let remaining = line;
  let key = 0;

  while (remaining.length > 0) {
    let matched = false;

    // Check for keywords
    for (const keyword of keywords) {
      if (remaining.startsWith(keyword)) {
        const isFunction = ["pinMode", "digitalWrite", "digita1Write", "delay"].includes(keyword);
        result.push(
          <span key={key++} className={isFunction ? "text-[hsl(var(--code-function))]" : "text-[hsl(var(--code-keyword))]"}>
            {keyword}
          </span>
        );
        remaining = remaining.slice(keyword.length);
        matched = true;
        break;
      }
    }

    if (matched) continue;

    // Check for numbers
    if (/^\d+/.test(remaining)) {
      const numMatch = remaining.match(/^\d+/);
      if (numMatch) {
        result.push(<span key={key++} className="text-[hsl(var(--code-number))]">{numMatch[0]}</span>);
        remaining = remaining.slice(numMatch[0].length);
        continue;
      }
    }

    // Check for comments
    if (remaining.startsWith("//")) {
      result.push(<span key={key++} className="text-[hsl(var(--code-comment))]">{remaining}</span>);
      break;
    }

    // Default
    result.push(<span key={key++}>{remaining[0]}</span>);
    remaining = remaining.slice(1);
  }

  return result;
}
