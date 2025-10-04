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
      <div className="bg-[hsl(var(--code-bg))] rounded-lg overflow-hidden shadow-2xl border border-gray-700">
        {/* Menu bar */}
        <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-4 text-xs text-gray-400 border-b border-gray-700">
          <span className="hover:text-white cursor-pointer transition-colors">File</span>
          <span className="hover:text-white cursor-pointer transition-colors">Edit</span>
          <span className="hover:text-white cursor-pointer transition-colors">Sketch</span>
          <span className="hover:text-white cursor-pointer transition-colors">Tools</span>
          <span className="hover:text-white cursor-pointer transition-colors">Help</span>
        </div>

        {/* Toolbar */}
        <div className="bg-[#393939] px-4 py-2 flex items-center gap-3 border-b border-gray-700">
          <button className="w-8 h-8 rounded bg-primary hover:bg-primary/80 transition-colors flex items-center justify-center text-white text-xs font-bold">
            ✓
          </button>
          <button className="w-8 h-8 rounded bg-secondary hover:bg-secondary/80 transition-colors flex items-center justify-center text-white text-xs font-bold">
            →
          </button>
          <div className="h-6 w-px bg-gray-600 mx-1" />
          <div className="text-xs text-gray-400">Arduino Uno on COM3</div>
        </div>

        {/* Code area */}
        <div className="relative">
          <div className="flex">
            {/* Line numbers */}
            <div className="bg-[#2d2d2d] px-4 py-6 text-right text-gray-500 text-sm font-mono select-none border-r border-gray-700">
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
                      <span className={hasError ? "bg-red-900/30 px-1" : ""}>
                        {highlightSyntax(line)}
                      </span>
                      {hasError && (
                        <span className="text-red-500 text-xs ml-2 animate-pulse">
                          {i === 1 ? "⚠ Missing semicolon" : "⚠ Undeclared function"}
                        </span>
                      )}
                      {isFixed && (
                        <span className="text-accent text-xs ml-2 animate-fade-in">
                          ✓
                        </span>
                      )}
                    </div>
                  );
                })}
              </pre>

              {showAnalyzing && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-2xl animate-glow">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span className="text-white font-semibold">AI Analyzing Code...</span>
                  </div>
                </div>
              )}

              {showExplanation && (
                <div className="absolute bottom-4 right-4 bg-accent text-white px-4 py-3 rounded-lg shadow-xl max-w-xs animate-slide-in-right text-xs">
                  <div className="font-bold mb-1">✓ Code Fixed!</div>
                  <div className="opacity-90">
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
        <div className="bg-black text-white px-4 py-3 text-xs font-mono border-t border-gray-700">
          {showErrors && !showFixed && (
            <div className="text-red-400">
              <div>error: expected &apos;;&apos; before &apos;{`{`}&apos;  token</div>
              <div>error: &apos;digita1Write&apos; was not declared in this scope</div>
            </div>
          )}
          {showFixed && (
            <div className="text-accent">
              ✓ Compilation successful. Upload ready.
            </div>
          )}
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
