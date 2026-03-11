"use client";
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import styles from './Hero.module.css';
import { initAnimations } from './animations';

export default function Hero() {
  const container = useRef();
  const text = "WELCOMEITZFIZZ";

  useGSAP(() => {
    initAnimations(container);
  }, { scope: container });

  return (
    <section ref={container} className={styles.heroContainer}>
      {/* Top Stats */}
      <div className={styles.statsWrapper}>
        <div className={`${styles.statBox} statBox bg-[#d4ff3f] text-black`}>
          <h2 className="text-4xl font-bold">58%</h2>
          <p className="text-sm">Increase in pick up point use</p>
        </div>
        <div className={`${styles.statBox} statBox bg-[#222] text-white`}>
          <h2 className="text-4xl font-bold">27%</h2>
          <p className="text-sm">Faster response time</p>
        </div>
      </div>

      {/* Middle Section: Car & Text */}
      <div className={styles.middleSection}>
        <h1 className={styles.headline}>
          {text.split("").map((char, index) => (
            <span key={index} className="letter inline-block">{char}</span>
          ))}
        </h1>
        
        {/* Car Image - z-index is higher than text */}
        <div className={`${styles.visualElement} visualElement`}>
          <img 
            src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=800&auto=format&fit=crop" 
            alt="top view car"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Bottom Stat */}
      <div className={`${styles.statBox} statBox bg-[#ff8a5c] self-start`}>
        <h2 className="text-4xl font-bold">40%</h2>
        <p className="text-sm">Decreased in customer phone calls</p>
      </div>
    </section>
  );
}