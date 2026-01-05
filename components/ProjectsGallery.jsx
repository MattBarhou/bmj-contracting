"use client";

import { useMemo, useState } from "react";
import ProjectCarousel from "@/components/ProjectCarousel";

export default function ProjectsGallery({ projects = [], categories = [] }) {
  const [activeCategory, setActiveCategory] = useState(categories[0] ?? "All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <>
      {/* Filter Tabs */}
      <section className="py-8 border-b border-base-200 sticky top-20 bg-base-100/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-content"
                    : "bg-base-200 text-base-content/70 hover:bg-base-300 hover:text-base-content"
                }`}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          {filteredProjects.length ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <ProjectCarousel
                    images={project.images}
                    title={project.title}
                  />
                  <div className="card-body">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="card-title text-lg font-semibold text-base-content">
                      {project.title}
                    </h3>
                    <p className="text-base-content/70 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-base-content/60 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
