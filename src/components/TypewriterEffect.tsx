import { useEffect, useState } from 'react';

export function TypewriterEffect({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80); // Even faster typing speed
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <div className="font-mono text-emerald-400">
      <span className="inline-block">${displayText}</span>
      {currentIndex < text.length && (
        <span className="inline-block w-2 h-5 bg-emerald-400 ml-1 animate-pulse">_</span>
      )}
    </div>
  );
}