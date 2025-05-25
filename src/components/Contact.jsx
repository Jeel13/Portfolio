import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [status, setStatus] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    for (const [key, value] of data.entries()) {
      console.log(`${key}: ${value}`);
    }

    window.location.href = `mailto:jeel3113@gmail.com?subject=${encodeURIComponent(
      data.get('subject')
    )}&body=${encodeURIComponent(data.get('message'))}`;

    setStatus('Sent! Thanks.');
    setTimeout(() => setStatus(''), 4000);
  }

  return (
    <section
      id="contact"
      className="snap-start min-h-screen flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl space-y-6 text-center"
      >
        <h2 className="text-3xl font-semibold">Get in touch</h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            name="subject"
            required
            placeholder="Subject"
            rows="1"
            className="w-full p-3 rounded-md bg-surface/40 backdrop-blur border border-surface/80"
          />
          <textarea
            name="message"
            required
            placeholder="Your message"
            rows="5"
            className="w-full p-3 rounded-md bg-surface/40 backdrop-blur border border-surface/80"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-accent/75 text-white rounded-xl shadow hover:shadow-lg transition"
          >
            Send
          </button>
        </form>

        <div className="h-6 flex items-center justify-center">
          {status && <p className="text-accent">{status}</p>}
        </div>

        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/Jeel13"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="w-7 h-7 text-text/90 hover:text-accent transition" />
          </a>

          <a
            href="https://linkedin.com/in/jeel13"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-7 h-7 text-text/90 hover:text-accent transition" />
          </a>

          <a href="mailto:jeel3113@gmail.com" aria-label="Email">
            <FaEnvelope className="w-7 h-7 text-text/90 hover:text-accent transition" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
