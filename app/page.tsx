import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Turn Google Ads Into A{" "}
              <span className="text-blue-600">Predictable Lead Machine</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              I help service-based businesses dominate their local market with laser-targeted Google Ads campaigns that generate qualified leads while you sleep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition">
                Get Your Free Audit
              </Link>
              <Link href="/case-studies" className="bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition">
                View Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$2M+</div>
              <div className="text-gray-600">Ad Spend Managed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Qualified Leads Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4.2x</div>
              <div className="text-gray-600">Average ROAS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Are You Struggling With Any Of These?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Wasting money on clicks that never convert",
              "Getting outbid by competitors with bigger budgets",
              "No time to manage and optimize campaigns daily",
              "Leads coming in but they're not the right fit",
              "Previous agencies over-promised and under-delivered",
              "Can't track which ads actually drive revenue"
            ].map((problem, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
                  <span className="text-red-600 text-sm">✗</span>
                </div>
                <p className="text-gray-700">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-blue-600 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Here's How I Can Help
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              I specialize in local lead generation for service businesses. No fluff, no wasted spend—just campaigns that convert clicks into customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Local Targeting",
                description: "Laser-focused campaigns that reach your ideal customers in your service area"
              },
              {
                title: "Conversion Optimization",
                description: "Constantly testing and refining to maximize your return on ad spend"
              },
              {
                title: "Transparent Reporting",
                description: "Clear, actionable insights so you always know where your money is going"
              }
            ].map((item, index) => (
              <div key={index} className="bg-blue-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What You Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Google Search Ads",
                description: "Capture high-intent customers actively searching for your services"
              },
              {
                title: "Local Service Ads",
                description: "Appear at the top with the Google Guarantee badge for maximum trust"
              },
              {
                title: "Display Remarketing",
                description: "Stay top-of-mind with prospects who have already shown interest"
              },
              {
                title: "Landing Page Optimization",
                description: "Convert more clicks into leads with high-converting landing pages"
              },
              {
                title: "Call Tracking & Analytics",
                description: "Track every lead source so you know exactly what's working"
              },
              {
                title: "Ongoing Management",
                description: "Daily monitoring and optimization to maximize your results"
              }
            ].map((service, index) => (
              <div key={index} className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="text-blue-600 font-semibold text-lg hover:text-blue-700">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Industries I Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "HVAC",
              "Plumbing",
              "Roofing",
              "Landscaping",
              "Electricians",
              "Home Remodeling",
              "Pest Control",
              "Cleaning Services"
            ].map((industry, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center font-medium text-gray-700 hover:shadow-md transition">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready To Scale Your Lead Generation?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free Google Ads audit and discover untapped opportunities in your market.
          </p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
            Claim Your Free Audit
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
