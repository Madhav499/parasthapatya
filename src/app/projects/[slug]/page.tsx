import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PROJECTS, Project } from "@/data/projects";

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Find next project
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="bg-para-ivory text-para-charcoal min-h-screen">
      {/* Project Hero Section */}
      <section className="relative h-[85vh] sm:h-screen w-full bg-para-charcoal flex items-end pb-16 overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-para-charcoal via-para-charcoal/40 to-transparent" />

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-12 w-full text-para-ivory">
          <div className="flex items-center space-x-3 mb-4 font-sans text-xs tracking-ultra text-para-sandstone uppercase">
            <Link href="/projects" className="hover:underline">PROJECTS</Link>
            <span>/</span>
            <span>{project.category}</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light tracking-wide mb-6">
            {project.title}
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-para-charcoal-muted font-sans text-xs text-para-sandstone tracking-widest uppercase">
            <div>
              <span className="text-[10px] text-para-ivory/50 block mb-1">LOCATION</span>
              <span>{project.location}</span>
            </div>
            <div>
              <span className="text-[10px] text-para-ivory/50 block mb-1">YEAR</span>
              <span>{project.year}</span>
            </div>
            <div>
              <span className="text-[10px] text-para-ivory/50 block mb-1">SCALE</span>
              <span>{project.area}</span>
            </div>
            <div>
              <span className="text-[10px] text-para-ivory/50 block mb-1">SCOPE</span>
              <span>{project.scope}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Statement */}
      <section className="py-24 sm:py-32 max-w-[1400px] mx-auto px-6 sm:px-12">
        <span className="font-sans text-xs tracking-ultra text-para-bronze font-bold uppercase block mb-4">
          ARCHITECTURAL STATEMENT
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-light text-para-charcoal leading-tight mb-8">
          "{project.statement}"
        </h2>
        <p className="font-sans text-lg sm:text-xl text-para-charcoal/80 font-light leading-relaxed max-w-4xl">
          {project.description}
        </p>
      </section>

      {/* Design Thinking Breakdown */}
      <section className="py-20 bg-para-ivory-dark/40 border-y border-para-stone/20">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
          <span className="font-sans text-xs tracking-ultra uppercase text-para-bronze font-bold block mb-12">
            DESIGN STRATEGY & DISCIPLINE
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-para-ivory border border-para-stone/20">
              <span className="font-sans text-[10px] tracking-ultra text-para-bronze font-bold block mb-2">01 / CONCEPT</span>
              <h3 className="font-serif text-xl font-normal mb-2">Spatial Concept</h3>
              <p className="font-sans text-sm text-para-charcoal/70 font-light">{project.designThinking.concept}</p>
            </div>

            <div className="p-6 bg-para-ivory border border-para-stone/20">
              <span className="font-sans text-[10px] tracking-ultra text-para-bronze font-bold block mb-2">02 / SPATIAL FLOW</span>
              <h3 className="font-serif text-xl font-normal mb-2">Circulation & Volume</h3>
              <p className="font-sans text-sm text-para-charcoal/70 font-light">{project.designThinking.spatialStrategy}</p>
            </div>

            <div className="p-6 bg-para-ivory border border-para-stone/20">
              <span className="font-sans text-[10px] tracking-ultra text-para-bronze font-bold block mb-2">03 / MATERIALITY</span>
              <h3 className="font-serif text-xl font-normal mb-2">Stones & Craft</h3>
              <p className="font-sans text-sm text-para-charcoal/70 font-light">{project.designThinking.materials}</p>
            </div>

            <div className="p-6 bg-para-ivory border border-para-stone/20">
              <span className="font-sans text-[10px] tracking-ultra text-para-bronze font-bold block mb-2">04 / LIGHT & AIR</span>
              <h3 className="font-serif text-xl font-normal mb-2">Sunlight & Shadow</h3>
              <p className="font-sans text-sm text-para-charcoal/70 font-light">{project.designThinking.lightAndCirculation}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Photo Gallery */}
      <section className="py-24 sm:py-36 max-w-[1600px] mx-auto px-6 sm:px-12">
        <span className="font-sans text-xs tracking-ultra uppercase text-para-bronze font-bold block mb-12">
          VISUAL ARCHIVE & PHOTOGRAPHY
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {project.gallery.map((imgUrl, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden bg-para-charcoal/5 ${
                idx % 3 === 0 ? "md:col-span-2 h-[500px] sm:h-[700px]" : "h-[400px] sm:h-[550px]"
              }`}
              data-cursor="explore"
            >
              <Image
                src={imgUrl}
                alt={`${project.title} detail ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Next Project Footer Bar */}
      <section className="bg-para-charcoal text-para-ivory py-24 border-t border-para-charcoal-muted">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 flex flex-col items-center text-center">
          <span className="font-sans text-xs tracking-ultra uppercase text-para-sandstone block mb-4">
            NEXT ARCHITECTURAL BUILD
          </span>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group font-serif text-4xl sm:text-6xl font-light hover:text-para-sandstone transition-colors"
            data-cursor="project"
          >
            <span>{nextProject.title}</span>
            <span className="font-sans text-2xl ml-4 text-para-bronze group-hover:translate-x-2 transition-transform inline-block">→</span>
          </Link>
          <span className="font-sans text-xs text-para-ivory/50 uppercase tracking-widest mt-3">
            {nextProject.category} — {nextProject.location}
          </span>
        </div>
      </section>
    </div>
  );
}
