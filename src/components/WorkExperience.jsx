import React from 'react';
import { work } from '../data';
import { motion } from 'framer-motion';

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="snap-start min-h-screen py-24 px-6 bg-base"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          Work&nbsp;Experience
        </h2>

        <ul className="space-y-10">
          {work.map((job, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-surface/40 backdrop-blur-lg rounded-xl p-6 shadow-md"
            >
              <h3 className="text-xl font-bold">
                {job.role} @ {job.company}
              </h3>
              <p className="text-accent">{job.location}</p>
              <p className="text-sm">{job.date}</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                {job.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
