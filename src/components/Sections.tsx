import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { motion, AnimatePresence } from 'framer-motion';
// Ensure correct icon imports - Use Award for Certifications section maybe?
import { Award, Brain, User, Github, Linkedin, Instagram, Twitter, Code2, Newspaper, Mail, BookOpen, Landmark, Briefcase, Users, Building, FileText } from 'lucide-react';
// Remove AlignCenterVertical as Certificate import if not used elsewhere
// import { AlignCenterVertical as Certificate } from 'lucide-react';
import { TypewriterEffect } from './TypewriterEffect';
import { ProjectCard } from './ProjectCard';
import { ExperienceBlogCard } from './ExperienceBlogCard';
// Import the correct certifications data
import { projects, experiences, certifications as sampleCertifications } from '../data/sampleData'; // Renamed import to avoid conflict
import { Link } from 'react-router-dom';
import { SkillBadge } from './SkillBadge'; // Assuming SkillBadge is used for the restored skills section
import { TypeAnimation } from 'react-type-animation'; // Import TypeAnimation

// Remove the local string array for certifications
// const certifications = [ ... ];

const skills = [
  'Leadership',
  'Problem Solving',
  'Artificial Intelligence',
  'AI Prompting',
  'Graphic Design',
  'Public Speaking',
  'Effective Communication'
];


const socialLinks = [
  { icon: Github, href: 'https://github.com/AxZyzz', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/aman-xavier', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/_aman_xavier_?igsh=eTRkZDlwMmt6MjU=', label: 'Instagram' },
  { icon: Twitter, href: 'https://x.com/AxZyzzz', label: 'Twitter' }
];

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.1 }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 }
};

