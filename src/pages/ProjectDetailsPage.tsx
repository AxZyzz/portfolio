import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { projects } from '../data/sampleData'; // Import sample data
import { Project } from '../types'; // Import the type
import { YouTubeEmbed } from '../components/YouTubeEmbed'; // Import YouTube embed component

export function ProjectDetailsPage() {
  const { id } = useParams<{ id: string }>(); // Get the ID from the URL
  // Find the project data using the ID (replace with actual data fetching later)
  const project: Project | undefined = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-emerald-400">
        Project not found.
        <Link to="/" className="ml-4 underline">Go Home</Link>
      </div>
    );
  }

  return (
    <div className="relative z-10 min-h-screen pt-24 pb-12 px-4"> {/* <-- MODIFIED THIS LINE */}
      <div className="max-w-5xl mx-auto"> {/* Increased max-width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glow-effect bg-black/50 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-emerald-500/30" // Modified content wrapper
        >
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/#projects" // This is correctly pointing to the section ID
              className="inline-flex items-center text-emerald-300 hover:text-emerald-200 border border-emerald-500/50 px-4 py-2 rounded-lg glow-effect transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </div>

          {/* Header */}
          <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4 md:mb-0">{project.title}</h1>
            <div className="flex gap-4">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
                  <Github className="w-5 h-5" /> GitHub
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
                  <ExternalLink className="w-5 h-5" /> Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Image Gallery */}
          {project.images && project.images.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {project.images.map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg border border-emerald-500/10"
                />
              ))}
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-8">
             <h2 className="text-2xl font-semibold text-emerald-400 mb-3">Tech Stack</h2>
             <div className="flex flex-wrap gap-2">
               {project.techStack.map(tech => (
                 <span key={tech} className="px-3 py-1 text-sm bg-emerald-500/20 rounded-full text-emerald-400">
                   {tech}
                 </span>
               ))}
             </div>
          </div>

          {/* Detailed Description */}
          <div className="prose prose-lg prose-invert max-w-none text-gray-300"> {/* Added prose styling */}
             <h2 className="text-2xl font-semibold text-emerald-400 mb-3 !text-emerald-400">Details</h2> {/* Ensure heading color */}
             {/* Use dangerouslySetInnerHTML OR a markdown parser if description contains HTML/Markdown */}
             <p>{project.detailedDescription}</p>
          </div>

          {/* Video Embed Section - Assuming videoUrl might be added to Project interface later */}
          {/* {project.videoUrl && (
            <div className="mt-10">
              <h2 className="text-2xl font-semibold text-emerald-400 mb-4">Video Demo</h2>
              <YouTubeEmbed url={project.videoUrl} title={`${project.title} Demo`} />
            </div>
          )} */}
        </motion.div>
      </div>
    </div>
  );
}
