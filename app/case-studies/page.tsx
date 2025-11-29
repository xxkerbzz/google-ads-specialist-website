import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function CaseStudies() {
  const caseStudies = [
    {
      industry: "HVAC",
      company: "CoolAir Heating & Cooling",
      location: "Phoenix, AZ",
      challenge: "Seasonal business struggling to generate consistent leads year-round, especially during slower months.",
      solution: "Implemented a comprehensive Google Search and Local Service Ads strategy with seasonal budget adjustments and targeted messaging for both heating and cooling services.",
      results: [
        { metric: "Leads Generated", value: "847", period: "12 months" },
        { metric: "Cost Per Lead", value: "$42", period: "avg" },
        { metric: "Revenue Increase", value: "+215%", period: "year over year" },
        { metric: "ROAS", value: "5.8x", period: "overall" }
      ],
      testimonial: "Working with this specialist transformed our business. We went from feast or famine to having a consistent pipeline of qualified leads every single month.",
      author: "Mike Stevens, Owner"
    },
    {
      industry: "Plumbing",
      company: "Premier Plumbing Solutions",
      location: "Austin, TX",
      challenge: "High competition in local market with multiple established competitors outbidding on key search terms.",
      solution: "Focused on long-tail keywords and service-specific campaigns while optimizing Quality Score to reduce CPC and improve ad position.",
      results: [
        { metric: "Leads Generated", value: "1,240", period: "12 months" },
        { metric: "Cost Per Lead", value: "$38", period: "avg" },
        { metric: "Call Volume", value: "+340%", period: "increase" },
        { metric: "ROAS", value: "6.2x", period: "overall" }
      ],
      testimonial: "I was skeptical about Google Ads at first, but the results speak for themselves. We're now booking out 2-3 weeks in advance.",
      author: "Carlos Rodriguez, Operations Manager"
    },
    {
      industry: "Roofing",
      company: "Summit Roofing & Restoration",
      location: "Denver, CO",
      challenge: "Lead quality was poor with previous agency - getting tire-kickers instead of serious buyers ready to invest in roof replacement.",
      solution: "Implemented strict negative keyword lists, created separate campaigns for emergency repairs vs. full replacements, and added qualification questions in ad copy.",
      results: [
        { metric: "Leads Generated", value: "432", period: "12 months" },
        { metric: "Lead Quality", value: "+180%", period: "improvement" },
        { metric: "Close Rate", value: "35%", period: "from 12%" },
        { metric: "Revenue", value: "$1.2M", period: "attributed" }
      ],
      testimonial: "Finally, someone who understands that it's not about volume - it's about quality. Every lead we get now is pre-qualified and serious.",
      author: "Jennifer Walsh, Owner"
    },
    {
      industry: "Landscaping",
      company: "GreenScape Design & Maintenance",
      location: "Portland, OR",
      challenge: "Wanted to expand from maintenance work to higher-ticket landscape design projects but wasn't attracting the right clientele.",
      solution: "Created separate campaigns targeting commercial vs. residential, maintenance vs. design services with custom landing pages for each service line.",
      results: [
        { metric: "Design Leads", value: "156", period: "12 months" },
        { metric: "Avg Project Value", value: "$15,400", period: "design jobs" },
        { metric: "Commercial Clients", value: "+12", period: "new contracts" },
        { metric: "ROAS", value: "8.3x", period: "overall" }
      ],
      testimonial: "We've completely transformed our business model. We're now taking on the kinds of projects we always wanted to do.",
      author: "David Chen, Founder"
    },
    {
      industry: "Electrical",
      company: "Bright Electric Services",
      location: "Seattle, WA",
      challenge: "Limited budget competing against larger electrical companies with bigger ad spends.",
      solution: "Focused on hyper-local targeting within specific service areas and times of day when competition was lower. Leveraged Local Service Ads for cost-effective lead generation.",
      results: [
        { metric: "Leads Generated", value: "628", period: "12 months" },
        { metric: "Cost Per Lead", value: "$31", period: "avg" },
        { metric: "Market Share", value: "+45%", period: "in service area" },
        { metric: "ROAS", value: "4.7x", period: "overall" }
      ],
      testimonial: "I thought we couldn't compete with the big players, but smart targeting and optimization made all the difference.",
      author: "Tom Harrison, Owner"
    },
    {
      industry: "Home Remodeling",
      company: "Artisan Home Builders",
      location: "Charlotte, NC",
      challenge: "Long sales cycle and high-ticket services made it difficult to track ROI from Google Ads.",
      solution: "Implemented advanced conversion tracking including offline conversion import from CRM, created multi-touch attribution model to properly credit ad interactions.",
      results: [
        { metric: "Qualified Leads", value: "284", period: "12 months" },
        { metric: "Projects Closed", value: "47", period: "attributed" },
        { metric: "Avg Project Value", value: "$68,500", period: "overall" },
        { metric: "ROAS", value: "12.4x", period: "overall" }
      ],
      testimonial: "Being able to track the full customer journey from click to close gave us the confidence to invest more in ads. Best decision we made.",
      author: "Sarah Mitchell, Marketing Director"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Real Results From Real Businesses
          </h1>
          <p className="text-xl text-gray-600">
            See how I've helped service-based businesses transform their lead generation with strategic Google Ads campaigns.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
                  <div className="flex flex-wrap items-center justify-between mb-4">
                    <div>
                      <div className="inline-block bg-blue-500 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                        {study.industry}
                      </div>
                      <h2 className="text-3xl font-bold">{study.company}</h2>
                      <p className="text-blue-100">{study.location}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Challenge & Solution */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">The Challenge</h3>
                      <p className="text-gray-600 mb-6">{study.challenge}</p>

                      <h3 className="text-xl font-bold text-gray-900 mb-3">The Solution</h3>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">The Results</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="bg-blue-50 p-4 rounded-lg">
                            <div className="text-3xl font-bold text-blue-600 mb-1">
                              {result.value}
                            </div>
                            <div className="text-sm text-gray-600 font-medium mb-1">
                              {result.metric}
                            </div>
                            <div className="text-xs text-gray-500">
                              {result.period}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
                    <p className="text-gray-700 italic mb-2">"{study.testimonial}"</p>
                    <p className="text-gray-900 font-semibold">— {study.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-16 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Combined Results Across All Clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-2">3,587</div>
              <div className="text-gray-300">Total Leads Generated</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-2">$2.1M</div>
              <div className="text-gray-300">Ad Spend Managed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-2">6.8x</div>
              <div className="text-gray-300">Average ROAS</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-2">$39</div>
              <div className="text-gray-300">Average Cost Per Lead</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want Results Like These?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how I can help grow your business with Google Ads.
          </p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
