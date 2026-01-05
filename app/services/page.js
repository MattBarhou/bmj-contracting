import Image from "next/image";
import Link from "next/link";
import { services } from "@/data";
import { HiArrowRight, HiCheck, HiPhone } from "react-icons/hi2";
import {
  LuBath,
  LuChefHat,
  LuPipette,
  LuPaintbrush,
  LuLightbulb,
  LuGrid2X2,
  LuBuilding2,
  LuFence,
} from "react-icons/lu";

// Service icons mapping
const serviceIcons = {
  1: <LuBath className="w-8 h-8" />, // Bathroom
  2: <LuChefHat className="w-8 h-8" />, // Kitchen
  3: <LuPipette className="w-8 h-8" />, // Plumbing
  4: <LuPaintbrush className="w-8 h-8" />, // Painting
  5: <LuLightbulb className="w-8 h-8" />, // Electrical
  6: <LuGrid2X2 className="w-8 h-8" />, // Tiling
  7: <LuBuilding2 className="w-8 h-8" />, // Basement
  8: <LuFence className="w-8 h-8" />, // Decks
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-base-200">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-6">
                Our Services
              </h1>
              <p className="text-lg lg:text-xl text-base-content/70 leading-relaxed">
                We offer a comprehensive range of contracting services to meet
                all your residential and commercial needs. From small repairs to
                complete renovations, our experienced team delivers quality
                craftsmanship and attention to detail on every project. No job
                is too big or too small — we're here to bring your vision to
                life.
              </p>
            </div>

            {/* Right: Logo */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/bmj_logo.png"
                alt="BMJ Contracting"
                width={520}
                height={520}
                className="w-64 sm:w-72 md:w-80 lg:w-[420px] h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="card-body">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-box bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      {serviceIcons[service.id]}
                    </div>
                    <div className="flex-1">
                      <h2 className="card-title text-xl font-semibold text-base-content mb-2">
                        {service.title}
                      </h2>
                      <p className="text-base-content/70 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm text-base-content/80"
                          >
                            <HiCheck className="w-4 h-4 text-accent shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-content mb-4">
            Don't see what you need?
          </h2>
          <p className="text-lg text-primary-content/80 mb-8 max-w-2xl mx-auto">
            We offer many more services beyond what's listed here. Contact us to
            discuss your project and get a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-accent btn-lg">
              Get a Free Quote
              <HiArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:4162194163"
              className="btn btn-outline btn-lg border-primary-content text-primary-content hover:bg-primary-content hover:text-primary"
            >
              <HiPhone className="w-5 h-5" />
              Call (416) 219-4163
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
