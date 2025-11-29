import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Google Ads Services
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive Google Ads management tailored for local service businesses who need a steady stream of qualified leads.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {/* Service 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-semibold text-sm mb-4">
                  Most Popular
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Google Search Ads
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Capture customers at the exact moment they're searching for your services. Search ads put you at the top of Google when prospects are ready to buy.
                </p>
                <ul className="space-y-3">
                  {[
                    "Keyword research and selection",
                    "Competitor analysis and bidding strategy",
                    "Ad copywriting and A/B testing",
                    "Negative keyword management",
                    "Location-based targeting",
                    "Call extension and sitelink optimization"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-4xl font-bold text-blue-600 mb-2">$1,500/mo</div>
                  <div className="text-gray-600 mb-4">Starting at</div>
                  <div className="text-sm text-gray-500 mb-4">Plus ad spend (recommended minimum $1,500/mo)</div>
                  <Link href="/contact" className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full font-semibold text-sm mb-4">
                  High Converting
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Local Service Ads
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Get the Google Guarantee badge and appear at the very top of search results. Perfect for home service businesses.
                </p>
                <ul className="space-y-3">
                  {[
                    "Profile setup and verification",
                    "Review management and optimization",
                    "Job type and service area configuration",
                    "Budget management and bid optimization",
                    "Lead tracking and quality monitoring",
                    "Dispute management for invalid leads"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg lg:order-1">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-4xl font-bold text-green-600 mb-2">$800/mo</div>
                  <div className="text-gray-600 mb-4">Starting at</div>
                  <div className="text-sm text-gray-500 mb-4">Pay per lead (typically $15-$100 per lead)</div>
                  <Link href="/contact" className="block text-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full font-semibold text-sm mb-4">
                  Maximize ROI
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Display Remarketing
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Stay top-of-mind with prospects who visited your site but didn't convert. Remarketing ads bring them back when they're ready.
                </p>
                <ul className="space-y-3">
                  {[
                    "Pixel installation and audience creation",
                    "Custom display ad design",
                    "Strategic audience segmentation",
                    "Frequency capping to avoid ad fatigue",
                    "Cross-device targeting",
                    "Performance optimization"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-purple-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-4xl font-bold text-purple-600 mb-2">$700/mo</div>
                  <div className="text-gray-600 mb-4">Starting at</div>
                  <div className="text-sm text-gray-500 mb-4">Plus ad spend (recommended minimum $500/mo)</div>
                  <Link href="/contact" className="block text-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Landing Page Design",
                description: "Custom landing pages designed to convert visitors into leads with compelling copy and clear CTAs.",
                price: "From $500"
              },
              {
                title: "Call Tracking",
                description: "Track phone calls from your ads to understand which campaigns and keywords drive the most revenue.",
                price: "From $99/mo"
              },
              {
                title: "Conversion Rate Optimization",
                description: "A/B testing, heat mapping, and user behavior analysis to maximize conversions from your existing traffic.",
                price: "From $800/mo"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-blue-600 font-semibold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included With Every Package
            </h2>
            <p className="text-xl text-gray-600">
              You get everything you need for successful Google Ads campaigns
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Account setup & configuration",
              "Monthly strategy calls",
              "Weekly performance reports",
              "Conversion tracking setup",
              "Ongoing campaign optimization",
              "A/B testing of ad creative",
              "Competitor monitoring",
              "Dedicated account manager"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-blue-600 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery Call",
                description: "We discuss your business goals, target customers, and current marketing efforts."
              },
              {
                step: "02",
                title: "Strategy Development",
                description: "I create a customized Google Ads strategy based on your market and competition."
              },
              {
                step: "03",
                title: "Campaign Launch",
                description: "Campaigns go live with careful monitoring to ensure everything is tracking correctly."
              },
              {
                step: "04",
                title: "Optimize & Scale",
                description: "Continuous testing and optimization to improve performance and scale what works."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-blue-300 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready To Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a free consultation to discuss which services are right for your business.
          </p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
