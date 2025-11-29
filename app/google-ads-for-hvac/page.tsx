import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads for HVAC Companies | Generate More HVAC Leads",
  description: "Expert Google Ads management for HVAC companies. Generate qualified heating and cooling leads year-round. Proven strategies, transparent pricing, no contracts.",
  keywords: ["google ads for hvac", "hvac lead generation", "hvac google ads", "hvac advertising"],
};

export default function GoogleAdsForHVAC() {
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
            <span className="text-gray-900">Google Ads for HVAC</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold text-sm mb-4">
            Industry Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Google Ads for HVAC Companies: Complete Lead Generation Guide
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Generate consistent heating and cooling leads year-round with strategic Google Ads campaigns designed specifically for HVAC contractors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center">
              Get Your Free HVAC Ads Audit
            </Link>
            <Link href="/case-studies" className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition text-center">
              View HVAC Results
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              HVAC companies face unique marketing challenges—seasonal demand fluctuations, emergency service needs, and fierce local competition. Google Ads offers a powerful solution to generate qualified leads year-round, whether customers need immediate AC repair in summer or heating installation in winter.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              As a specialist in <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">Google Ads management for service businesses</Link>, I've helped HVAC companies generate thousands of leads with an average ROAS of 5.8x. This guide covers everything you need to know about using Google Ads to grow your HVAC business.
            </p>
          </section>

          {/* Why HVAC Companies Need Google Ads */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why HVAC Companies Need Google Ads</h2>
            <p className="text-gray-700 mb-4">
              When someone's air conditioner breaks down in the middle of summer, they don't browse Yellow Pages—they search Google immediately. Google Ads puts your HVAC company at the top of search results when potential customers are actively looking for services.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
              <h3 className="font-bold text-gray-900 mb-2">Key Advantage</h3>
              <p className="text-gray-700 mb-0">
                HVAC searches on Google have extremely high buyer intent. Someone searching "emergency AC repair near me" needs service now and is ready to call. Google Ads captures these high-value moments.
              </p>
            </div>

            <p className="text-gray-700">
              Unlike traditional advertising, Google Ads allows you to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 my-4">
              <li>Target specific service areas (within your coverage zones)</li>
              <li>Adjust budgets seasonally (more spend during peak summer/winter)</li>
              <li>Separate emergency services from scheduled maintenance</li>
              <li>Track every lead source with precision</li>
              <li>Pay only when someone clicks your ad</li>
            </ul>
          </section>

          {/* HVAC-Specific Challenges */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">HVAC-Specific Challenges We Solve</h2>
            <p className="text-gray-700 mb-6">
              Running effective Google Ads for HVAC companies requires addressing industry-specific obstacles:
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Seasonal Demand Variations</h3>
                <p className="text-gray-700">
                  Heating needs spike in winter, cooling in summer. We create separate campaigns for heating and cooling services, adjusting budgets seasonally to maximize ROI year-round.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Emergency vs Planned Service</h3>
                <p className="text-gray-700">
                  Emergency repairs have different search patterns than planned installations. We structure campaigns to capture both immediate emergencies and scheduled maintenance contracts.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3. High Local Competition</h3>
                <p className="text-gray-700">
                  Multiple HVAC companies bidding on the same keywords drives up costs. We use advanced bidding strategies and Quality Score optimization to get better positions at lower costs.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Budget Allocation Between Services</h3>
                <p className="text-gray-700">
                  Deciding how much to spend on AC repair vs furnace installation vs maintenance contracts requires industry expertise. Learn more in our <Link href="/resources/hvac/hvac-lead-generation-strategies" className="text-blue-600 hover:text-blue-700 font-medium">HVAC lead generation strategies guide</Link>.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">5. Lead Quality Issues</h3>
                <p className="text-gray-700">
                  Not all clicks are equal. We implement negative keywords and ad copy qualification to filter out DIY searchers and focus on customers ready to hire a professional.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">6. Tracking Phone Calls</h3>
                <p className="text-gray-700">
                  Most HVAC leads come via phone. We integrate call tracking to attribute every call to specific ads and keywords, so you know exactly which campaigns drive revenue.
                </p>
              </div>
            </div>
          </section>

          {/* Google Ads Strategy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Google Ads Strategy for HVAC Companies</h2>
            <p className="text-gray-700 mb-6">
              Here's how we structure Google Ads campaigns to maximize lead generation for HVAC businesses:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Campaign Structure</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <strong>Emergency Services Campaign:</strong> Target "AC repair near me", "furnace not working", "emergency HVAC" with call-only ads optimized for mobile
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <strong>Installation Campaign:</strong> Focus on "AC installation cost", "furnace replacement" with landing pages showcasing financing options
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <strong>Maintenance Contracts:</strong> Target preventive maintenance keywords with long-term value messaging
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <strong>Seasonal Campaigns:</strong> Separate heating and cooling campaigns that ramp up before peak seasons
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              We also leverage <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">Local Service Ads</Link> to get your HVAC company the Google Guaranteed badge, appearing at the very top of search results with enhanced trust signals.
            </p>
          </section>

          {/* Services Offered */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">HVAC Google Ads Services We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Google Search Ads</h3>
                <p className="text-gray-600 text-sm">
                  Capture high-intent HVAC customers searching for immediate service
                </p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Service Ads</h3>
                <p className="text-gray-600 text-sm">
                  Get Google Guaranteed status and appear above all other ads
                </p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call-Only Campaigns</h3>
                <p className="text-gray-600 text-sm">
                  Mobile-optimized ads designed specifically to drive phone calls
                </p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Remarketing</h3>
                <p className="text-gray-600 text-sm">
                  Stay top-of-mind with prospects who visited but didn't convert
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link href="/services" className="inline-block text-blue-600 font-semibold hover:text-blue-700">
                View All Services & Pricing →
              </Link>
            </div>
          </section>

          {/* Case Study Callout */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8">
              <div className="flex items-start justify-between">
                <div>
                  <div className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    Success Story
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">CoolAir Heating & Cooling Results</h2>
                  <p className="text-gray-700 mb-4">
                    How we helped a Phoenix HVAC company generate 847 leads in 12 months with a 5.8x ROAS
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <div className="text-3xl font-bold text-green-600">847</div>
                      <div className="text-sm text-gray-600">Leads Generated</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600">$42</div>
                      <div className="text-sm text-gray-600">Avg Cost Per Lead</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600">+215%</div>
                      <div className="text-sm text-gray-600">Revenue Increase</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600">5.8x</div>
                      <div className="text-sm text-gray-600">ROAS</div>
                    </div>
                  </div>
                  <Link href="/case-studies" className="text-blue-600 font-semibold hover:text-blue-700">
                    Read Full Case Study →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How much should HVAC companies spend on Google Ads?
                </h3>
                <p className="text-gray-700">
                  We recommend a minimum of $1,500-2,000/month in ad spend for meaningful results. During peak seasons (summer for cooling, winter for heating), increasing your budget to $3,000-5,000/month can capture more demand. Your management fee starts at $1,500/month.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What's a good cost per lead for HVAC?
                </h3>
                <p className="text-gray-700">
                  Average cost per lead for HVAC services ranges from $30-$80, depending on your market and service type. Emergency repairs tend to be more expensive ($50-$100) while maintenance contracts may be cheaper ($25-$50). Installation leads typically run $40-$70.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Should I use Google Guarantee Local Service Ads?
                </h3>
                <p className="text-gray-700">
                  Absolutely. Local Service Ads with the Google Guaranteed badge typically generate higher quality leads because customers trust the Google verification. You pay per lead (not per click), so you only pay for actual customer contacts. Most of our HVAC clients use both Search Ads and Local Service Ads together.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How do I handle seasonal demand changes?
                </h3>
                <p className="text-gray-700">
                  We create separate campaigns for heating and cooling services, then adjust budgets seasonally. Before summer, we increase cooling budgets and decrease heating. Before winter, we do the opposite. We also run year-round campaigns for maintenance and emergency services. Read more in our detailed guide on <Link href="/resources/hvac/hvac-lead-generation-strategies" className="text-blue-600 hover:text-blue-700 font-medium">HVAC lead generation strategies</Link>.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Can Google Ads work for HVAC maintenance contracts?
                </h3>
                <p className="text-gray-700">
                  Yes! We create dedicated campaigns targeting keywords like "HVAC maintenance plan" and "furnace tune-up". The key is emphasizing preventive benefits (avoid breakdowns, extend equipment life, save money) and offering seasonal promotions to drive sign-ups.
                </p>
              </div>
            </div>
          </section>

          {/* Related Resources */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Related HVAC Resources</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-3">
                <li>
                  <Link href="/resources/hvac/hvac-lead-generation-strategies" className="text-blue-600 hover:text-blue-700 font-medium text-lg">
                    → HVAC Lead Generation Strategies with Google Ads
                  </Link>
                  <p className="text-gray-600 text-sm mt-1">Comprehensive overview of strategies and seasonal tactics</p>
                </li>
                <li>
                  <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium text-lg">
                    → View Our Google Ads Services & Pricing
                  </Link>
                  <p className="text-gray-600 text-sm mt-1">Transparent pricing for all management services</p>
                </li>
                <li>
                  <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 font-medium text-lg">
                    → Read More HVAC Success Stories
                  </Link>
                  <p className="text-gray-600 text-sm mt-1">Real results from HVAC companies we've helped</p>
                </li>
                <li>
                  <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium text-lg">
                    → Browse All Resources
                  </Link>
                  <p className="text-gray-600 text-sm mt-1">Guides for all service business industries</p>
                </li>
              </ul>
            </div>
          </section>

          {/* Conclusion CTA */}
          <section>
            <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Generate More HVAC Leads?</h2>
              <p className="text-xl text-blue-100 mb-6">
                Get a free Google Ads audit customized for your HVAC business. Discover untapped opportunities in your market.
              </p>
              <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
                Get Your Free HVAC Ads Audit
              </Link>
            </div>
          </section>
        </div>
      </article>
      <Footer />
    </div>
  );
}
