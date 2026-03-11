"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const carRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Mobile check: screen width 768px se kam hai ya nahi
      const isMobile = window.innerWidth < 768;

      gsap.to(carRef.current, {
        x: isMobile ? "80vw" : "100vw", // Mobile par thoda kam move karega
        rotation: 2, // Thoda sa bounce effect
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1, // Smooth scrolling
          pin: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.heroSection}>
      <h1 className={styles.title}>Scroll to Drive</h1>
      <div ref={carRef} className={styles.carContainer}>
        {/* Make sure car.png is in your public folder */}
        <img src="/car.png" alt="Animated Car" className={styles.carImage} />
      </div>
      <div className={styles.road}></div>
    </section>
  );
}