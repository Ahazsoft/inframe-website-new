export function parallaxSlider() {
  const images: HTMLElement[] = Array.from(
    document.querySelectorAll<HTMLElement>(".parallax-img")
  );

  const slider = document.querySelector(
    ".parallax-slider"
  ) as HTMLElement;

  // Adjust if needed
  const IMAGE_WIDTH = 800;     // Added a fixed width for each image
  const SLIDER_HEIGHT = "85vh";

  let current = 0;
  let target = 0;
  const ease = 0.05;

  let maxScroll = 0;

  // --------------------
  // SETUP
  // --------------------

  slider.style.display = "flex";
  slider.style.height = SLIDER_HEIGHT;
  slider.style.position = "sticky";
  slider.style.top = "0";
  slider.style.overflow = "hidden";

  images.forEach((img, idx) => {
    img.style.backgroundImage = `url(/assets/img/bts/${idx + 1}.png)`;
    img.style.width = `${IMAGE_WIDTH}px`;
    img.style.height = "100%";
    img.style.flex = "0 0 auto";
  });

  function init() {
    const totalWidth = IMAGE_WIDTH * images.length * 0.7; // Added a threshold (0.7) to acoomodate total width size

    slider.style.width = `${totalWidth}px`;

    maxScroll = totalWidth - window.innerWidth;

    document.body.style.height = `${totalWidth}px`;
    
  }

  window.addEventListener("resize", init);

  // --------------------
  // ANIMATION
  // --------------------

  function lerp(start: number, end: number, t: number): number {
    return start * (1 - t) + end * t;
  }

  function setTransform(el: HTMLElement, transform: string) {
    el.style.transform = transform;
  }

  function animate() {
    target = window.scrollY;

    // clamp scroll so it never overshoots
    if (target > maxScroll) target = maxScroll;

    current = lerp(current, target, ease);

    setTransform(slider, `translateX(-${current}px)`);

    animateImages();

    requestAnimationFrame(animate);
  }

  function animateImages() {
    const ratio = current / IMAGE_WIDTH;

    images.forEach((image, idx) => {
      const offset = (ratio - idx * 0.7) * 100;
      setTransform(image, `translateX(${offset}px)`);
    });
  }

  init();
  animate();
}