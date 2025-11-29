import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About LeadGen Ads
          </h1>
          <p className="text-xl text-gray-600">
            Hi, I'm a Google Ads specialist dedicated to helping service-based businesses grow through strategic, data-driven advertising.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
            <p className="text-gray-700 mb-4">
              I started my career working at a digital marketing agency where I managed Google Ads campaigns for dozens of clients across various industries. While I enjoyed the work, I noticed a pattern: service-based businesses were often overlooked or treated as "easy accounts" by agencies focused on e-commerce and tech companies.
            </p>
            <p className="text-gray-700 mb-4">
              I saw an opportunity to specialize in something I was passionate about—helping local service businesses compete in the digital space. After managing over $2M in ad spend and generating thousands of leads for service companies, I decided to go solo and focus exclusively on this niche.
            </p>
            <p className="text-gray-700 mb-4">
              Today, I work with HVAC companies, plumbers, electricians, roofers, landscapers, and other home service businesses to create Google Ads campaigns that actually drive revenue. I'm not interested in vanity metrics or fluffy reports—I care about leads, conversions, and ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why I'm Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "I Specialize in Service Businesses",
                description: "I don't work with e-commerce, SaaS, or B2B tech companies. I focus exclusively on local service businesses because I understand the unique challenges you face."
              },
              {
                title: "No Long-Term Contracts",
                description: "I earn your business every month. If I'm not delivering results, you can cancel anytime. I believe in proving my value through performance, not contracts."
              },
              {
                title: "Transparent Reporting",
                description: "You'll always know exactly how your campaigns are performing. No hiding behind vanity metrics—I report on what matters: leads, cost per lead, and ROI."
              },
              {
                title: "Hands-On Management",
                description: "When you work with me, you work with me. No junior account managers, no offshore teams. I personally manage every campaign."
              },
              {
                title: "Industry Experience",
                description: "I've worked with hundreds of service businesses and understand what works in your industry. I bring that knowledge to every campaign."
              },
              {
                title: "Focus on Quality, Not Quantity",
                description: "More leads aren't always better. I optimize for lead quality so you're not wasting time on tire-kickers and price shoppers."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Certifications & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Google Ads Search Certification",
              "Google Ads Display Certification",
              "Google Analytics Individual Qualification",
              "Local Service Ads Expert",
              "Landing Page Optimization Specialist",
              "Conversion Rate Optimization Professional"
            ].map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span className="text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-blue-600 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">Results-Driven</h3>
              <p className="text-blue-100">
                I'm measured by one thing: results. Everything I do is focused on driving qualified leads and revenue for your business.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-3">Transparent</h3>
              <p className="text-blue-100">
                No smoke and mirrors. You'll always know what I'm doing, why I'm doing it, and how it's performing.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-3">Partnership</h3>
              <p className="text-blue-100">
                I view our relationship as a partnership. Your success is my success, and I'm invested in your long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How I Work
          </h2>
          <div className="space-y-8">
            {[
              {
                title: "Strategic Planning",
                description: "Every campaign starts with strategy. I take time to understand your business, market, competitors, and goals before launching anything."
              },
              {
                title: "Data-Driven Decisions",
                description: "I let data guide my decisions, not gut feelings. Every change is tested, measured, and optimized based on real performance data."
              },
              {
                title: "Continuous Optimization",
                description: "Google Ads is not set-it-and-forget-it. I actively monitor and optimize campaigns daily to maximize performance."
              },
              {
                title: "Clear Communication",
                description: "You'll never wonder what's happening with your campaigns. I provide regular updates, monthly reports, and I'm always available for questions."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Talk About Your Business
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a free consultation to discuss your goals and see if we're a good fit.
          </p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
            Schedule Your Free Call
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
