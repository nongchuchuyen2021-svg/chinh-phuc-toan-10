"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  char?: string;
  isGlyph: boolean;
  angle: number;
  vAngle: number;
}

const MATH_GLYPHS = [
  "vec(a)", "Delta", "vec(u)", "pi", "vec(AB)", "sqrt(x)",
  "cap", "cup", "in", "subset", "sin", "cos", "tan", "Oxy",
  "P(A)", "x^2", "Sigma", "<=", ">=", "R", "sigma", "C_n^k"
];

const COLORS = [
  "rgba(6, 182, 212, ",   // Cyan
  "rgba(139, 92, 246, ",  // Violet
  "rgba(16, 185, 129, ",  // Emerald
  "rgba(245, 158, 11, ",  // Amber
  "rgba(99, 102, 241, ",  // Indigo
];

export default function MathCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000, radius: 100 };

    function handleResize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    }

    function initParticles() {
      particles = [];
      const width = canvas!.width;
      const height = canvas!.height;
      const count = Math.min(45, Math.floor((width * height) / 22000));

      for (let i = 0; i < count; i++) {
        const isGlyph = Math.random() < 0.45;
        const colorBase = COLORS[Math.floor(Math.random() * COLORS.length)];
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.38,
          vy: (Math.random() - 0.5) * 0.38,
          size: isGlyph ? Math.floor(Math.random() * 6 + 12) : Math.random() * 2 + 1,
          alpha: Math.random() * 0.45 + 0.15,
          color: colorBase,
          char: isGlyph ? MATH_GLYPHS[Math.floor(Math.random() * MATH_GLYPHS.length)] : undefined,
          isGlyph,
          angle: Math.random() * Math.PI * 2,
          vAngle: (Math.random() - 0.5) * 0.01,
        });
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const lineAlpha = (1 - dist / 130) * 0.09;
            ctx.strokeStyle = `rgba(6, 182, 212, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw particles & glyphs
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.vAngle;

        // Wrap around bounds
        if (p.x < -30) p.x = canvas.width + 30;
        if (p.x > canvas.width + 30) p.x = -30;
        if (p.y < -30) p.y = canvas.height + 30;
        if (p.y > canvas.height + 30) p.y = -30;

        // Gentle mouse interaction
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < mouse.radius && mdist > 0) {
          const force = (1 - mdist / mouse.radius) * 0.8;
          p.x += (mdx / mdist) * force;
          p.y += (mdy / mdist) * force;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);

        if (p.isGlyph && p.char) {
          ctx.font = `600 ${p.size}px "JetBrains Mono", "IBM Plex Mono", monospace`;
          ctx.fillStyle = `${p.color}${p.alpha})`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(p.char, 0, 0);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.alpha})`;
          ctx.fill();
        }

        ctx.restore();
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      style={{ opacity: 0.85 }}
    />
  );
}
