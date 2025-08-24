import { ChevronRight, Car, Calendar, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SignedOut } from "@clerk/nextjs";
// import { getFeaturedCars } from "@/actions/home";
import CarCard from "@/components/cards/car-card";
import { HomeSearch } from "@/components/forms/home-search";
import CarList from "@/components/common/car-list";
import Link from "next/link";
import Image from "next/image";
import { bodyTypes, carMakes, faqItems } from "@/lib/data";

export default async function Home() {

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-background text-white overflow-hidden pt-20">
        <div className="section-spacing">
          <div className="container-spacing text-center relative z-10">
            <div className="large-spacing">
              <h1 className="heading-xl text-white mb-6">
                Find Your Dream Car with Vehiql AI
              </h1>
              <p className="text-body-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Advanced AI Car Search and test drive from thousands of verified vehicles with cutting-edge technology.
              </p>
            </div>

            {/* Search Component */}
            <div className="max-w-2xl mx-auto">
              <HomeSearch />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="bg-neutral-50">
        <div className="section-spacing">
          <div className="container-spacing">
            <div className="text-center large-spacing">
              <h2 className="heading-lg element-spacing">
                Featured Cars
              </h2>
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
              <h2 className="heading-lg element-spacing">
                Browse by Make
              </h2>
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
                  <h3 className="text-sm font-medium text-neutral-800">{make.name}</h3>
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
                  Verified listings and secure booking process with comprehensive
                  insurance coverage for complete peace of mind.
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
                        type.image || `/body/${type.name.toLowerCase()}.webp`
                      }
                      alt={type.name}
                      fill
                      className="object-cover"
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
                Get answers to common questions about our platform
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqItems.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="professional-card border-0">
                    <AccordionTrigger className="card-spacing text-left font-semibold hover:bg-neutral-50">{faq.question}</AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-body">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-background text-white">
        <div className="section-spacing">
          <div className="container-spacing text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg text-white mb-6">
                Ready to Find Your Dream Car?
              </h2>
              <p className="text-body-lg text-white/90 mb-8 max-w-3xl mx-auto">
                Join thousands of satisfied customers who found their perfect
                vehicle through our innovative platform.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary" className="btn-secondary bg-white text-primary-blue" asChild>
                  <Link href="/cars">View All Cars</Link>
                </Button>
                <SignedOut>
                  <Button size="lg" className="btn-primary" asChild>
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
