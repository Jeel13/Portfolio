import React from 'react';
import { extracurriculars } from '../data';
import { motion } from 'framer-motion';

export default function Extracurricular() {
  return (
    <section
      id="extracurricular"
      className="snap-start min-h-screen items-center py-24 px-6 bg-base"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          Extracurricular &amp; Certifications
        </h2>

        <div className="space-y-4">
          {extracurriculars.map((ex, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-xl p-4 bg-surface/40 backdrop-blur-lg shadow-md"
            >
              <h3 className="font-semibold">{ex.name}</h3>
              <p className="text-sm mb-3">{ex.detail}</p>

              {ex.link && (
                <a
                  href={ex.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-xs px-2 py-1 rounded-full bg-accent/20 border border-accent/30 hover:bg-accent/30 transition"
                >
                  {ex.linkLabel || 'View credential'}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
