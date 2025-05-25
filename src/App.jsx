import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Extracurricular from './components/Extracurricular';
import Contact from './components/Contact';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main
        id="main-scroll"
        className="flex-1 overflow-y-scroll h-screen snap-y snap-proximity scroll-smooth"
      >
        <Hero />
        <Education />
        <WorkExperience />
        <Projects />
        <Extracurricular />
        <Contact />
      </main>
    </div>
  );
}

export default App;
