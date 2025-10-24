// src/components/CodeRain.tsx
import React, { useEffect, useRef } from "react";

type CodeRainProps = {
  /** quantas colunas por 1000px (maior = mais denso) */
  density?: number; // default 36
  /** maior = mais rápido (1 = normal) */
  speed?: number;   // default 1.2
  /** tamanho de fonte base em px */
  fontSize?: number; // default 16
  /** alpha do rastro (0.04 = rastro longo; 0.1 = rastro curto) */
  trailAlpha?: number; // default 0.06
  /** brilho extra na "cabeça" da coluna */
  headGlow?: number; // default 0.6
  /** cor base em rgba/hex */
  color?: string;   // default "rgba(166, 77, 255, 0.9)" (roxo)
  /** estilo extra no canvas */
  style?: React.CSSProperties;
  className?: string;
};

const BIN = "0101010011010010010010110101001001001011010010100101";

const CodeRain: React.FC<CodeRainProps> = ({
  density = 36,
  speed = 1.2,
  fontSize = 16,
  trailAlpha = 0.06,
  headGlow = 0.6,
  color = "rgba(166, 77, 255, 0.9)", // roxo
  style,
  className,
}) => {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number>();
  const colsRef = useRef<number[]>([]);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let running = true;

    const setSize = () => {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.floor(canvas.clientWidth * dpr);
      canvas.height = Math.floor(canvas.clientHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // definir colunas conforme densidade
      const cols = Math.max(
        8,
        Math.floor((canvas.clientWidth / 1000) * density)
      );
      colsRef.current = new Array(cols).fill(0).map(() => 1 + Math.random() * 20);
    };

    const handleResize = () => {
      setSize();
    };

    setSize();
    window.addEventListener("resize", handleResize);

    // respeitar prefers-reduced-motion
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const draw = () => {
      if (!running) return;

      // rastro
      ctx.fillStyle = `rgba(0,0,0,${trailAlpha})`;
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;
      const stepX = Math.floor(canvas.clientWidth / colsRef.current.length);

      for (let i = 0; i < colsRef.current.length; i++) {
        const y = colsRef.current[i] * fontSize;
        // caractere binário
        const char = BIN[Math.floor(Math.random() * BIN.length)];

        // "cabeça" com brilho
        const grad = ctx.createLinearGradient(
          i * stepX,
          y - fontSize * 2,
          i * stepX,
          y + fontSize
        );
        grad.addColorStop(0, "rgba(0,0,0,0)");
        grad.addColorStop(0.6, color);
        grad.addColorStop(1, `rgba(255,255,255,${headGlow})`);

        ctx.fillStyle = grad;
        ctx.fillText(char, i * stepX, y);

        // reset quando sai da tela
        if (y > canvas.clientHeight && Math.random() > 0.975) {
          colsRef.current[i] = 0;
        }
        colsRef.current[i] += reduce ? 0.5 : speed; // mais devagar se reduce
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      running = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [density, speed, fontSize, trailAlpha, headGlow, color]);

  return (
    <canvas
      ref={ref}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        ...style,
      }}
    />
  );
};

export default CodeRain;