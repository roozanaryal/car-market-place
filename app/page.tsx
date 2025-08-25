import { ChevronRight, Car, Calendar, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SignedOut } from "@clerk/nextjs";
import { HomeSearch } from "@/components/forms/home-search";
import CarList from "@/components/common/car-list";
import Link from "next/link";
import Image from "next/image";
import { bodyTypes, carMakes, faqItems } from "@/lib/data";

export default async function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-background hero-fade-bottom overflow-hidden pt-28 pb-14">
        <div className="container-spacing text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            <span className="text-xs tracking-wide uppercase">AI Powered Search</span>
          </div>

          {/* Headline */}
          <h1 className="heading-xl text-neutral-900 mb-4">
            Find Your Dream Car with GadiBaazar
          </h1>
          <p className="text-body-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
            Advanced AI Car Search and test drive from thousands of verified vehicles with cutting-edge technology.
          </p>

          {/* Search Component */}
          <div className="max-w-2xl mx-auto mb-6">
            <HomeSearch />
          </div>

          {/* CTAs */}
          <div className="flex justify-center gap-3 mb-10">
            {/* <Button size="lg" className="btn-primary" asChild>
              <Link href="/cars">Browse Cars</Link>
            </Button> */}
            <SignedOut>
              <Button size="lg" variant="secondary" className="btn-secondary" asChild>
                <Link href="/sign-up">Get Started</Link>
              </Button>
            </SignedOut>
          </div>

          {/* Trust stats */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto text-neutral-700">
            <div>
              <div className="text-2xl font-semibold text-neutral-900">5k+</div>
              <div className="text-sm">Verified Listings</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-neutral-900">1.5k+</div>
              <div className="text-sm">Happy Buyers</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-neutral-900">4.9/5</div>
              <div className="text-sm">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="bg-neutral-50">
        <div className="section-spacing">
          <div className="container-spacing">
            <div className="text-center large-spacing">
              <h2 className="heading-lg element-spacing">Featured Cars</h2>
              <p className="text-body-lg max-w-2xl mx-auto element-spacing">
                Discover our handpicked selection of premium vehicles
              </p>
              <Button variant="outline" className="btn-secondary" asChild>
                <Link href="/cars">
                  View All Cars <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <CarList />
          </div>
        </div>
      </section>

      {/* Browse by Make */}
      <section className="bg-white">
        <div className="section-spacing">
          <div className="container-spacing">
            <div className="text-center large-spacing">
              <h2 className="heading-lg element-spacing">Browse by Make</h2>
              <p className="text-body-lg max-w-2xl mx-auto element-spacing">
                Explore vehicles from your favorite automotive brands
              </p>
              <Button variant="outline" className="btn-secondary" asChild>
                <Link href="/cars">
                  View All Makes <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {carMakes.map((make) => (
                <Link
                  key={make.name}
                  href={`/cars?make=${make.name}`}
                  className="brand-card group"
                >
                  <div className="h-16 w-auto mx-auto mb-4 relative">
                    <Image
                      src={
                        make.image || `/make/${make.name.toLowerCase()}.webp`
                      }
                      alt={make.name}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <h3 className="text-sm font-medium text-neutral-800">
                    {make.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-neutral-50">
        <div className="section-spacing">
          <div className="container-spacing">
            <div className="text-center large-spacing">
              <h2 className="heading-lg element-spacing">
                Why Choose Our Platform
              </h2>
              <p className="text-body-lg max-w-3xl mx-auto">
                Experience the future of car buying with our innovative platform
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="feature-icon w-16 h-16 mx-auto mb-6">
                  <Car className="h-8 w-8" />
                </div>
                <h3 className="heading-md element-spacing">Wide Selection</h3>
                <p className="text-body">
                  Thousands of verified vehicles from trusted dealerships and
                  private sellers across the country.
                </p>
              </div>
              <div className="text-center">
                <div className="feature-icon w-16 h-16 mx-auto mb-6">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="heading-md element-spacing">Easy Test Drive</h3>
                <p className="text-body">
                  Book a test drive online in minutes, with flexible scheduling
                  options that fit your busy lifestyle.
                </p>
              </div>
              <div className="text-center">
                <div className="feature-icon w-16 h-16 mx-auto mb-6">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="heading-md element-spacing">Secure Process</h3>
                <p className="text-body">
                  Verified listings and secure booking process with
                  comprehensive insurance coverage for complete peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Body Type */}
      <section className="bg-white">
        <div className="section-spacing">
          <div className="container-spacing">
            <div className="text-center large-spacing">
              <h2 className="heading-lg element-spacing">
                Browse by Body Type
              </h2>
              <p className="text-body-lg max-w-2xl mx-auto element-spacing">
                Find the perfect vehicle style that matches your lifestyle
              </p>
              <Button variant="outline" className="btn-secondary" asChild>
                <Link href="/cars">
                  View All Types <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {bodyTypes.map((type) => (
                <Link
                  key={type.name}
                  href={`/cars?bodyType=${type.name}`}
                  className="professional-card group cursor-pointer overflow-hidden"
                >
                  <div className="relative h-32 w-full">
                    <Image
                      src={
                        type.image || 
                        (type.name.toLowerCase() === 'convertible' ? '/body/convertable.png' : 
                         type.name.toLowerCase() === 'hatchback' ? '/body/hatchback.jpeg' :
                         type.name.toLowerCase() === 'suv' ? '/body/suv.png' :
                         type.name.toLowerCase() === 'sedan' ? '/body/sedan.webp' :
                         '')
                      }
                      alt={type.name}
                      fill
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-110 will-change-transform transform-gpu"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white text-lg font-semibold">
                        {type.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-neutral-50">
        <div className="section-spacing">
          <div className="container-spacing">
            <div className="text-center large-spacing">
              <h2 className="heading-lg element-spacing">
                Frequently Asked Questions
              </h2>
              <p className="text-body-lg max-w-2xl mx-auto">
                Get answers to common questions in GadiBazaar
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-2">
                {faqItems.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="accordion-item"
                  >
                    <AccordionTrigger className="accordion-trigger text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="accordion-content mt-3">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-background text-black">
        <div className="section-spacing">
          <div className="container-spacing text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg text-black mb-6">
                Ready to Find Your Dream Car?
              </h2>
              <p className="text-body-lg text-black/90 mb-8 max-w-3xl mx-auto">
                Join thousands of satisfied customers who found their perfect
                vehicle through our innovative platform.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="btn-secondary bg-black text-primary-blue"
                  asChild
                >
                  <Link href="/cars">View All Cars</Link>
                </Button>
                <SignedOut>
                  <Button size="lg" className="btn-primary bg-black" asChild>
                    <Link href="/sign-up">Sign Up Now</Link>
                  </Button>
                </SignedOut>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
