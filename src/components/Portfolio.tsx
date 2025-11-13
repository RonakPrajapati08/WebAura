import { ExternalLink, TrendingUp } from 'lucide-react';

const projects = [
  {
    title: 'TechFlow SaaS Platform',
    category: 'Web Application',
    description: 'A comprehensive project management tool with real-time collaboration features.',
    results: '+185% user engagement, 40% faster task completion',
    color: 'from-blue-500 to-cyan-400',
    tags: ['React', 'Node.js', 'WebSocket']
  },
  {
    title: 'Luxe Fashion E-Commerce',
    category: 'E-Commerce',
    description: 'High-end fashion retail platform with AR try-on and personalized recommendations.',
    results: '+240% conversion rate, 3x revenue increase',
    color: 'from-pink-500 to-rose-400',
    tags: ['E-Commerce', 'AR', 'AI']
  },
  {
    title: 'GreenLife Wellness',
    category: 'Corporate Website',
    description: 'Modern wellness center website with online booking and telehealth integration.',
    results: '+320% online bookings, 95% client satisfaction',
    color: 'from-green-500 to-emerald-400',
    tags: ['WordPress', 'Booking System', 'SEO']
  },
  {
    title: 'FinTrack Analytics',
    category: 'Dashboard',
    description: 'Financial analytics dashboard with advanced data visualization and reporting.',
    results: '50% faster decision-making, real-time insights',
    color: 'from-orange-500 to-amber-400',
    tags: ['Vue.js', 'D3.js', 'API']
  },
  {
    title: 'FoodHub Delivery',
    category: 'Mobile App',
    description: 'Food delivery app with live tracking, in-app payments, and loyalty rewards.',
    results: '50k+ downloads, 4.8★ rating',
    color: 'from-red-500 to-orange-400',
    tags: ['React Native', 'GPS', 'Payments']
  },
  {
    title: 'EduLearn Platform',
    category: 'Learning Management',
    description: 'Interactive online learning platform with video courses and progress tracking.',
    results: '10k+ students, 92% completion rate',
    color: 'from-violet-500 to-purple-400',
    tags: ['LMS', 'Video', 'Gamification']
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results for real businesses. See how we've helped our clients succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} relative`}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="absolute top-4 right-4">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110 transform" aria-label='ExternalLink'>
                    <ExternalLink className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex items-start space-x-2 bg-green-50 p-3 rounded-lg mb-4">
                  <TrendingUp className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-green-700 font-medium">{project.results}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
