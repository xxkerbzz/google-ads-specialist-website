import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads for Plumbing Companies | Plumber Lead Generation",
  description: "Expert Google Ads for plumbers. Generate emergency and scheduled plumbing leads with proven strategies. Transparent pricing, no long-term contracts.",
  keywords: ["google ads for plumbing", "plumber advertising", "plumbing lead generation"],
};

export default function GoogleAdsForPlumbing() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-blue-600">Resources</Link>
            <span>/</span>
            <span className="text-gray-900">Google Ads for Plumbing</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold text-sm mb-4">
            Industry Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Google Ads for Plumbing Companies: Generate Quality Leads
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Capture emergency and scheduled plumbing leads with strategic Google Ads campaigns designed for plumbing contractors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center">
              Get Your Free Plumbing Ads Audit
            </Link>
            <Link href="/case-studies" className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition text-center">
              View Plumbing Results
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Plumbing emergencies happen 24/7, and when they do, customers search Google immediately. Our <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">Google Ads management</Link> helps plumbing companies capture both emergency calls and scheduled service leads.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Plumbing Companies Need Google Ads</h2>
            <p className="text-gray-700 mb-4">
              When someone searches "emergency plumber near me" at 2 AM, they need help NOW. Google Ads puts your plumbing company at the top of search results when potential customers are actively looking for services.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">Plumbing-Specific Challenges We Solve</h2>
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency vs Scheduled Services</h3>
                <p className="text-gray-700">Separate campaigns for urgent repairs vs planned installations with different messaging and bidding strategies.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Availability</h3>
                <p className="text-gray-700">Call-only campaigns optimized for mobile to capture emergency calls around the clock.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Area Targeting</h3>
                <p className="text-gray-700">Precise geographic targeting to focus on your coverage zones and avoid wasted spend.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Strategy for Plumbing Companies</h2>
            <p className="text-gray-700 mb-4">
              We create separate campaigns for different service types and customer intents, ensuring your ads reach the right customers at the right time.
            </p>

            {/* Case Study */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 my-8">
              <div className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                Success Story
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Premier Plumbing Solutions Results</h3>
              <p className="text-gray-700 mb-4">
                How we helped an Austin plumbing company generate 1,240 leads in 12 months with a 6.2x ROAS
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <div className="text-3xl font-bold text-green-600">1,240</div>
                  <div className="text-sm text-gray-600">Leads Generated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">$38</div>
                  <div className="text-sm text-gray-600">Avg Cost Per Lead</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">+340%</div>
                  <div className="text-sm text-gray-600">Call Volume</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">6.2x</div>
                  <div className="text-sm text-gray-600">ROAS</div>
                </div>
              </div>
              <Link href="/case-studies" className="text-blue-600 font-semibold hover:text-blue-700">
                Read Full Case Study →
              </Link>
            </div>

            {/* Services */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Plumbing Google Ads Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Call Campaigns</h3>
                <p className="text-gray-600 text-sm">Mobile-optimized call-only ads for urgent plumbing needs</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Service Ads</h3>
                <p className="text-gray-600 text-sm">Google Guaranteed status with priority placement</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Area Targeting</h3>
                <p className="text-gray-600 text-sm">Precise geographic targeting for your coverage zones</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Tracking</h3>
                <p className="text-gray-600 text-sm">Track every call back to specific ads and keywords</p>
              </div>
            </div>

            {/* Related Resources */}
            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                    → View Our Google Ads Services & Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 font-medium">
                    → Read More Plumbing Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium">
                    → Browse All Industry Guides
                  </Link>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-blue-600 text-white rounded-lg p-8 text-center mt-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Generate More Plumbing Leads?</h2>
              <p className="text-xl text-blue-100 mb-6">
                Get a free Google Ads audit customized for your plumbing business.
              </p>
              <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
                Get Your Free Plumbing Ads Audit
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
