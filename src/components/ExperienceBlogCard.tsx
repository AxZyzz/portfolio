import { motion } from 'framer-motion';
import { Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ExperienceBlog } from '../types';

export function ExperienceBlogCard({ blog }: { blog: ExperienceBlog }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glow-effect bg-black/30 rounded-xl overflow-hidden border border-emerald-500/20 flex flex-col" // Added flex flex-col
    >
      <Link to={`/experience/${blog.id}`} className="block group"> {/* Added group class */}
        {/* Ensure thumbnail is displayed */}
        <div className="overflow-hidden"> {/* Added container for zoom effect */}
          <img
            src={blog.thumbnail} // This path must be correct (e.g., /images/amaljyothi/...)
            alt={blog.title}
            className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" // Added hover effect
          />
        </div>
        <div className="p-6 flex-grow"> {/* Added flex-grow */}
          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center text-emerald-400">
              <Calendar className="w-4 h-4 mr-1" />
              <span className="text-sm">{blog.date}</span>
            </div>
            <div className="flex items-center text-emerald-400">
              <Tag className="w-4 h-4 mr-1" />
              <span className="text-sm capitalize">{blog.category}</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors"> {/* Added hover effect */}
            {blog.title}
          </h3>
          <p className="text-gray-300 mb-4 text-sm line-clamp-3">{blog.summary}</p> {/* Added line-clamp */}
        </div>
      </Link>
      <div className="p-6 pt-0 mt-auto"> {/* Pushes Read More down */}
         <Link to={`/experience/${blog.id}`} className="text-emerald-400 hover:text-emerald-300 font-semibold">
           Read More →
         </Link>
      </div>
    </motion.div>
  );
}
