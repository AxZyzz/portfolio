import { motion } from 'framer-motion';
// Import necessary icons
import {
  Code2, User, Award, Brain, BookOpen, FolderKanban, Mail, Briefcase
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Define section names and their corresponding icons
const navItems = [
  { name: 'About', icon: User, id: 'about' },
  { name: 'Experience', icon: Award, id: 'experience' }, // Roles/Experience section
  { name: 'Skills', icon: Brain, id: 'skills' }, // Using Brain for Skills
  { name: 'Certifications', icon: Award, id: 'certifications' }, // Using Award for Certs
  { name: 'Projects', icon: FolderKanban, id: 'projects' }, // Using FolderKanban for Projects
  { name: 'Journey', icon: BookOpen, id: 'experiences' }, // Renamed 'Experiences' to 'Journey' for clarity, using BookOpen
  { name: 'Contact', icon: Mail, id: 'contact' },
];


export function Navbar() {
  const navigate = useNavigate();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 bg-black/30 backdrop-blur-md border-b border-emerald-500/20"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/')}
          >
            <Code2 className="w-6 h-6 text-emerald-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Aman Xavier
            </span>
          </motion.div>

          {/* Navigation Links - Icons Only */}
          {/* Adjust spacing for icons */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {/* Map over the navItems array */}
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => {
                  navigate(`/#${item.id}`); // Use the id from navItems
                }}
                // Add title attribute for tooltip on hover
                title={item.name} // <--- This applies the name to the tooltip
                // Styling for the button itself (padding might be nice)
                className="p-2 text-gray-300 hover:text-emerald-400 transition-colors rounded-full hover:bg-emerald-500/10" // Added padding and hover background
                whileHover={{ scale: 1.1 }}
              >
                {/* Render only the icon */}
                {/* Increase icon size slightly */}
                <item.icon className="w-5 h-5" />
                {/* Remove the text span: <span>{item.name}</span> */}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}