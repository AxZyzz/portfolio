import { useParams, Link } from 'react-router-dom';
import { certifications } from '../data/sampleData';
import { ArrowLeft } from 'lucide-react';

export function CertificatePage() {
  const { id } = useParams<{ id: string }>();
  const certificate = certifications.find((cert) => cert.id === id);

  if (!certificate) {
    return (
      <div className="relative z-10 min-h-screen pt-20 pb-16 flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-2xl text-red-400 mb-4">Certificate Not Found</h2>
        <Link
          to="/#certifications"
          className="inline-flex items-center text-emerald-300 hover:text-emerald-200 border border-emerald-500/50 px-4 py-2 rounded-lg glow-effect transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Certifications
        </Link>
      </div>
    );
  }

  return (
    <div className="relative z-10 min-h-screen pt-20 pb-16 flex flex-col items-center px-4">
      {/* Back Button */}
      <div className="w-full max-w-4xl mb-8">
        <Link
          to="/#certifications"
          className="inline-flex items-center text-emerald-300 hover:text-emerald-200 border border-emerald-500/50 px-4 py-2 rounded-lg glow-effect transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Certifications
        </Link>
      </div>

      {/* Container for the certificate box */}
      <div className="max-w-4xl w-full">
        <div className="relative bg-black/30 backdrop-blur-md rounded-lg p-4 md:p-6 border border-emerald-500/30 glow-effect overflow-hidden">
          {/* Certificate Image */}
          <img
            src={certificate.imageUrl}
            alt={certificate.title}
            className="w-full h-auto rounded-md object-contain" // Use object-contain to prevent distortion
          />
        </div>

        {/* Certificate Title and Issuer below the image box */}
        <div className="mt-6 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-emerald-300 mb-2">
            {certificate.title}
          </h1>
          {certificate.issuedBy && (
            <p className="text-lg text-gray-400">
              Issued by: {certificate.issuedBy}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
