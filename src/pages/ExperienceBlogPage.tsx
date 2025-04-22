import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import { experiences } from '../data/sampleData';
import { ExperienceBlog } from '../types';
import { YouTubeEmbed } from '../components/YouTubeEmbed';

export function ExperienceBlogPage() {
  const { id } = useParams<{ id: string }>();
  const blog: ExperienceBlog | undefined = experiences.find(b => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-emerald-400 p-4">
        <h2 className="text-2xl mb-4">Experience not found.</h2>
        <Link to="/" className="inline-flex items-center text-emerald-300 hover:text-emerald-200 border border-emerald-500/50 px-4 py-2 rounded-lg glow-effect">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go Back Home
        </Link>
      </div>
    );
  }

  const paragraphs = blog.content.split(/\n\s*\n/).map(p => p.replace(/\n/g, ' '));

  return (
    <div className="relative z-10 min-h-screen pt-24 pb-12 px-4"> {/* Remove bg-black, keep relative z-10 for stacking context */}
      <div className="max-w-4xl mx-auto"> {/* Adjusted max-width */}

        {/* Back Link */}
        <div className="mb-8">
           {/* Correct the 'to' prop to point to the 'experiences' section ID */}
           <Link
             to="/#experiences" // <-- CORRECTED THIS LINE
             className="inline-flex items-center text-emerald-300 hover:text-emerald-200 border border-emerald-500/50 px-4 py-2 rounded-lg glow-effect transition-colors duration-300"
           >
             <ArrowLeft className="w-4 h-4 mr-2" />
             Back to Journey
           </Link>
        </div>

        <motion.article // Use article for semantics, remove visual boxing
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black/50 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-emerald-500/30 glow-effect prose prose-invert prose-lg max-w-none prose-headings:text-emerald-400 prose-a:text-emerald-400 hover:prose-a:text-emerald-200 prose-strong:text-emerald-300"
        >
          {/* Featured Image / Thumbnail */}
          {blog.thumbnail && ( // Check if thumbnail exists before rendering
             <img
               src={blog.thumbnail} // This will now use the imported variable path
               alt={blog.title}
               className="w-full h-64 md:h-96 object-cover rounded-xl mb-8 border border-emerald-500/10" // Added rounded corners and subtle border
             />
          )}


          {/* Article Content Area */}
          <div className="mb-12"> {/* Add bottom margin */}
            {/* Category Tag */}
            <span className="inline-block bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm font-semibold mb-4 capitalize">
              {blog.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-400 mb-4 leading-tight">
              {blog.title}
            </h1>

            {/* Meta Info (Date) */}
            <div className="flex items-center text-emerald-400/80 text-sm mb-8">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Published on {blog.date}</span>
            </div>

            {/* Main Blog Content - Using Prose for styling */}
            {/* Apply prose directly, it will style the paragraphs */}
            <div className="prose prose-lg prose-invert max-w-none text-gray-300 prose-p:leading-relaxed prose-headings:text-emerald-400 prose-a:text-emerald-300 hover:prose-a:text-emerald-200 prose-strong:text-emerald-300">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Image Gallery Section */}
          {blog.images && blog.images.length > 0 && (
            <div className="mb-12"> {/* Use margin instead of border */}
              <h2 className="text-2xl font-semibold text-emerald-400 mb-6">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {blog.images.map((imgUrl, index) => (
                  <a href={imgUrl} target="_blank" rel="noopener noreferrer" key={index} className="block overflow-hidden rounded-lg border border-emerald-500/20 glow-effect group">
                    <img
                      src={imgUrl} // This will now use the imported variable path
                      alt={`${blog.title} gallery image ${index + 1}`}
                      className="w-full h-40 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Video Section */}
          {blog.videoUrl && (
            <div className="mb-12"> {/* Use margin instead of border */}
              <h2 className="text-2xl font-semibold text-emerald-400 mb-6">Video</h2>
              <YouTubeEmbed url={blog.videoUrl} title={blog.title} />
            </div>
          )}
        </motion.article>
      </div>
    </div>
  );
}
