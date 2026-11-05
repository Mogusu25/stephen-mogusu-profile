
import Link from "next/link";
import CurrentYear from "@/components/CurrentYear";

const expertiseAreas = [
  {
    number: "01",
    title: "Data Analytics & Data Science",
    subtitle: "Turning information into meaningful insights",
    description:
      "Working with real-world datasets to collect, clean, process, analyse and visualise information. Applying Python-based tools to identify patterns and communicate findings.",
    skills: [
      "Python",
      "Pandas",
      "Microsoft Excel",
      "Google Colab",
      "Matplotlib",
      "Seaborn",
      "BeautifulSoup",
      "Web Scraping",
      "Statistical Analysis",
      "Data Visualisation",
    ],
  },
  {
    number: "02",
    title: "Artificial Intelligence & AI Training",
    subtitle: "Supporting the development and evaluation of AI systems",
    description:
      "Developing practical knowledge in AI data annotation, prompt evaluation, LLM evaluation and AI content review, with a growing focus on generative AI and machine learning support.",
    skills: [
      "AI Data Annotation",
      "Prompt Engineering",
      "Prompt Evaluation",
      "LLM Evaluation",
      "AI Content Review",
      "AI Training Support",
      "Generative AI",
      "Machine Learning Support",
    ],
  },
  {
    number: "03",
    title: "ICT Support & IT Infrastructure",
    subtitle: "Keeping digital systems reliable and accessible",
    description:
      "Providing technical support through system administration, network configuration, hardware and software troubleshooting, user account management and IT infrastructure maintenance.",
    skills: [
      "Technical Support",
      "Network Administration",
      "System Administration",
      "Network Configuration",
      "Active Directory",
      "Hardware Troubleshooting",
      "Printer Setup",
      "Remote Desktop Support",
      "AnyDesk",
      "TeamViewer",
    ],
  },
  {
    number: "04",
    title: "Computing & Digital Education",
    subtitle: "Building digital skills through practical learning",
    description:
      "Delivering Computing, Computer Science and Digital Literacy instruction. Designing assessments, supporting diverse learning needs and organising practical coding and robotics activities.",
    skills: [
      "Computer Science Teaching",
      "Digital Literacy Training",
      "Curriculum Development",
      "Programming Instruction",
      "Coding Clubs",
      "Robotics Activities",
      "Digital Citizenship",
      "AI Ethics",
      "ICT Integration",
    ],
  },
  {
    number: "05",
    title: "Web Technologies & Digital Tools",
    subtitle: "Creating and supporting digital environments",
    description:
      "Working with foundational web technologies, version control, productivity platforms and digital systems for communication, collaboration and information management.",
    skills: [
      "HTML",
      "CSS",
      "GitHub",
      "Version Control",
      "Microsoft Office 365",
      "Google Workspace",
      "Google Forms",
      "Google Sheets",
      "KEMIS / NEMIS",
      "Tabula",
    ],
  },
];

const tools = [
  { name: "Python", group: "Programming & Data" },
  { name: "Pandas", group: "Programming & Data" },
  { name: "Google Colab", group: "Programming & Data" },
  { name: "Matplotlib", group: "Visualisation" },
  { name: "Seaborn", group: "Visualisation" },
  { name: "Microsoft Excel", group: "Data & Productivity" },
  { name: "BeautifulSoup", group: "Web Scraping" },
  { name: "HTML & CSS", group: "Web Technologies" },
  { name: "GitHub", group: "Development Tools" },
  { name: "Microsoft 365", group: "Productivity" },
  { name: "Google Workspace", group: "Productivity" },
  { name: "AnyDesk", group: "IT Support" },
  { name: "TeamViewer", group: "IT Support" },
  { name: "Active Directory", group: "IT Administration" },
];

const competencies = [
  "Research & Reporting",
  "Data Cleaning",
  "Statistical Analysis",
  "Technical Troubleshooting",
  "Remote Collaboration",
  "Cloud Computing Foundations",
  "Digital Literacy Training",
  "IT Infrastructure Management",
];

