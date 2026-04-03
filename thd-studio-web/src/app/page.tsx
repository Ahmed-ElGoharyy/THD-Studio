"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force start at top on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    gsap.fromTo(heroTextRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, delay: 2.6, ease: "power4.out" }
    );

    // Massive zoom on the hero right after the transition
    gsap.fromTo(imageRef.current,
      { scale: 2.5 },
      { scale: 1, duration: 5.0, delay: 1.8, ease: "power2.out" }
    );
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroBg} ref={imageRef}>
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            alt="Interior Design"
            fill
            style={{ objectFit: 'cover' }}
            priority
            unoptimized // Using remote image directly without next.config.js setup
          />
        </div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent} ref={heroTextRef}>
          <h1>Designing The Future</h1>
          <p>Architecture & Interior Layout</p>
        </div>
      </section>

      <section id="services" className={styles.darkSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>01</span>
            <div className={styles.sectionLabels}>
               <h2>Our Expertise</h2>
               <p className={styles.accentText}>High-end Architecture & Interior Solutions</p>
            </div>
          </div>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3>Architecture</h3>
              <p>Sustainable and modern structural design from concept to completion. We specialize in form, function, and future-ready engineering.</p>
            </div>
            <div className={styles.serviceItem}>
              <h3>Interior Design</h3>
              <p>Luxurious and functional spatial layouts tailored to your lifestyle. We craft the atmosphere where memories are formed.</p>
            </div>
            <div className={styles.serviceItem}>
              <h3>Designing</h3>
              <p>Strategic conceptualization and urban layout planning for the next generation of creative cities.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className={styles.lightSection}>
        <div className={styles.container}>
           <div className={styles.sectionHeader}>
            <span className={styles.sectionNumberDark}>02</span>
            <div className={styles.sectionLabels}>
               <h2 style={{ color: 'var(--color-black)' }}>Portfolio</h2>
               <p style={{ color: 'var(--color-black)', opacity: 0.7 }}>A curated collection of our finest completions worldwide.</p>
            </div>
          </div>
          <div className={styles.asymmetricGrid}>
            <div className={`${styles.gridItem} ${styles.tall}`}>
              <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" alt="Villa Project" fill style={{ objectFit: 'cover' }} unoptimized />
              <div className={styles.itemMeta}><span>01.</span> Alpine Villa</div>
            </div>
            <div className={`${styles.gridItem}`}>
              <Image src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1500&auto=format&fit=crop" alt="Penthouse Office" fill style={{ objectFit: 'cover' }} unoptimized />
              <div className={styles.itemMeta}><span>02.</span> Urban Penthouse</div>
            </div>
            <div className={`${styles.gridItem} ${styles.wide}`}>
              <Image src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1800&auto=format&fit=crop" alt="Modern Lounge" fill style={{ objectFit: 'cover' }} unoptimized />
              <div className={styles.itemMeta}><span>03.</span> The Glass House</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className={styles.darkSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>03</span>
            <div className={styles.sectionLabels}>
               <h2>Vision & Soul</h2>
            </div>
          </div>
          <div className={styles.aboutSplit}>
            <div className={styles.aboutText}>
              <p>THD Studio is more than an architecture firm. We are visionaries in spatial harmony. We believe that great design is not just seen; it is felt. Our practice blends raw modernism with warm natural materiality to create environments that inspire generations. Our approach is deeply personal—every project is a unique dialogue between client, site, and structure.</p>
            </div>
            <div className={styles.aboutStats}>
                <div className={styles.statBox}>
                   <h4>10+</h4>
                   <p>Years Excellence</p>
                </div>
                <div className={styles.statBox}>
                   <h4>250+</h4>
                   <p>Completed Works</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.lightSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumberDark}>04</span>
            <div className={styles.sectionLabels}>
               <h2 style={{ color: 'var(--color-black)' }}>Start a Project</h2>
            </div>
          </div>
          <div className={styles.textBlockCentered}>
            <p style={{ color: 'var(--color-black)', opacity: 0.7 }}>Let's build the future together.</p>
            <div className={styles.contactLinks}>
               <a href="mailto:hello@thdstudio.com" className={styles.contactEmail}>hello@thdstudio.com</a>
               <div className={styles.socials}>
                  <a href="#">Instagram</a>
                  <a href="#">LinkedIn</a>
                  <a href="#">Facebook</a>
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
