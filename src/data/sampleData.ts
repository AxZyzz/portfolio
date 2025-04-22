import { Project, ExperienceBlog, Certificate } from '../types'; // Import Certificate type

// --- Import all your images from src/assets ---
import bootcampThumbnail from '../assets/images/amaljyothi/WhatsApp Image 2024-09-29 at 13.50.00_60d4cf05.jpg';
import img1 from '../assets/images/amaljyothi/IMG-20240927-WA0032.jpg';
import img2 from '../assets/images/amaljyothi/IMG-20240927-WA0021.jpg';
import img3 from '../assets/images/amaljyothi/IMG_20240928_082051.jpg';
import img4 from '../assets/images/amaljyothi/IMG_20240927_154457.jpg';
import img5 from '../assets/images/amaljyothi/IMG_20240927_154032.jpg';
import img6 from '../assets/images/amaljyothi/IMG_20240926_055730.jpg';
import img7 from '../assets/images/amaljyothi/IMG_20240925_194126_1.jpg';
import img8 from '../assets/images/amaljyothi/IMG_20240925_162418.jpg';
import img9 from '../assets/images/amaljyothi/IMG_20240925_062010.jpg';
import img10 from '../assets/images/amaljyothi/IMG_20240925_061113.jpg';
import img11 from '../assets/images/amaljyothi/IMG_20240925_060941.jpg';
import img12 from '../assets/images/amaljyothi/IMG_20240924_173804.jpg';
import codequest from '../assets/images/codequest/6.jpg';
import img14 from '../assets/images/codequest/5.jpg';
import img15 from '../assets/images/codequest/4.jpg';
import img16 from '../assets/images/codequest/3.jpg';
import img17 from '../assets/images/codequest/2.jpg';
import img18 from '../assets/images/codequest/1.jpg';
import innovatex from '../assets/images/Innovatex/2.jpeg';
import img20 from '../assets/images/Innovatex/1.jpeg';
import img21 from '../assets/images/Innovatex/3.jpeg';
import img22 from '../assets/images/Innovatex/4.jpeg';
import img23 from '../assets/images/Innovatex/5.jpeg';
import img24 from '../assets/images/Innovatex/6.jpeg';
import img25 from '../assets/images/Innovatex/7.jpeg';
import img26 from '../assets/images/Innovatex/8.jpeg';
import img27 from '../assets/images/Innovatex/9.jpeg';
import img28 from '../assets/images/Innovatex/55.jpg';
import searchcourt from '../assets/images/Innovatex/10.jpg';
import searchcourt1 from '../assets/images/Innovatex/11.jpg';
import quiz from '../assets/images/quiz/1.jpg';
import img29 from '../assets/images/quiz/2.jpg';
import img30 from '../assets/images/quiz/3.jpg';
import img31 from '../assets/images/quiz/4.jpg';
import img32 from '../assets/images/quiz/5.jpg';
import img33 from '../assets/images/quiz/6.jpg';
import img34 from '../assets/images/quiz/7.jpg'; 
import img35 from '../assets/images/quiz/8.jpg';// Placeholder for project thumbnail
// --- Add imports for any project images in src/assets too ---
// import proj1Thumb from '../assets/images/your-project-thumb.jpg';

// --- Import your certificate images here ---
// Example: import cert1Image from '../assets/images/certificates/cert1.jpg';
// Example: import cert2Image from '../assets/images/certificates/cert2.png';
// Make sure these image files exist in your project
import myCertImage from '../assets/images/certificates/cybersecurity.jpg';
import cert1 from '../assets/images/certificates/AI.jpg';
import cert2 from '../assets/images/certificates/yngprof.jpg';
import cert3 from '../assets/images/certificates/genai.png'; // Example import

