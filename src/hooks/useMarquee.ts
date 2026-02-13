import { useEffect, useRef } from "react";

export function useMarquee(speed = 1, direction: 1 | -1 = -1) {
  const ref = useRef<HTMLDivElement | null>(null);
  const paused = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    let rafId: number;
    let lastTime = performance.now();
    let x = 0;

    const el = ref.current;

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!paused.current) {
        x += direction * speed * (delta * 0.05);
        el.style.transform = `translateX(${x}px)`;

        // reset for seamless loop
        if (Math.abs(x) > el.scrollWidth / 2) {
          x = 0;
        }
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
