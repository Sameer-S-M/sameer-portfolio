
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
          Contact Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Mail className="w-6 h-6 text-purple-600" />
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <a href="mailto:sameermansur2004@gmail.com" className="text-purple-600 hover:text-purple-700">
                    sameermansur2004@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Phone className="w-6 h-6 text-purple-600" />
                <div>
                  <h4 className="font-medium text-gray-800">Phone</h4>
                  <a href="tel:+919481982103" className="text-purple-600 hover:text-purple-700">
                    +91-9481982103
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <MapPin className="w-6 h-6 text-purple-600" />
                <div>
                  <h4 className="font-medium text-gray-800">Location</h4>
                  <p className="text-gray-600">Hubli, Karnataka, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Linkedin className="w-6 h-6 text-purple-600" />
                <div>
                  <h4 className="font-medium text-gray-800">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/sameer-s-mansur/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700"
                  >
                    Sameer S Mansur
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Portfolio Topic</h3>
              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Course Name</dt>
                  <dd>Algorithmic Problem Solving</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Course Code</dt>
                  <dd>24ECSE309</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">SRN</dt>
                  <dd>01FE22BCS112</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Course Instructor</dt>
                  <dd>Prakash Hegade</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">University</dt>
                  <dd>KLE Technological University</dd>
                </div>
              </dl>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
