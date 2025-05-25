import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaProjectDiagram,
  FaAward,
  FaEnvelope,
} from 'react-icons/fa';

const iconMap = {
  hero: <FaHome />,
  education: <FaGraduationCap />,
  experience: <FaBriefcase />,
  projects: <FaProjectDiagram />,
  extracurricular: <FaAward />,
  contact: <FaEnvelope />,
};

const sections = [
  'hero',
  'education',
  'experience',
  'projects',
  'extracurricular',
  'contact',
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <aside
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="fixed left-0 top-0 z-40 h-screen transition-all"
      style={{ width: open ? '200px' : '60px' }}
    >
      <div className="h-full bg-surface/30 backdrop-blur-md shadow-lg flex flex-col items-center pt-8 space-y-2">
        {sections.map((sec) => (
          <Link
            key={sec}
            to={sec}
            smooth
            duration={500}
            spy
            containerId="main-scroll"
            activeClass="!text-accent"
            className="cursor-pointer flex items-center justify-start w-full px-4 py-4 transition-colors text-text hover:text-accent"
          >
            <span className="text-lg">{iconMap[sec]}</span>
            {open && <span className="ml-4 capitalize text-sm">{sec}</span>}
          </Link>
        ))}
      </div>
    </aside>
  );
}
