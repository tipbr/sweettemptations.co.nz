import Button from "@/app/_components/ui/Button";

export default function HomePage() {
  return (
    <main className="homepage">
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-pink-100 to-pink-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="hero__content">
              <h2 className="font-accent text-4xl md:text-5xl lg:text-6xl text-[#ED9BB8] leading-tight mb-6">
                Life is better with sprinkles on top!
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                We're a boutique cakery who create personalised cakes, cupcakes, 
                cookies and much more!
              </p>
              <Button href="/gallery" variant="primary" className="text-lg">
                See some of our creations
              </Button>
            </div>

            {/* Hero Image Placeholder */}
            <div className="hero__image">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-[#F5D4E1] to-[#FFB6D1] flex items-center justify-center">
                <div className="text-center p-8">
                  <svg
                    className="w-32 h-32 mx-auto mb-4 text-white opacity-50"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-white font-medium">Hero Image</p>
                  <p className="text-white text-sm opacity-75">Pink frosted cake with berries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Logo/Image */}
            <div className="intro__image flex justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#5DBFBD] to-[#ED9BB8] p-8 flex items-center justify-center border-8 border-[#ED9BB8]">
                <div className="w-full h-full rounded-full bg-[#5DBFBD] flex items-center justify-center">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-32 h-32 text-white"
                    fill="currentColor"
                  >
                    <path d="M12 2L11 6L10 10L11 14L12 18L13 14L14 10L13 6L12 2ZM8 4L7 8L8 12L9 8L8 4ZM16 4L15 8L16 12L17 8L16 4ZM4 6L3 10L4 14L5 10L4 6ZM20 6L19 10L20 14L21 10L20 6ZM12 20L10 21L12 22L14 21L12 20Z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="intro__content">
              <h2 className="font-accent text-3xl md:text-4xl text-[#ED9BB8] mb-6">
                Hi there!
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                I'm Emma Tipper, the founder of Sweet Temptations. I run a boutique cakery 
                working with you to create sweet treats for all occasions including weddings, 
                baby showers, birthdays and other events.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We create custom cakes, cupcakes, cookies and much more! I have loved creating 
                in the kitchen for as long as I can remember. The joy and smile a homemade treat 
                can bring someone is such a special feeling.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                In my spare time I love baking, gardening, flowers, exercising and people - a 
                great combo to help me bring your ideas to life. I look forward to working with 
                you! Talk soon, Emma xx
              </p>
              <Button href="/contact-us" variant="primary">
                Talk to us today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about py-16 bg-[#F8F8F8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Sweet Temptations is a boutique baker serving the Whanganui region. 
            We make personalised cakes, cupcakes, cookies and much more!{" "}
            <a href="/contact-us" className="text-[#5DBFBD] hover:text-[#4DA9A7] underline transition-colors">
              Talk to us today
            </a>{" "}
            about your ideas.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="services py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-accent text-3xl md:text-4xl text-[#5DBFBD] text-center mb-12">
            what we do
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "Weddings",
              "Birthdays",
              "Corporate Events",
              "Celebrations",
              "Catering",
              "Thankyous",
            ].map((service) => (
              <div
                key={service}
                className="service-item text-center"
              >
                <h3 className="font-accent text-xl md:text-2xl text-[#5DBFBD]">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta py-16 bg-[#FFB6D1] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-accent text-3xl md:text-4xl mb-6">
            Ready to create something special?
          </h2>
          <p className="text-lg mb-8">
            Let's bring your vision to life with a custom creation made just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/gallery" variant="secondary">
              View Gallery
            </Button>
            <button className="inline-block px-8 py-3 bg-white text-[#ED9BB8] rounded-md font-medium hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
