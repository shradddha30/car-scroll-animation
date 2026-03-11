import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initAnimations = (containerRef) => {
  const q = gsap.utils.selector(containerRef);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top top",
      end: "+=6000", // Scroll ki length ko badha diya takki animation slow ho
      scrub: 1.5,      // Thodi smoother scrubbing
      pin: true,     // Screen ko fix rakhega
      anticipatePin: 1,
    }
  });

  // 1. Car Movement (Starts closer and moves slower)
  tl.to(q(".visualElement"), {
    x: "110vw", // Moves slower across the screen
    ease: "none",
    duration: 30 // Duration badha di hai, ab car slow chalegi
  }, 0)

  // 2. Letters Reveal (Car ke sath ek-ek karke dikhenge)
  // letters ab car ke right se niklenge naaki car car text ke upar se chalegi
  .from(q(".letter"), {
    opacity: 0,
    y: 10,
    scale: 0.8,
    stagger: 2, // Letters ke reveal hone ka time interval badha diya
    duration: 3,
    ease: "power2.out"
  }, 3) // thodi delay car move hone ke baad start hoga reveal

  // 3. Stat Boxes Reveal (End mein slow high animation ke sath)
  .from(q(".statBox"), {
    opacity: 0,
    y: -30,
    scale: 0.9,
    stagger: 3,
    duration: 4,
    ease: "back.out(1.7)"
  }, 10); 
};