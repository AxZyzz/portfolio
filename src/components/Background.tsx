import { useEffect, useRef } from 'react';

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Ensure canvas exists

    const ctx = canvas.getContext('2d');
    if (!ctx) return; // Ensure context exists

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Change characters back to binary
    const characters = 'AMANXAVIER' // <-- MODIFIED THIS LINE
    const charactersArray = characters.split('');
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize); // Use Math.floor

    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      // Semi-transparent black background for the fading effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0f0'; // Green text
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charactersArray[Math.floor(Math.random() * charactersArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };


    const interval = setInterval(draw, 33); // ~30 FPS

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Recalculate columns and reset drops on resize if needed
        // columns = Math.floor(canvasRef.current.width / fontSize);
        // drops = [];
        // for (let x = 0; x < columns; x++) drops[x] = 1;
      }
    };

    window.addEventListener('resize', handleResize);

    // Initial draw call might help
    // draw();

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      // z-0 is fine. Increase opacity if needed.
      className="fixed inset-0 z-0 opacity-40" // <-- Example: Increased opacity slightly
      style={{ filter: 'brightness(0.8) hue-rotate(60deg)' }}
    />
  );
}