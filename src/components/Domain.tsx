import { Brain, Briefcase, Info, Star } from 'lucide-react';

const Domain = () => {
  return (
    <section id="domain" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Chosen Domain */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <Brain className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800">Chosen Domain: Microsoft</h3>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Info className="w-5 h-5 text-blue-600" />
                  <h4 className="text-lg font-semibold text-gray-800">What is Microsoft?</h4>
                </div>
                <p className="text-gray-600">
                  Microsoft is a global technology leader that develops software, hardware, and cloud services, with a strong focus on integrating AI into various business and consumer solutions. They work on everything from enterprise solutions to consumer software, with AI driving innovation in applications like productivity tools, gaming, and intelligent systems.
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Star className="w-5 h-5 text-purple-600" />
                  <h4 className="text-lg font-semibold text-gray-800">Key Highlights</h4>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                    <span>Focus on cloud-based AI solutions for enterprises</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                    <span>Leading AI research with real-world applications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                    <span>Creator of Azure AI and GPT-based tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                    <span>Competes with Google, AWS, and IBM Watson</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Business Use Cases */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <Briefcase className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-800">Business Use Cases</h3>
            </div>

            <div className="space-y-6 text-gray-600">
              {/* Retail Automation */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">AI-Driven Automation for Retail</h4>
                <ul className="space-y-1">
                  <li>• $2.5B Market Potential</li>
                  <li>• 2-3 Years ROI Timeline</li>
                  <li>• Real-time object detection for product identification</li>
                  <li>• Personalized recommendations using customer data</li>
                  <li>• Automated checkout and fraud detection systems</li>
                </ul>
              </div>

              {/* Federated Learning for Healthcare */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Federated Learning for Healthcare</h4>
                <ul className="space-y-1">
                  <li>• $3.1B Market Potential</li>
                  <li>• 3-5 Years ROI Timeline</li>
                  <li>• Secure data sharing for improved diagnostics</li>
                  <li>• Personalized treatments with federated model training</li>
                  <li>• Privacy-preserving AI with edge computing</li>
                </ul>
              </div>

              {/* Workforce Optimization */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">AI-Powered Workforce Optimization</h4>
                <ul className="space-y-1">
                  <li>• $1.9B Market Potential</li>
                  <li>• 1-2 Years ROI Timeline</li>
                  <li>• Real-time performance tracking and upskilling</li>
                  <li>• Predictive scheduling and forecasting</li>
                  <li>• AI-driven engagement and retention</li>
                </ul>
              </div>

              {/* Smart City Solutions */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Smart City Solutions with AI Integration</h4>
                <ul className="space-y-1">
                  <li>• $4.3B Market Potential</li>
                  <li>• 4-5 Years ROI Timeline</li>
                  <li>• AI-powered traffic and public transport management</li>
                  <li>• Smart grids and energy optimization</li>
                  <li>• Predictive urban planning and analytics</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Domain;
