import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function Hero() {
  const sectionRef = useRef(null);

  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);

  const springX = useSpring(offsetX, { stiffness: 50, damping: 15 });
  const springY = useSpring(offsetY, { stiffness: 50, damping: 15 });

  const blob1X = springX;
  const blob1Y = springY;
  const blob2X = useTransform(springX, (v) => v * 0.6);
  const blob2Y = useTransform(springY, (v) => v * -0.6);

  const INTENSITY = 0.35;

  function handleMouseMove(e) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;

    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);

    offsetX.set(dx * INTENSITY);
    offsetY.set(dy * INTENSITY);
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="snap-start relative h-screen flex items-center justify-center overflow-hidden px-6"
    >
      <motion.div
        style={{ translateX: blob1X, translateY: blob1Y }}
        className="absolute w-96 h-96 bg-surface/30 rounded-full mix-blend-multiply filter blur-2xl animate-blob"
      />
      <motion.div
        style={{ translateX: blob2X, translateY: blob2Y }}
        className="absolute w-96 h-96 bg-surface/10 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-100"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-6 max-w-6xl"
      >
        <div className="text-center md:text-left space-y-6 ml-4 md:ml-10">
          <h1 className="text-4xl md:text-6xl font-bold">Jeel Patel</h1>
          <p className="text-lg md:text-2xl text-accent">
            Software Developer &amp; CS Grad Student @ ASU
          </p>
          <p className="text-md md:text-lg text-text">
            I like to design backend and frontend systems that stay reliable
            under load, then automate the boring parts so future-me can keep
            sleeping.
          </p>
        </div>

        <div className="flex justify-center md:justify-center">
          <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-lg">
            <img
              src="/MyImage.jpg"
              alt="Jeel Patel"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
