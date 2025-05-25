import React from 'react';
import { projects } from '../data';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section
      id="projects"
      className="snap-start min-h-screen items-center py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">Projects</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, idx) => {
            const targetUrl = p.demo || p.link;
            if (!targetUrl) return null;

            return (
              <motion.a
                key={idx}
                href={targetUrl}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: idx * 0.1 }}
                className="relative block cursor-pointer bg-surface/40 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl hover:bg-accent/30 transition"
              >
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm mb-4">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-2">
                  {p.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-black/10 text-black-100 border border-accent/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
