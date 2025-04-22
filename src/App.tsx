import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
// import { Footer } from './components/Footer'; // Keep commented out
import { GlowingCursor } from './components/GlowingCursor';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';
import { ExperienceBlogPage } from './pages/ExperienceBlogPage';
import { CertificatePage } from './pages/CertificatePage';
import { Sections } from './components/Sections';
import { Toaster } from 'react-hot-toast';
import { MatrixBackground } from './components/Background';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  const [isInitialTheme, setIsInitialTheme] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialTheme(false);
    }, 300); // Reduced delay to 300ms
    return () => clearTimeout(timer);
  }, []);

  return (
    <HashRouter>
      {/* Initial Theme Overlay */}
      <div
        className={`fixed inset-0 z-[40] bg-black transition-opacity duration-300 ease-in-out ${
          isInitialTheme ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      <MatrixBackground />
      <ScrollToTop />
      <GlowingCursor />
      <Navbar />
      <Toaster position="bottom-center" />

      <main className="text-gray-100 min-h-screen relative z-10">
        <Routes>
          <Route path="/" element={<Sections key="home" />} />
          <Route path="/project/:id" element={<ProjectDetailsPage />} />
          <Route path="/experience/:id" element={<ExperienceBlogPage />} />
          <Route path="/certificate/:id" element={<CertificatePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
