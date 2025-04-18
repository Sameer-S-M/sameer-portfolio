const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
          Education
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {/* B.Tech */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                B.Tech. in Computer Science & Engineering
              </h3>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                2022 - 2026
              </span>
            </div>
            <p className="text-gray-600 mb-2">KLE Technological University, Hubli</p>
            <p className="text-lg font-medium text-purple-600">
              CGPA: 9.50 
            </p>
          </div>

          {/* Pre-University */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Pre-University (PU)
              </h3>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                2020 - 2022
              </span>
            </div>
            <p className="text-gray-600 mb-2">
              Shri Vidya P Hanchinmani PU Science College, Dharwad
            </p>
            <p className="text-lg font-medium text-purple-600">
              Percentage: 94.7%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
