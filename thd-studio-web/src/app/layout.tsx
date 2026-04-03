"use client";

import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from '@/components/Navbar';
import Preloader from '@/components/Preloader';
import './globals.css';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, 
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <html lang="en">
      <head>
        <title>THD Studio | Architecture & Design</title>
      </head>
      <body>
        <Preloader key={`preloader-${pathname}`} />
        <Navbar key={`navbar-${pathname}`} />
        {children}
      </body>
    </html>
  );
}
