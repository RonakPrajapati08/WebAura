import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechFlow Inc.',
    content: 'Apex Digital transformed our online presence completely. The website they built not only looks stunning but has increased our lead generation by 180%. Their attention to detail and professionalism is unmatched.',
    rating: 5,
    avatar: 'SJ'
  },
  {
    name: 'Michael Chen',
    role: 'Founder, Luxe Fashion',
    content: 'Working with this team was an absolute pleasure. They took the time to understand our brand and delivered an e-commerce platform that exceeded our expectations. Our online sales have tripled!',
    rating: 5,
    avatar: 'MC'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, GreenLife',
    content: 'The results speak for themselves. Our website traffic increased by 250% within three months of launch. The team\'s expertise in SEO and user experience design is truly impressive.',
    rating: 5,
    avatar: 'ER'
  },
  {
    name: 'David Thompson',
    role: 'VP Operations, FinTrack',
    content: 'Best investment we\'ve made for our business. The custom dashboard they developed has streamlined our operations and saved us countless hours. Highly recommend their services!',
    rating: 5,
    avatar: 'DT'
  },
  {
    name: 'Lisa Park',
    role: 'Owner, FoodHub',
    content: 'From concept to launch, the team was with us every step of the way. Our app has over 50,000 downloads and counting. Their technical expertise and creative vision are outstanding.',
    rating: 5,
    avatar: 'LP'
  },
  {
    name: 'James Wilson',
    role: 'Director, EduLearn',
    content: 'They didn\'t just build us a website; they built us a platform for growth. The learning management system is intuitive, scalable, and our students love it. Exceptional work!',
    rating: 5,
    avatar: 'JW'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <Quote className="w-10 h-10 text-blue-600 opacity-50 mb-4" />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Join 100+ Happy Clients</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's create something amazing together.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
}
