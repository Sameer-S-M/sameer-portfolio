const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="space-y-6 text-gray-600">
            <p className="animate-fade-in">
              As a Computer Science graduate, I’ve built a solid foundation in machine learning, AI, computer vision, and databases. My academic and project experience reflect a strong interest in applying these technologies to real-world problems.
            </p>
            <p className="animate-fade-in animation-delay-200">
              I’ve worked on projects involving deep learning, object detection, federated learning, and data analysis. Alongside this, I’ve gained a basic understanding of databases to support my work with structured data.
            </p>
            <p className="animate-fade-in animation-delay-400">
              Curious and driven, I enjoy exploring impactful tech and continuously learning. I look forward to contributing to meaningful, tech-driven projects in collaborative environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
