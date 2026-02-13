import { useEffect, useRef } from "react";

export function useMarqueeNew(speed: number, direction: number) {
  const ref = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const position = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId: number;

    const animate = () => {
      if (!paused.current) {
        position.current += speed * direction;
        el.style.transform = `translateX(${position.current}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [speed, direction]);

  const pause = () => {
    paused.current = true;
  };

  const resume = () => {
    paused.current = false;
  };

  return { ref, pause, resume };
}
