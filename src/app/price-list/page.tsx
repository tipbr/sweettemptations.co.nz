export default function PriceListPage() {
  return (
    <main className="price-list-page">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <header className="price-list-page__header text-center mb-12">
          <h1 className="font-accent text-4xl md:text-5xl text-[#ED9BB8] mb-4">
            Price List
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our pricing guide for cakes, cupcakes, and sweet treats. All prices are in NZD. 
            Contact us for custom orders and specific requirements.
          </p>
        </header>

        {/* Price Tables */}
        <div className="price-list space-y-12">
          {/* Custom Cakes */}
          <section className="price-table">
            <h2 className="price-table__title text-2xl md:text-3xl font-accent text-[#5DBFBD] mb-6 text-center">
              Custom Cakes
            </h2>
            <div className="price-table__content bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#FFF5F8]">
                    <tr>
                      <th className="px-6 py-4 text-left font-medium text-gray-900">Size</th>
                      <th className="px-6 py-4 text-left font-medium text-gray-900">Serves</th>
                      <th className="px-6 py-4 text-left font-medium text-gray-900">From</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-gray-700">6 inch</td>
                      <td className="px-6 py-4 text-gray-700">8-10</td>
                      <td className="px-6 py-4 text-gray-900 font-medium">$80</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">8 inch</td>
                      <td className="px-6 py-4 text-gray-700">15-20</td>
                      <td className="px-6 py-4 text-gray-900 font-medium">$120</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">10 inch</td>
                      <td className="px-6 py-4 text-gray-700">25-30</td>
                      <td className="px-6 py-4 text-gray-900 font-medium">$180</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">12 inch</td>
                      <td className="px-6 py-4 text-gray-700">35-40</td>
                      <td className="px-6 py-4 text-gray-900 font-medium">$240</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Cupcakes */}
          <section className="price-table">
            <h2 className="price-table__title text-2xl md:text-3xl font-accent text-[#5DBFBD] mb-6 text-center">
              Cupcakes
            </h2>
            <div className="price-table__content bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#FFF5F8]">
                    <tr>
                      <th className="px-6 py-4 text-left font-medium text-gray-900">Quantity</th>
                      <th className="px-6 py-4 text-left font-medium text-gray-900">Standard</th>
                      <th className="px-6 py-4 text-left font-medium text-gray-900">Premium</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-gray-700">6 cupcakes</td>
                      <td className="px-6 py-4 text-gray-900 font-medium">$30</td>
                      <td className="px-6 py-4 text-gray-900 font-medium">$42</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">12 cupcakes</td>
                      <td className="px-6 py-4 text-gray-900 font-medium">$54</td>
                      <td className="px-6 py-4 text-gray-900 font-medium">$78</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">24 cupcakes</td>
                      <td className="px-6 py-4 text-gray-900 font-medium">$96</td>
                      <td className="px-6 py-4 text-gray-900 font-medium">$144</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section className="price-table">
            <h2 className="price-table__title text-2xl md:text-3xl font-accent text-[#5DBFBD] mb-6 text-center">
              Decorated Cookies
            </h2>
            <div className="price-table__content bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#FFF5F8]">
                    <tr>
                      <th className="px-6 py-4 text-left font-medium text-gray-900">Type</th>
                      <th className="px-6 py-4 text-left font-medium text-gray-900">Price per cookie</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Simple design</td>
                      <td className="px-6 py-4 text-gray-900 font-medium">$4.50</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Moderate design</td>
                      <td className="px-6 py-4 text-gray-900 font-medium">$6.50</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Detailed/Premium design</td>
                      <td className="px-6 py-4 text-gray-900 font-medium">$8.50+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>

        {/* Notes Section */}
        <div className="price-list__notes mt-12 p-8 bg-[#FFF5F8] rounded-lg">
          <h3 className="text-xl font-accent text-[#ED9BB8] mb-4">Important Notes:</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#ED9BB8] mr-2">•</span>
              <span>All prices are starting prices and may vary based on design complexity and special requirements</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#ED9BB8] mr-2">•</span>
              <span>Custom designs and special flavors may incur additional charges</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#ED9BB8] mr-2">•</span>
              <span>Free delivery within Whanganui City limits for all orders</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#ED9BB8] mr-2">•</span>
              <span>We recommend ordering at least 48 hours in advance</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="price-list__cta mt-12 text-center">
          <h3 className="font-accent text-2xl text-[#ED9BB8] mb-4">
            Ready to order?
          </h3>
          <p className="text-gray-600 mb-6">
            Contact us to discuss your requirements and get a personalized quote.
          </p>
          <a
            href="/contact-us"
            className="inline-block px-8 py-3 bg-[#ED9BB8] text-white rounded-md font-medium hover:bg-[#E88AAC] transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  );
}
