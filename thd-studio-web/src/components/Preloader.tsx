"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Preloader.module.css";

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const letterTRef = useRef<HTMLSpanElement>(null);
  const letterHRef = useRef<HTMLSpanElement>(null);
  const letterDRef = useRef<HTMLSpanElement>(null);
  const studioRef = useRef<HTMLDivElement>(null);
  const loadingBarRef = useRef<HTMLDivElement>(null);

  const float1Ref = useRef<HTMLDivElement>(null);
  const float2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set(containerRef.current, { scale: 1, opacity: 1, xPercent: 0, yPercent: 0, display: 'flex', filter: "blur(0px)" });
    gsap.set([letterTRef.current, letterHRef.current, letterDRef.current, studioRef.current], { opacity: 0, y: 100 });
    gsap.set(loadingBarRef.current, { width: "0%" });

    // Extremely simple, quiet floating elements
    gsap.to(float1Ref.current, { y: -15, rotation: 5, duration: 8, yoyo: true, repeat: -1, ease: "sine.inOut" });
    gsap.to(float2Ref.current, { y: 15, rotation: -5, duration: 10, yoyo: true, repeat: -1, ease: "sine.inOut" });

    const dur = 0.8;

    tl.to(letterTRef.current, { y: 0, opacity: 1, duration: dur, ease: "power4.out" }, 0)
      .to(loadingBarRef.current, { width: "25%", duration: dur, ease: "power4.out" }, 0);

    tl.to(letterHRef.current, { y: 0, opacity: 1, duration: dur, ease: "power4.out" }, 0.4)
      .to(loadingBarRef.current, { width: "50%", duration: dur, ease: "power4.out" }, 0.4);

    tl.to(letterDRef.current, { y: 0, opacity: 1, duration: dur, ease: "power4.out" }, 0.8)
      .to(loadingBarRef.current, { width: "75%", duration: dur, ease: "power4.out" }, 0.8);

    tl.to(studioRef.current, { y: 0, opacity: 1, duration: dur, ease: "power4.out" }, 1.2)
      .to(loadingBarRef.current, { width: "100%", duration: dur, ease: "power4.out" }, 1.2);

    // Transition OUT: Slide left
    tl.to(containerRef.current, {
      xPercent: -100,
      duration: 1.2,
      ease: "power4.inOut",
      delay: 0.4
    })
      .set(containerRef.current, { display: 'none' });

  }, []);

  return (
    <div className={styles.preloader} ref={containerRef}>

      <div className={styles.floatingWrapper}>

        {/* Extremely minimal compass, drafting blue, high visibility */}
        <div className={styles.floatingSymbol} ref={float1Ref} style={{ top: '25%', left: '20%' }}>
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
            <path d="M50 15 L20 85 M50 15 L80 85 M30 65 L70 65" stroke="#4a90e2" strokeWidth="1.5" opacity="0.8" />
            <circle cx="50" cy="15" r="4" fill="#4a90e2" opacity="0.9" />
          </svg>
        </div>

        {/* Extremely minimal set square, vibrant white, high visibility */}
        <div className={styles.floatingSymbol} ref={float2Ref} style={{ bottom: '30%', right: '25%' }}>
          <svg width="90" height="90" viewBox="0 0 100 100" fill="none" style={{ transform: 'rotate(-15deg)' }}>
            <polygon points="10,90 90,90 10,10" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.7" />
            <polygon points="20,80 70,80 20,30" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

      </div>

      <div className={styles.textContainer}>
        <div className={styles.thd}>
          <span className={styles.letter} ref={letterTRef}>T</span>
          <span className={styles.letter} ref={letterHRef}>H</span>
          <span className={styles.letter} ref={letterDRef}>D</span>
        </div>
        <div className={styles.studio} ref={studioRef}>
          STUDIO
        </div>
      </div>

      <div className={styles.loadingBarContainer}>
        <div className={styles.loadingBar} ref={loadingBarRef}></div>
      </div>
    </div>
  );
}
