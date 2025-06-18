import { useEffect, useRef } from "react";

export function useTechSlider(technologies) {
  const sliderRef = useRef(null);
  const speed = 1.5;

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame;
    let pos = 0;
    const totalWidth = slider.scrollWidth / 2;

    function animate() {
      pos -= speed;
      if (Math.abs(pos) >= totalWidth) {
        pos = 0;
      }
      slider.style.transform = `translateX(${pos}px)`;
      animationFrame = requestAnimationFrame(animate);
    }

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [technologies]);

  return { sliderRef };
}
