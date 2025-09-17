export default function Awards() {
  const awards = [
    {
      category: "Leadership & Recognition",
      items: [
        "Appointed Managing Director - Custom Home Network 2024",
        "Hill Country Artisan Homes - Multi-Million Dollar Club / 7 Million+ Closed Sales Achievement - 2024",
        "Hill Country Artisan Homes - Multi-Million Dollar Club / 28 Million+ Closed Sales Achievement - 2023",
        "Hill Country Artisan Homes - Multi-Million Dollar Club / 10 Million+ Closed Sales Achievement - 2022",
        "Hill Country Artisan Homes - Top Producing Custom Home Sales Specialist - 2019 / 2020 / 2021 / 2022 / 2023 / 2024",
        "Home Builders Association (HBA) / MAX Award - Top Producer Award 2020",
        "President's Club Award Recipient 2017 / 2018 / 2019 / 2020 / 2021 - PSH",
        "Home Builders Association (HBA) / Max Award - Parade of Homes Sales Participant / Best in Show Award - 2018",
        "2015 Builder PSH - New Home Specialist Award 2015 / Top Sales Team Award 2016"
      ]
    },
    {
      category: "Professional Development",
      items: [
        "Shore Consulting - Sales Leadership Summit - 2020 / 2022",
        "Qualico - Real Estate Sales Leadership Development Program - 2019",
        "Shore Consulting - Real Estate Sales Leadership Academy - 2017",
        "New Wings Circle Selling Program - 2017",
        "Shore Consulting - The 4:2 Formula Academy - 2015"
      ]
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-misty-50 to-misty-100">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-black-900 sm:text-5xl font-serif mb-6">
            Real Estate Awards & Accomplishments
          </h2>
          <p className="text-xl text-charcoal-700 max-w-3xl mx-auto">
            Recognized excellence in real estate sales, leadership, and professional development spanning over two decades of dedicated service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {awards.map((category, categoryIndex) => (
            <div key={categoryIndex} className="luxury-card">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-black-900 font-serif mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-champagne-600 to-champagne-700 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                    {categoryIndex + 1}
                  </span>
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((award, awardIndex) => (
                    <div key={awardIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-champagne-600 rounded-full mt-3 mr-4"></div>
                      <p className="text-charcoal-700 leading-relaxed">
                        {award}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-champagne-50 to-champagne-100 rounded-2xl p-8 border border-champagne-200">
            <h3 className="text-2xl font-semibold text-black-900 font-serif mb-4">
              Consistent Excellence Across Multiple Years
            </h3>
            <p className="text-lg text-charcoal-700 mb-6">
              Spero's track record demonstrates sustained success and continuous growth in the competitive real estate market, 
              earning recognition from industry leaders and professional organizations year after year.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-charcoal-600">
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">26+ Years Experience</span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">Multi-Million Dollar Producer</span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">Industry Leadership</span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">Professional Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
