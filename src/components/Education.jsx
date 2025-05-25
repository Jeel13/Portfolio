import React from 'react';
import { education } from '../data';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" className="snap-start min-h-screen py-24 px-6 ">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">Education</h2>
        <ul className="space-y-10">
          {education.map((ed, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-surface/40 backdrop-blur-lg rounded-xl p-6 shadow-md"
            >
              <h3 className="text-xl font-bold">{ed.degree}</h3>
              <p className="text-accent">{ed.school}</p>
              <p className="text-sm">{ed.date}</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                {ed.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
