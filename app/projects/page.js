import { projects, projectCategories } from "@/data";
import { HiArrowRight, HiPhone } from "react-icons/hi2";
import ProjectsGallery from "@/components/ProjectsGallery";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-base-200">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-6">
              Our Projects
            </h1>
            <p className="text-lg lg:text-xl text-base-content/70 leading-relaxed">
              Browse through our portfolio of completed projects. From stunning
              bathroom renovations to large-scale commercial builds, see the
              quality craftsmanship we deliver on every job.
            </p>
          </div>
        </div>
      </section>

      <ProjectsGallery projects={projects} categories={projectCategories} />

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-content mb-4">
            Ready to start your project?
          </h2>
          <p className="text-lg text-primary-content/80 mb-8 max-w-2xl mx-auto">
            Let us help you transform your space. Contact us today for a free
            consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@bmjcontracting.ca?subject=Quote Request"
              className="btn btn-accent btn-lg"
            >
              Get a Free Quote
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