export default function ExpertisePage() {
  return (
    <main className="bg-[#f7f6f2] text-[#18283b]">

      {/* PAGE INTRODUCTION */}
      <section className="bg-[#0b1f3a] px-6 py-20 text-white md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c6a76b]">
            PROFESSIONAL CAPABILITIES
          </p>

          <div className="mt-8 grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-end">

            <div>
              <h1 className="max-w-4xl font-serif text-5xl leading-[1.1] md:text-7xl">
                Technology is my field.
                <span className="mt-3 block text-[#c6a76b]">
                  Problem-solving is my approach.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300">
                My expertise spans data analytics, artificial intelligence,
                IT infrastructure and Computing education. I combine
                practical technical experience with a strong interest
                in using technology to solve real-world challenges.
              </p>
            </div>

            <div className="border-l border-[#c6a76b]/50 pl-7 md:pl-9">
              <p className="text-xs font-bold uppercase tracking-widest text-[#c6a76b]">
                PROFESSIONAL PROFILE
              </p>

              <p className="mt-4 font-serif text-2xl leading-snug text-white">
                Data Analyst
              </p>

              <p className="mt-1 text-sm text-slate-300">
                AI Training Specialist
              </p>

              <p className="mt-1 text-sm text-slate-300">
                ICT Support Professional
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* EXPERTISE OVERVIEW */}
      <section className="px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a38448]">
              AREAS OF SPECIALISATION
            </p>

            <h2 className="mt-4 font-serif text-4xl text-[#0b1f3a] md:text-5xl">
              What I bring to the table.
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#68717b]">
              A multidisciplinary skill set developed through professional
              experience, practical projects, technical training and
              classroom instruction.
            </p>
          </div>

          <div className="mt-12 space-y-5">

            {expertiseAreas.map((area) => (
              <article
                key={area.number}
                className="grid gap-7 border border-[#e2ded4] bg-white p-7 transition duration-300 hover:border-[#b59656] md:grid-cols-[90px_1fr_1fr] md:gap-10 md:p-10"
              >

                <div>
                  <span className="font-serif text-4xl text-[#b59656]">
                    {area.number}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl leading-snug text-[#0b1f3a]">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-xs font-bold uppercase leading-6 tracking-wider text-[#a38448]">
                    {area.subtitle}
                  </p>

                  <p className="mt-5 text-sm leading-8 text-[#68717b]">
                    {area.description}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#0b1f3a]">
                    KEY SKILLS
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {area.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-[#dedbd2] bg-[#f7f6f2] px-3 py-2 text-xs font-medium text-[#34475b]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* TECHNICAL TOOLKIT */}
      <section className="bg-[#eeece5] px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a38448]">
                TECHNOLOGY STACK
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#0b1f3a]">
                Tools I work with.
              </h2>

              <p className="mt-5 text-sm leading-8 text-[#68717b]">
                A selection of programming languages, analytical libraries,
                productivity platforms and technical support tools
                included in my professional toolkit.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex min-h-24 flex-col justify-center border border-[#d8d2c6] bg-white px-4 py-4 transition hover:border-[#b59656]"
                >
                  <p className="text-sm font-bold text-[#0b1f3a]">
                    {tool.name}
                  </p>

                  <p className="mt-2 text-[10px] uppercase tracking-wider text-[#8a929b]">
                    {tool.group}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* ADDITIONAL COMPETENCIES */}
      <section className="bg-white px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a38448]">
            PROFESSIONAL STRENGTHS
          </p>

          <h2 className="mt-4 font-serif text-4xl text-[#0b1f3a]">
            Beyond technical skills.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-8 text-[#68717b]">
            My professional work also involves research, communication,
            training, reporting and the ability to work collaboratively
            across technical and educational environments.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 md:grid-cols-4">

            {competencies.map((competency, index) => (
              <div
                key={competency}
                className="border-t-2 border-[#b59656] bg-[#f7f6f2] p-5"
              >
                <p className="font-serif text-2xl text-[#b59656]">
                  0{index + 1}
                </p>

                <p className="mt-4 text-sm font-bold leading-6 text-[#0b1f3a]">
                  {competency}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROFESSIONAL DEVELOPMENT */}
      <section className="bg-[#0b1f3a] px-6 py-16 text-white md:px-12 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1fr]">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c6a76b]">
              CONTINUOUS LEARNING
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-white">
              Growing with data and artificial intelligence.
            </h2>

            <p className="mt-5 text-sm leading-8 text-slate-300">
              I continue to develop my capabilities in data science,
              machine learning support, generative AI, LLM evaluation,
              cloud computing and cybersecurity.
            </p>
          </div>

          <div className="border border-white/20 p-7 md:p-9">

            <p className="text-xs font-bold uppercase tracking-widest text-[#c6a76b]">
              TRAINING IN PROGRESS
            </p>

            <h3 className="mt-5 font-serif text-2xl text-white">
              Data and AI Programme
            </h3>

            <p className="mt-2 text-sm font-semibold text-slate-200">
              Cyber Shujaa
            </p>

            <p className="mt-1 text-xs text-slate-400">
              May 2025 – August 2025 · As listed in CV
            </p>

            <p className="mt-5 text-sm leading-8 text-slate-300">
              Project-based training covering data analysis, data cleaning,
              visualisation, machine learning support, generative AI,
              AI data annotation, cloud computing and cybersecurity principles.
            </p>

          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-[#f7f6f2] px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a38448]">
              SEE MY WORK IN PRACTICE
            </p>

            <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-[#0b1f3a] md:text-4xl">
              Skills are most meaningful when applied to real challenges.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#68717b]">
              Explore selected projects and professional contributions
              from my experience in data, education and technology.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center bg-[#0b1f3a] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#c6a76b] hover:text-[#0b1f3a]"
          >
            Explore My Portfolio →
          </Link>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#08182c] px-6 py-8 text-white md:px-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">

          <p className="text-sm font-bold tracking-wide">
            STEPHEN MAIKARA MOGUSU
          </p>

          <p className="text-xs text-slate-400">
            Data Analyst · AI Training Specialist · ICT Support Professional
          </p>

          <p className="w-full border-t border-white/10 pt-5 text-xs text-slate-400">
           © <CurrentYear /> Stephen Maikara Mogusu.
            All rights reserved.
            All rights reserved.
          </p>

        </div>
      </footer>

    </main>
  );
}
