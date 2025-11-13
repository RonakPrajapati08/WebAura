import { Users, Award, Target, Heart } from 'lucide-react';

// const values = [
//   {
//     icon: Target,
//     title: 'Results That Drive Growth',
//     description:
//       'Every website we build is designed to generate <span class="text-blue-600 font-medium">leads</span>, boost <span class="text-blue-600 font-medium">visibility</span>, and deliver measurable <span class="text-blue-600 font-medium">business results</span> — helping your brand grow faster online.',
//   },
//   {
//     icon: Heart,
//     title: 'Client-Focused Approach',
//     description:
//       'We put your <span class="text-blue-600 font-medium">goals first</span>. From strategy to launch, our team works with you to build a site that builds <span class="text-blue-600 font-medium">trust</span> and <span class="text-blue-600 font-medium">engagement</span>.',
//   },
//   {
//     icon: Award,
//     title: 'Quality You Can Trust',
//     description:
//       'Our process focuses on <span class="text-blue-600 font-medium">performance</span>, <span class="text-blue-600 font-medium">security</span>, and <span class="text-blue-600 font-medium">modern design</span> — ensuring your website stands out and delivers excellence.',
//   },
//   {
//     icon: Users,
//     title: 'Collaborative Partnership',
//     description:
//       'We believe in <span class="text-blue-600 font-medium">teamwork</span> and <span class="text-blue-600 font-medium">transparency</span>. Together, we build <span class="text-blue-600 font-medium">digital success</span> that lasts.',
//   },
// ];
const values = [
  {
    icon: Target,
    title: 'Results That Drive Growth',
    description:
      'Every website we build is designed to generate <span class="text-blue-600 font-medium">real results</span>, boost your <span class="text-blue-600 font-medium">online visibility</span>, and create <span class="text-blue-600 font-medium">business growth</span> that truly matters.',
  },
  {
    icon: Heart,
    title: 'Client-Focused Approach',
    description:
      'We put your <span class="text-blue-600 font-medium">vision first</span>. From strategy to launch, we work closely with you to build <span class="text-blue-600 font-medium">trust</span>, inspire <span class="text-blue-600 font-medium">engagement</span>, and deliver what your audience loves.',
  },
  {
    icon: Award,
    title: 'Quality You Can Trust',
    description:
      'Our process ensures <span class="text-blue-600 font-medium">top-tier performance</span>, strong <span class="text-blue-600 font-medium">security</span>, and a <span class="text-blue-600 font-medium">modern, premium design</span> that sets your brand apart.',
  },
  {
    icon: Users,
    title: 'Collaborative Partnership',
    description:
      'We believe in <span class="text-blue-600 font-medium">true collaboration</span> and complete <span class="text-blue-600 font-medium">transparency</span> working hand in hand to build <span class="text-blue-600 font-medium">lasting digital success</span> for your brand.',
  },
];




export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your <span className="text-blue-500">Trusted</span> Digital Partner
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
              We are a <span className="text-blue-600 font-medium">results-driven web design and development agency</span> passionate about helping businesses grow online. Our team of creative designers, expert developers, and digital strategists build
              <span className="text-blue-600 font-medium"> high-performing websites</span> that attract customers, boost visibility, and deliver measurable results.
            </p>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
              Combining <span className="text-blue-600 font-medium">creative design</span> with <span className="text-blue-600 font-medium">technical excellence</span>, we ensure every project not only looks stunning but also performs flawlessly across all devices.
              We believe in long-term partnerships, guiding you at every step of your <span className="text-blue-600 font-medium">digital success journey</span>.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">3+</div>
                <div className="text-sm text-gray-600">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">20+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              {/* <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div> */}
            </div>
          </div>


          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl p-5 sm:p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Experienced & Certified Team</div>
                    <div className="text-blue-100 text-sm text-justify">
                      Our <span className="font-medium text-white">web developers</span> and <span className="font-medium text-white">UI/UX designers</span> bring years of industry experience to create websites that perform and convert.
                    </div>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Proven & Strategic Process</div>
                    <div className="text-blue-100 text-sm text-justify">
                      From planning to launch, we follow a <span className="font-medium text-white">result-oriented workflow</span> that ensures on-time delivery and <span className="font-medium text-white">pixel-perfect quality</span>.
                    </div>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Long-Term Support & Maintenance</div>
                    <div className="text-blue-100 text-sm text-justify">
                      We don’t just launch your website — we stay with you. Enjoy <span className="font-medium text-white">24/7 technical support</span>, regular updates, and continuous performance optimization.
                    </div>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Transparent Pricing & Honest Communication</div>
                    <div className="text-blue-100 text-sm text-justify">
                      We believe in <span className="font-medium text-white">complete transparency</span> — no hidden charges, clear timelines, and regular project updates to keep you informed and confident.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                <p
                  className="text-sm text-gray-600 leading-relaxed text-justify"
                  dangerouslySetInnerHTML={{ __html: value.description }}
                ></p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
