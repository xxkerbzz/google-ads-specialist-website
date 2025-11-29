import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import type { Metadata} from "next";

export const metadata: Metadata = {
  title: "HVAC Lead Generation Strategies with Google Ads | Expert Guide",
  description: "Proven HVAC lead generation strategies using Google Ads. Learn seasonal tactics, emergency service campaigns, and budget optimization for heating and cooling contractors.",
  keywords: ["hvac lead generation", "hvac marketing strategies", "hvac google ads strategies"],
};

export default function HVACLeadGenerationStrategies() {
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
            <Link href="/google-ads-for-hvac" className="hover:text-blue-600">HVAC</Link>
            <span>/</span>
            <span className="text-gray-900">Lead Generation Strategies</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
              HVAC Marketing
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              HVAC Lead Generation Strategies That Actually Work
            </h1>
            <p className="text-xl text-gray-600">
              Proven strategies to generate consistent heating and cooling leads with Google Ads, from emergency services to maintenance contracts.
            </p>
          </div>

          {/* Back to Pillar Link */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8">
            <p className="text-sm text-gray-700">
              📖 This article is part of our comprehensive <Link href="/google-ads-for-hvac" className="text-blue-600 hover:text-blue-700 font-medium">Google Ads for HVAC Companies Guide</Link>
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Separate campaigns for emergency services vs installations vs maintenance</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Seasonal budget adjustments are critical for HVAC profitability</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Local Service Ads with Google Guarantee generate highest quality leads</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Mobile optimization is essential—most emergency searches happen on phones</span>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">1. Emergency Service Campaigns: Capture High-Intent Customers</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Emergency HVAC services represent some of the highest-value leads. When someone's AC breaks down in 100-degree heat or their furnace fails in freezing temperatures, they need service immediately and price is secondary to speed.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Campaign Setup for Emergency Services</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Mobile-first approach:</strong> 70%+ of emergency searches happen on mobile devices</li>
              <li><strong>Call-only ads:</strong> Skip landing pages and go straight to phone calls</li>
              <li><strong>Extended ad scheduling:</strong> Run 24/7 or match your service availability</li>
              <li><strong>Urgent ad copy:</strong> Use phrases like "Same-Day Service," "24/7 Emergency," "No Overtime Charges"</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Pro Tip</h3>
              <p className="text-gray-700 mb-0">
                Increase bids by 50-100% for mobile devices during peak demand hours (evenings and weekends for residential, business hours for commercial). Emergency customers are less price-sensitive and more likely to convert.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">2. Seasonal Campaign Strategies</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              HVAC is inherently seasonal. Smart budget allocation between heating and cooling campaigns can make or break your ROI.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Budget Allocation by Season</h3>
            <p className="text-lg text-gray-700 mb-2 leading-relaxed"><strong>Summer (June-August):</strong></p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Cooling services: 70% of budget</li>
              <li>Heating services: 10% of budget (preparation/maintenance)</li>
              <li>General HVAC: 20% of budget</li>
            </ul>

            <p className="text-lg text-gray-700 mb-2 leading-relaxed"><strong>Winter (December-February):</strong></p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Heating services: 70% of budget</li>
              <li>Cooling services: 10% of budget (off-season deals)</li>
              <li>General HVAC: 20% of budget</li>
            </ul>

            <p className="text-lg text-gray-700 mb-2 leading-relaxed"><strong>Shoulder Seasons (Spring/Fall):</strong></p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Maintenance contracts: 40% of budget</li>
              <li>Heating/Cooling prep: 30% each</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">3. Maintenance Contract Lead Generation</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Recurring maintenance contracts provide predictable revenue. Target homeowners and property managers during shoulder seasons when they're thinking about preparing their systems.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Effective Maintenance Campaign Tactics</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Emphasize preventive benefits (avoid breakdowns, extend equipment life)</li>
              <li>Offer seasonal promotions (pre-summer AC tune-ups, pre-winter furnace checks)</li>
              <li>Target keywords like "HVAC maintenance plan," "furnace tune-up," "AC annual service"</li>
              <li>Use landing pages with clear pricing and what's included</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">4. Installation & Replacement Campaigns</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              HVAC installations are high-ticket services with longer sales cycles. These campaigns require different messaging and nurture strategies.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Installation Campaign Best Practices</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Highlight financing options prominently in ads and landing pages</li>
              <li>Target keywords with installation intent: "AC replacement cost," "new furnace installation"</li>
              <li>Use remarketing to stay top-of-mind during the consideration phase</li>
              <li>Showcase energy efficiency savings and rebate programs</li>
              <li>Provide instant online estimates or assessment booking</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">5. Local Service Ads Strategy</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Local Service Ads (LSA) with the Google Guaranteed badge are game-changers for HVAC companies. They appear above search ads and you only pay for leads, not clicks.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">LSA Optimization Tips</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Complete your profile 100% (photos, licenses, insurance)</li>
              <li>Maintain a 4.5+ star review rating</li>
              <li>Respond to leads within minutes (first responder often wins the job)</li>
              <li>Set appropriate weekly budgets based on lead capacity</li>
              <li>Dispute invalid leads immediately to protect your budget</li>
            </ul>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Learn more about our <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">Local Service Ads management services</Link>.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">6. Budget Optimization & ROI Tracking</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Proper tracking is essential to understand which campaigns drive revenue, not just leads.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Tracking Setup</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Call tracking:</strong> Use dynamic number insertion to track which ads drive calls</li>
              <li><strong>Form tracking:</strong> Track online quote requests and booking forms</li>
              <li><strong>Offline conversion import:</strong> Upload closed deals back to Google Ads</li>
              <li><strong>Lead quality scoring:</strong> Not all leads are equal—track which sources convert to customers</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Real Results Example</h3>
              <p className="text-gray-700">
                We helped CoolAir Heating & Cooling in Phoenix generate 847 leads over 12 months with an average cost per lead of $42 and a 5.8x ROAS. By implementing seasonal budget adjustments and separating emergency from planned service campaigns, they increased revenue by 215% year-over-year.
              </p>
              <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 font-medium">
                Read the full case study →
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">Conclusion</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Successful HVAC lead generation with Google Ads requires understanding the seasonal nature of the business, separating emergency from planned services, and optimizing for both clicks and calls. By implementing these strategies, you can generate consistent, high-quality leads year-round.
            </p>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              For more HVAC-specific strategies, check out our complete <Link href="/google-ads-for-hvac" className="text-blue-600 hover:text-blue-700 font-medium">Google Ads for HVAC Companies guide</Link>.
            </p>
          </div>

          {/* Related Articles */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related HVAC Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <Link href="/google-ads-for-hvac" className="text-blue-600 hover:text-blue-700">
                    Google Ads for HVAC Companies
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm">Complete guide to Google Ads for HVAC contractors</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <Link href="/services" className="text-blue-600 hover:text-blue-700">
                    Our HVAC Google Ads Services
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm">See how we can help your HVAC business grow</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-blue-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help With Your HVAC Google Ads?</h2>
            <p className="text-lg text-blue-100 mb-6">
              Get a free audit of your current campaigns or discuss starting new ones.
            </p>
            <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Schedule Your Free Consultation
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
