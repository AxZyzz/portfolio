export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string; // Should be a URL or path string
  images: string[]; // An array of URL/path strings
  techStack: string[];
  liveUrl?: string; // Optional web link
  githubUrl?: string; // Optional web link
  detailedDescription: string;
}

export interface ExperienceBlog {
  id: string; // ID should be a general string, not a specific value like "1"
  title: string;
  date: string;
  category: 'Bootcamp' | 'Hackathon' | 'conference' | 'workshop' | 'other' | 'Facilitation'; // Define possible categories
  thumbnail: string; // Should be a URL or path string
  summary: string;
  content: string;
  images?: string[]; // Optional: An array of URL/path strings
  videoUrl?: string; // Optional: A single URL string (for YouTube) or path string
}

// Add a new type for Certificate
export interface Certificate {
  id: string;
  title: string;
  imageUrl: string; // Path to the certificate image
  issuedBy: string; // Optional: Who issued it
}

// Add type guards
export function isProject(obj: any): obj is Project {
  return (
    obj &&
    typeof obj.id === 'string' &&
    typeof obj.title === 'string' &&
    typeof obj.description === 'string' &&
    typeof obj.thumbnail === 'string' &&
    Array.isArray(obj.images) &&
    Array.isArray(obj.techStack)
  );
}

export function isExperienceBlog(obj: any): obj is ExperienceBlog {
  return (
    obj &&
    typeof obj.id === 'string' &&
    typeof obj.title === 'string' &&
    typeof obj.date === 'string' &&
    ['hackathon', 'conference', 'workshop', 'other'].includes(obj.category) &&
    typeof obj.thumbnail === 'string' &&
    typeof obj.summary === 'string' &&
    typeof obj.content === 'string'
  );
}

// Add type for YouTube video ID
export type YouTubeVideoId = string & { readonly _brand: unique symbol };

// Add helper to extract YouTube video ID
export function getYouTubeVideoId(url: string): YouTubeVideoId | null {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] as YouTubeVideoId : null;
}
