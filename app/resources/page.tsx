import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Resources() {
  const industries = [
    {
      name: "HVAC",
      slug: "google-ads-for-hvac",
      description: "Generate consistent heating and cooling leads year-round",
      articles: [
        { title: "HVAC Lead Generation Strategies", slug: "hvac/hvac-lead-generation-strategies" }
      ]
    },
    {
      name: "Plumbing",
      slug: "google-ads-for-plumbing",
      description: "Capture emergency and scheduled plumbing leads",
      articles: []
    },
    {
      name: "Electrical",
      slug: "google-ads-for-electrical",
      description: "Generate residential and commercial electrical leads",
      articles: []
    },
    {
      name: "Roofing",
      slug: "google-ads-for-roofing",
      description: "High-quality roofing leads and project opportunities",
      articles: []
    },
    {
      name: "Landscaping",
      slug: "google-ads-for-landscaping",
      description: "Design and maintenance clients for your landscaping business",
      articles: []
    },
    {
      name: "Home Remodeling",
      slug: "google-ads-for-home-remodeling",
      description: "High-ticket remodeling project leads",
      articles: []
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Google Ads Resources
          </h1>
          <p className="text-xl text-gray-600">
            Expert guides, strategies, and insights for service businesses looking to master Google Ads and generate more qualified leads.
          </p>
        </div>
      </section>

      {/* Industry Guides */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Google Ads Guides by Industry
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <Link
                  href={`/${industry.slug}`}
                  className="text-blue-600 font-semibold hover:text-blue-700 inline-block mb-4"
                >
                  View {industry.name} Guide →
                </Link>

                {industry.articles.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Related Articles:</h4>
                    <ul className="space-y-1">
                      {industry.articles.map((article, articleIndex) => (
                        <li key={articleIndex}>
                          <Link
                            href={`/resources/${article.slug}`}
                            className="text-sm text-blue-600 hover:text-blue-700"
                          >
                            {article.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Browse by Topic
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Campaign Types</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Search Ads</li>
                <li>Local Service Ads</li>
                <li>Display & Remarketing</li>
                <li>Call-Only Campaigns</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lead Generation</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Location Targeting</li>
                <li>Mobile Optimization</li>
                <li>Emergency Services</li>
                <li>Seasonal Strategies</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Optimization</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Landing Pages</li>
                <li>Conversion Tracking</li>
                <li>Lead Quality</li>
                <li>Call Tracking</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Budget & Strategy</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Budget Planning</li>
                <li>Bidding Strategies</li>
                <li>CPL Optimization</li>
                <li>ROAS Analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Generate More Leads?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free Google Ads audit and discover opportunities specific to your industry.
          </p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
            Get Your Free Audit
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