export const projects: Project[] = [
  {
    id: "1",
    title: "Search Court AI",
    description: "An AI-powered legal research tool that simplifies the process of finding relevant court judgments.",
    thumbnail: searchcourt,
    images: [
      searchcourt1,innovatex,img21,img22
      
    ],
    techStack: ["Python", "Prompt Engineering", "Gemini API", "Sentence-BERT (SBERT)","Tesseract OCR", "PyMuPDF"],
    liveUrl: "https://www.youtube.com/watch?v=V_JoMsihbaw&feature=youtu.b",
    githubUrl: "https://github.com/AxZyzz",
    detailedDescription: `🔧 Tech Stack Used
Data Digitization
Tesseract OCR - Extract text from scanned court judgment PDFs

PyMuPDF (fitz) - Preprocess and read PDF files efficiently

🧠 Natural Language Processing
Sentence-BERT (SBERT) - Convert legal texts and user queries into semantic embeddings

🔍 Semantic Search
FAISS (Facebook AI Similarity Search) - Retrieve top 5 most relevant documents based on vector similarity

🤖 AI Summarization
Gemini API (Google AI) - Generate intelligent summaries of the top-matched judgments

🗄️ Data Storage & Backend
SQLite - Store OCR-processed text and corresponding embeddings

Flask (Python) - Serve the backend logic and integrate all components

🛠️ Development Environment
Python - Core language across all modules

Prompt Engineering + AI Tools (ChatGPT, Gemini) - For building and debugging without prior coding expertise`
  }
  // Add more projects as needed
];