export function Sections() {
  const [startTaglineAnimation, setStartTaglineAnimation] = useState(true); // Changed to start immediately

  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <motion.section
        className="h-screen flex flex-col items-center justify-center space-y-8"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="text-8xl mb-6"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <TypewriterEffect text="WHOAMI" />
        </motion.div>

        {/* Container for the tagline */}
        <motion.div 
          className="text-2xl text-emerald-400 text-center max-w-2xl mx-auto min-h-[4rem]"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <TypeAnimation
            sequence={[
              'An AI Enthusiast & Digital Innovator', 3000,
              'Aspiring Entrepreneur', 3000,
              'AI Prompt Engineer', 3000,
              'Vibe Coder', 3000,
              'Tech Enthusiast', 3000,
              'Constant Learner', 3000,
              'Jack of All Trades', 3000,
              'Think Outside the Box', 3000,
              ''
            ]}
            wrapper="span"
            speed={45}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
            cursor={true}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="mt-8"
        >
          <motion.button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-emerald-400 border border-emerald-500/20 px-8 py-3 rounded-full hover:border-emerald-500/50 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            Explore More
          </motion.button>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <Section 
        id="about"
        icon={<User className="w-8 h-8" />}
        title="About Me"
        content={
          <div className="space-y-6 text-lg">
            <p className="text-2xl font-light text-emerald-400 mb-8">
              Hey! I'm Aman Xavier, bridging the gap between technology and innovation.
            </p>
            <p>
              Currently pursuing a Bachelor of Technology in Computer Science at the College of Engineering Muttathara, 
              I'm passionate about driving innovation and fostering leadership in the digital realm.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">Professional Journey</h3>
              <ul className="space-y-4 list-disc list-inside">
                <li>Social Media Lead at IVAEX - Enhancing brand visibility and community engagement</li>
                <li>Campus Finance Lead at IEDC - Managing entrepreneurial initiatives and resources</li>
                <li>Campus Social Media Lead at µLearn - Directing collaborative learning campaigns</li>
              </ul>
            </div>
          </div>
        }
      />

      {/* Experience Section */}
      <Section
        id="experience"
        icon={<Award className="w-8 h-8" />}
        title="Experience"
        content={
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="glow-effect bg-black/20 p-6 rounded-xl border border-emerald-500/20"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-semibold text-emerald-400 mb-2">SM Lead @ IVAEX</h3>
              <p className="text-gray-400 mb-4">1 year</p>
              <p className="text-gray-300">Leading social media strategy and community engagement initiatives</p>
            </motion.div>
            <motion.div
              className="glow-effect bg-black/20 p-6 rounded-xl border border-emerald-500/20"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-semibold text-emerald-400 mb-2">Campus SM Lead @ µLearn</h3>
              <p className="text-gray-400 mb-4">1 year</p>
              <p className="text-gray-300">Directing campus-wide social media campaigns and engagement</p>
            </motion.div>
          </div>
        }
      />

      {/* Skills Section */}
      <Section
        id="skills"
        icon={<Brain className="w-8 h-8" />}
        title="Skills"
        content={
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <motion.div
                key={skill}
                className="glow-effect bg-black/20 p-6 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <p className="text-xl text-center text-emerald-400">{skill}</p>
              </motion.div>
            ))}
          </div>
        }
      />

      {/* Certifications Section */}
      <Section
        id="certifications"
        icon={<Award className="w-8 h-8" />} // Using Award icon
        title="Certifications"
        content={
          // Use the imported sampleCertifications data
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Map over the imported data */}
            {sampleCertifications.map((cert) => (
              <Link
                key={cert.id}
                // Use the ID from the imported data for the link
                to={`/certificate/${cert.id}`}
                className="block p-6 bg-black/20 backdrop-blur-sm rounded-lg border border-emerald-500/20 hover:border-emerald-400/50 glow-effect transition-all duration-300 transform hover:-translate-y-1"
              >
                 <div> {/* Wrapper for text content */}
                   <h3 className="text-xl font-semibold text-emerald-300 mb-2">
                     {/* Display title from imported data */}
                     {cert.title}
                   </h3>
                   {/* Display issuer from imported data */}
                   {cert.issuedBy && (
                     <p className="text-gray-400 text-sm mb-4">
                       Issued by: {cert.issuedBy}
                     </p>
                   )}
                 </div>
                 <span className="inline-block mt-auto text-emerald-400 hover:text-emerald-200 text-sm">
                   View Certificate &rarr;
                 </span>
              </Link>
            ))}
          </div>
        }
      />

      {/* Projects Section */}
      <Section
        id="projects"
        icon={<Code2 className="w-8 h-8" />}
        title="Projects"
        content={
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        }
      />

      {/* Experiences Section */}
      <Section
        id="experiences"
        icon={<Newspaper className="w-8 h-8" />}
        title="My Journey" // <-- Corrected title
        content={
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map(blog => (
              <ExperienceBlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        }
      />

      {/* Contact Section */}
      <Section
        id="contact"
        icon={<User className="w-8 h-8" />}
        title="Connect With Me"
        content={
          <div className="text-center">
            <p className="text-xl text-emerald-400 mb-8">Let's create something amazing together</p>
            <div className="flex justify-center space-x-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-effect p-4 rounded-full bg-black/20 border border-emerald-500/20 text-emerald-400 hover:border-emerald-500/50"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <social.icon className="w-8 h-8" />
                </motion.a>
              ))}
            </div>
          </div>
        }
      />
    </div>
  );
}

// Keep the Section component as is
function Section({ id, icon, title, content }: { id: string; icon: React.ReactNode; title: string; content: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      className="min-h-screen flex items-center justify-center py-20 px-4"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true }}
      variants={textVariants}
    >
      <div className="max-w-6xl w-full">
        <motion.div
          className="glow-effect bg-black/30 backdrop-blur-lg rounded-2xl p-10 border border-emerald-500/20"
          whileHover={{ scale: 1.01 }}
        >
          <motion.div className="flex items-center space-x-4 mb-10">
            <div className="p-3 bg-emerald-500/20 rounded-lg text-emerald-400">
              {icon}
            </div>
            <h2 className="text-4xl font-bold text-emerald-400">
              <AnimatePresence>
                {title.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </AnimatePresence>
            </h2>
          </motion.div>
          <motion.div 
            className="text-gray-300"
            variants={textVariants}
          >
            {content}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}