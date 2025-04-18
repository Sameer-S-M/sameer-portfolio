import { FileText } from 'lucide-react';

const CVSection = () => {
  return (
    <section id="cv" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
          <div className="flex justify-center items-center gap-4 mb-6">
            <FileText className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-800">My Resume</h3>
          </div>

          <p className="text-gray-600 mb-6">
            Download a copy of my resume to explore my professional experience, education, and skills in detail.
          </p>

          <a
            href="/Sameer-portfolio-main/Sameer_s_Resume (1).pdf" // 📁 Make sure your CV is saved in the `public` folder as `cv.pdf`
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-white bg-purple-600 hover:bg-purple-700 rounded-xl text-lg font-semibold transition"
          >
            View / Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