export const experiences: ExperienceBlog[] = [
  {
    id: "1",
    title: "One of top 70 teams from over 4000+ teams across South India",
    date: "23rd to 27th September 2024",
    category: 'Bootcamp',
    // --- Use the imported image variables ---
    thumbnail: bootcampThumbnail,
    summary: "A 5-day bootcamp about Innovation,Development & Enterpreneurship (IDE) organized by All India Council for Technical Education (AICTE)  and the MoE's Innovation Cell, in partnership with the Wadhwani Foundation, at Amal Jyothi College of Engineering kanjirappally, Kerala.",
    content: `Fueling Innovation and Entrepreneurship: A Life-Changing Experience at the IDE Bootcamp
Imagine five days filled with creativity, collaboration, and intense brainstorming all focused on turning ideas into impactful ventures. That’s exactly what I experienced at the Innovation, Design, and Entrepreneurship (IDE) Bootcamp, organized by the All India Council for Technical Education (AICTE)  and the MoE's Innovation Cell, in partnership with the Wadhwani Foundation, at Amal Jyothi College of Engineering from 23rd to 27th September 2024.

These five days were nothing short of transformative. We dove deep into the intricacies of the startup ecosystem, learning not just how to develop ideas, but how to fine-tune them, overcome challenges, and present them confidently. The bootcamp provided us with constructive feedback and a fresh perspective, pushing our team to innovate fearlessly and believe in our potential.

One of the standout moments for me was the series of powerful sessions led by Dr Ruchi Gautam Pant, whose energy was truly contagious! Mam the quote you shared with all of us "इसमें तेरा घटा मेरा कुछ नहीं जाता" has not only paved a way for a new perspective but also taught us to get the most out of the opportunities we have Infront of us. Your insights on entrepreneurship and idea development were invaluable, and on a personal note, it was such a delight when she complimented my dress—her warmth made the experience all the more memorable!

Another highlight was the amazing connections I made, including exciting new friends like Oneela Gopi from Kasargod, Reffino D and Arun Kumar from Tamil Nadu, whose innovative idea won the award for the best concept. Their creativity and passion inspired everyone in the room and made the whole experience even richer.

I also want to extend a huge thanks to sherin Sam Jose and the dedicated team at Amal Jyothi College of Engineering, especially Alan Thomas Shaji, for flawlessly organizing this life-changing event. Your hard work ensured we left the bootcamp not only more knowledgeable but truly motivated to pursue our entrepreneurial dreams.

As we continue to build on the momentum of this bootcamp, my team and I are energized and ready to take the next steps in our venture. The IDE Bootcamp has been a pivotal experience for us, and YES I’m beyond grateful for the opportunity.`,
    // --- Use the imported image variables in the array ---
    images: [
      img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12
    ],
    // videoUrl: "..." // Optional video link
  },
  {
    id: "2",
    title: "10 Hour Hackathon Conducted by CODIAC as part of INNERVE'25 at College of Engineering Muttathara",
    date: "8th March 2025",
    category: 'Hackathon',
    // --- Use the imported image variables ---
    thumbnail: codequest,
    summary: "🚀 CODEQUEST 2025: One More Step Closer to Success",
    content: `On March 8th, 2025, I had one of the most intense and rewarding experiences of my journey so far—participating in CODEQUEST 2025, a 10-hour hackathon held during INNERVE’25 by CODIAC, the Association of Computer Science & Engineering at the College of Engineering Muttathara.

With three problem statements to choose from, Team X'MVP—that’s me (Aman Xavier), Bhawana, and Jagajith—set our sights on something that truly matters: reducing delays for emergency vehicles stuck in traffic. 🚑🚦

We knew that in just 10 hours, building a full-fledged system wasn't feasible. So instead, we focused on delivering a clear, visual, and impactful concept:

🎨 A clean UX/UI to demonstrate how the system would work in real life

🎞 An animated walkthrough that visually captured the flow and solution

🌐 A demo website to tie it all together

Watch our concept in action: 

The pressure? Real. The brainstorming? Non-stop. The learning? Next level. We kept sketching, refining, and pushing boundaries. And when we finally presented, the feedback was electric. The evaluators loved our approach, especially how we conveyed a complex AI-driven traffic solution in such a digestible format.

Major kudos to Dany Stephen, Akhil MS, Ishma, and Nayan—they absolutely crushed it and took home 2nd place! 🏆 Massive respect to them.

And of course, a huge shoutout to our hackathon coordinators: Sandeep Kumar Santhosh S, Nayan SS, and Clifin Cletus, and the ever-dedicated IEDC CEM for organizing an event that truly encouraged innovation, creativity, and hustle. 🙌`,
    // --- Use the imported image variables in the array ---
    images: [ img14, img15, img16, img17, img18
      
    ],
   videoUrl: "https://youtu.be/2RIk9lUuLoM?si=aRk78Iq7FGZE-vR8" // videoUrl: "..." // Optional video link
  },
  // Add more experiences as needed
  {
    id: "3",
    title: "2 Day Hackathon Conducted by Kerala University of Digital Sciences, Innovation and Technology",
    date: "15th to 16th March 2025",
    category: 'Hackathon',
    // --- Use the imported image variables ---
    thumbnail: innovatex,
    summary: "🧑‍💻Hackathon where Vybe Coding played a significant Role(INNOVATEX)",
    content: `A weekend of learning, building, and pushing limits — INNOVATEX 2025 was an experience I’ll carry forward.
On March 15th & 16th, I participated in INNOVATEX 2025, a 2-day AI-focused hackathon hosted by Kerala University of Digital Sciences, Innovation and Technology at Technopark Phase IV, Trivandrum.
Our challenge was to take a raw dataset of court judgments — much of it scanned and unstructured — and build something that could make legal exploration faster, smarter, and more accessible.
We were a team of three:
 👨‍💻 Myself – Aman Xavier
 🤝 Rahul V K
 🧠 Akhil Ms 
No prior experience in advanced AI development or backend systems. But we were clear on two things:
What we wanted to solve
That we were willing to learn every step of the way
What we built in under 48 hours:
🔹 An OCR pipeline to read and convert scanned legal documents into machine-readable text
 🔹 BERT-based NLP to understand and structure the legal content
 🔹 A FAISS vector index to power intelligent semantic search
 🔹 SQLite for local data management and fast retrieval
 🔹 A simple but effective web interface to explore the content
 🔹 An AI chatbot which used Gemini's Api(in progress) to summarize judgments and guide users through legal queries.
We followed a RAG (Retrieval-Augmented Generation) approach to make our tool more context-aware and relevant — something we had only read about before, but applied here for the first time.
This project was more than just a hackathon entry. It was a deep dive into how AI can support legal infrastructure — from digitization to accessibility. And it showed us what’s possible when curiosity meets commitment.
📍 You can view our demo here:(The AI is not integrated into the website)
 Website: https://lnkd.in/gfeHBAAh
Grateful to Digital University Kerala and all the mentors and peers who created such an open, high-energy environment.
This is just the beginning. I’m excited to keep building, keep learning, and contribute to AI solutions that solve real-world problems.`,
    // --- Use the imported image variables in the array ---
    images: [ img20, img21, img22, img23, img24, img25, img26, img27, img28
    ],
   videoUrl: "https://www.youtube.com/watch?v=V_JoMsihbaw&feature=youtu.be" // videoUrl: "..." // Optional video link
  },
  // Add more experiences as needed
  {
    id: "4",
    title: "Conducting Quiz and AI Prompt Magic at INNERVE'25",
    date: "6th and 7th March 2025",
    category: 'Facilitation',
    // --- Use the imported image variables ---
    thumbnail: quiz,
    summary: 'From Prompts to Pop Quizzes — The INNERVE’25 Experience',
    content: `INNERVE’25 was more than just a tech fest — it was a stage for creativity, coordination, and continuous learning. I had the privilege of coordinating two key events: AI Prompt Magic and the Quiz Competition, held on April 6th and 7th, respectively. Each event brought its own set of challenges, insights, and moments to grow.

AI Prompt Magic — April 6
This was a brand-new competition introduced for the first time at INNERVE. The concept: participants were shown an image and asked to recreate something strikingly similar using only their prompt engineering skills. It wasn’t about technical perfection — it was about creativity, clarity, and control over language models.

Coordinating this event alongside Rahul V K, Pardhiv Suresh M Suresh, and Naveen Unni was an incredible experience. From setting the rules to evaluating AI-generated results, we focused on making the competition engaging, accessible, and future-facing — capturing what prompt engineering is truly about.

Quiz Competition — April 7
This was one of the most awaited and well-attended events of INNERVE’25. With three rapid-fire rounds, the Quiz Competition tested not only participants’ knowledge but also our team's coordination and problem-solving skills.

A last-minute venue switch due to overwhelming participation numbers demanded quick decision-making and seamless communication — both of which were executed successfully thanks to the support of Rahul V K, Vaishnav Dileep, and our faculty coordinator Rekha Ma’am. What began as a logistical challenge turned into one of the event’s highlights.

Behind the Scenes
From conceptualizing formats to managing unexpected hurdles, every moment added to the learning curve. The late-night prep sessions, decoration efforts, and evaluation rounds strengthened my ability to plan, adapt, and lead. These experiences not only improved my organizational skills but also deepened my appreciation for teamwork and attention to detail.

On the side, I also took part in the Reverse Coding and Debugging events. While my performance revealed that my coding skills have room for improvement, it also served as a reminder: awareness is the first step to growth.

Final Thoughts
INNERVE’25 offered more than just a platform to host events — it offered a space to learn, reflect, and evolve. Each event brought unique lessons in leadership, communication, and technical clarity.

📽️ I’m sharing recap playlist links from the Quiz Competition below. The energy, participation, and enthusiasm were truly something to remember — and I’m proud to have been a part of it.

`,
    // --- Use the imported image variables in the array ---
    images: [ img29, img31, img32, img33, img34, img30 ],
    videoUrl: "https://www.youtube.com/playlist?list=PLcKBwbu9V2Hm8r6uW1YJmhk7SluzMJ_Zk"
  },
  // Add more experiences as needed
];

// --- Add a new array for Certifications ---
export const certifications: Certificate[] = [
  {
    id: 'cybersecurity', // Use a meaningful, unique ID
    title: 'Career Essentials in Cybersecurity by Microsoft and Linkedin',
    imageUrl: myCertImage, // Use imported variable or path like '/certificates/tcs-cert.png' if in public folder
    issuedBy: 'Microsoft and Linkedin',
  },
  {
    id: 'AI',
    title: 'Career Essentials in GenerativeAI by Microsoft and Linkedin',
    // Replace with your actual imported image variable
    imageUrl: cert1, // Using placeholder path for now
    issuedBy: 'Microsoft and Linkedin',
  },
  {
    id: 'YoungProfessional',
    title: 'TCS iON Career Edge Young Professional',
    // Replace with your actual imported image variable
    imageUrl: cert2, // Using placeholder path for now
    issuedBy: 'Tata Consultancy Services',
  },
  // Add more certificate objects here
  {
    id: 'GenAi',
    title: 'Build Your Generative AI productivity skills with Microsoft and Linkedin',
    // Replace with your actual imported image variable
    imageUrl: cert3, // Using placeholder path for now
    issuedBy: 'Microsoft and Linkedin',
  },
  // Add more certificate objects here
];
