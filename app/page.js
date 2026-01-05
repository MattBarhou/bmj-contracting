import Image from "next/image";
import Link from "next/link";
import {
  HiMapPin,
  HiArrowRight,
  HiCheckCircle,
  HiPhone,
  HiChevronRight,
} from "react-icons/hi2";
import {
  LuBuilding2,
  LuHouse,
  LuLayoutDashboard,
  LuPaintbrush,
  LuTrees,
  LuBuilding,
} from "react-icons/lu";
import { featuredImages, projects } from "@/data";
import HeroCarousel from "@/components/HeroCarousel";

// Service card data
const services = [
  {
    title: "Basement Renovations",
    description:
      "Transform your basement into a beautiful living space, home office, or entertainment area.",
    icon: <LuBuilding2 className="w-8 h-8" />,
  },
  {
    title: "Kitchens & Bathrooms",
    description:
      "Full kitchen and bathroom renovations with modern fixtures, custom cabinetry, and quality finishes.",
    icon: <LuHouse className="w-8 h-8" />,
  },
  {
    title: "Full Home Renovations",
    description:
      "Complete home transformations from concept to completion, managing every detail for you.",
    icon: <LuLayoutDashboard className="w-8 h-8" />,
  },
  {
    title: "Painting & Finishing",
    description:
      "Interior and exterior painting services with premium paints and expert preparation. We ensure a flawless, long-lasting finish every time.",
    icon: <LuPaintbrush className="w-8 h-8" />,
  },
  {
    title: "Exterior Projects",
    description:
      "Enhance your curb appeal with siding, roofing, decks, landscaping, and outdoor living spaces.",
    icon: <LuTrees className="w-8 h-8" />,
  },
  {
    title: "Commercial Construction",
    description:
      "Professional commercial build-outs, tenant improvements, and retail/office renovations.",
    icon: <LuBuilding className="w-8 h-8" />,
  },
];

// Get first 6 projects for preview
const previewProjects = projects.slice(0, 6);

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <HiMapPin className="w-4 h-4" />
                Serving Vaughan & the GTA
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-base-content leading-tight mb-6">
                General Contractor in{" "}
                <span className="text-primary">Vaughan, Ontario</span>
              </h1>
              <p className="text-lg lg:text-xl text-base-content/70 mb-8 max-w-xl leading-relaxed">
                From complete home renovations and commercial projects — we
                deliver quality craftsmanship, clear communication, and results
                that exceed expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:info@bmjcontracting.ca?subject=Quote Request"
                  className="btn btn-primary btn-lg"
                >
                  Request a Quote
                  <HiArrowRight className="w-5 h-5" />
                </a>
                <Link href="/projects" className="btn btn-outline btn-lg">
                  View Our Work
                </Link>
              </div>
            </div>

            {/* Right: Hero Carousel */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-linear-to-tr from-primary/20 via-secondary/20 to-accent/20 rounded-box blur-2xl opacity-60"></div>
                <div className="relative">
                  <HeroCarousel images={featuredImages} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
              Our Services
            </h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Comprehensive contracting services for residential and commercial
              projects throughout Vaughan and the Greater Toronto Area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href="/services"
                className="card bg-base-100 shadow-sm hover:shadow-lg transition-all duration-300 group border border-base-300/50 hover:border-primary/30"
              >
                <div className="card-body">
                  <div className="w-14 h-14 rounded-box bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-content transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="card-title text-xl font-semibold text-base-content group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-base-content/70 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <HiChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
              Our Work
            </h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Browse our portfolio of completed projects — from stunning kitchen
              renovations to complete home transformations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewProjects.map((project) => (
              <Link
                key={project.id}
                href="/projects"
                className="group cursor-pointer"
              >
                <div className="relative aspect-4/3 overflow-hidden rounded-box">
                  <Image
                    src={project.images[project.images.length - 1].src}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-base-content/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <p className="text-base-100 font-semibold text-lg">
                        {project.title}
                      </p>
                      <p className="text-base-100/80 text-sm">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="btn btn-outline btn-primary btn-lg"
            >
              View All Projects
              <HiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-content mb-6">
            Planning to renovate your home or business?
          </h2>
          <p className="text-lg lg:text-xl text-primary-content/80 mb-10 max-w-2xl mx-auto">
            Get a clear, detailed quote and realistic timeline. We make the
            process simple and stress-free from start to finish.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@bmjcontracting.ca?subject=Quote Request"
              className="btn btn-accent btn-lg"
            >
              Request a Quote
              <HiArrowRight className="w-5 h-5" />
            </a>
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
