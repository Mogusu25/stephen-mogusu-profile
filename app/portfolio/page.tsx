
const projects = [
  {
    number: "01",
    title: "Education Data Management",
    category: "DATA & ANALYTICS",
    description:
      "Supporting education data management, reporting and integration through digital systems and data-driven processes.",
  },
  {
    number: "02",
    title: "Coding Club & Robotics",
    category: "EDUCATION & TECHNOLOGY",
    description:
      "Establishing and leading coding and introductory robotics learning experiences that develop creativity, computational thinking and problem-solving.",
  },
  {
    number: "03",
    title: "Digital Literacy Programme",
    category: "ICT & DIGITAL TRANSFORMATION",
    description:
      "Supporting digital literacy initiatives and education technology implementation through ICT support and data management.",
  },
  {
    number: "04",
    title: "Data Analytics & Python",
    category: "PROGRAMMING & DATA",
    description:
      "Applying Python, Pandas, Excel and web data collection techniques to explore datasets, organise information and develop useful insights.",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#18283b]">

      {/* HERO */}
      <section className="bg-[#0b1f3a] px-6 py-24 text-white md:py-32 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-[#c6a76b]">
            Selected Work
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
            Projects & 
            <span className="block text-[#c6a76b]">
              Professional Work.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
            A selection of projects and initiatives reflecting my
            experience across education, computing, data and technology.
          </p>

          <div className="mt-10 h-1 w-20 bg-[#c6a76b]" />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-6 py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b59656]">
              My Work
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#0b1f3a] md:text-4xl">
              Turning Ideas Into Impact.
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#68717b]">
              These projects represent areas of practical experience,
              professional contribution and continued development.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="border border-[#dedbd2] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-light text-[#c6a76b]">
                    {project.number}
                  </span>

                  <span className="text-[10px] font-bold tracking-[0.15em] text-[#b59656]">
                    {project.category}
                  </span>
                </div>

                <div className="mt-10 h-px w-full bg-[#dedbd2]" />

                <h3 className="mt-8 text-2xl font-bold text-[#0b1f3a]">
                  {project.title}
                </h3>

                <p className="mt-5 text-sm leading-8 text-[#68717b]">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-white px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b59656]">
            Collaboration
          </p>

          <h2 className="mt-5 text-3xl font-bold text-[#0b1f3a] md:text-4xl">
            Have a Project in Mind?
          </h2>

          <p className="mt-5 text-sm leading-8 text-[#68717b]">
            I welcome opportunities to collaborate, exchange ideas
            and contribute to meaningful technology and education projects.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex bg-[#0b1f3a] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#b59656]"
          >
            Get in Touch →
          </a>
        </div>
      </section>

    </main>
  );
}
