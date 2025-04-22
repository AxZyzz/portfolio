import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../types';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glow-effect bg-black/30 rounded-xl overflow-hidden border border-emerald-500/20 flex flex-col" // Added flex flex-col
    >
      <Link to={`/project/${project.id}`} className="block flex-grow"> {/* Wrap image and text content */}
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-emerald-400 mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map(tech => (
              <span key={tech} className="px-2 py-1 text-sm bg-emerald-500/20 rounded-full text-emerald-400">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link> {/* End of Link wrapper */}

      {/* Keep external links outside the main navigation link */}
      <div className="p-6 pt-0 flex justify-end items-center gap-4"> {/* Adjusted padding and alignment */}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">
            <Github className="w-5 h-5" />
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
