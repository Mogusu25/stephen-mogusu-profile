
import Image from "next/image";
import Link from "next/link";

const experience = [
  {
    period: "SEP 2024 — PRESENT",
    role: "Computer Science Teacher & IT Technician",
    organisation: "Luther Park International School",
    location: "Kisii, Kenya",
    description:
      "Delivering Computing, ICT and Digital Literacy education. Supporting programming instruction, digital learning, school networks, hardware and IT infrastructure.",
  },
  {
    period: "FEB 2023 — FEB 2024",
    role: "ICT Officer Intern",
    organisation: "Ministry of Education",
    location: "Nairobi, Kenya",
    description:
      "Supported the Digital Literacy Programme, teacher training, school data management, digital device implementation and ICT integration across public primary schools in Etago Sub-County.",
  },
  {
    period: "SEP 2021 — DEC 2021",
    role: "ICT Attaché / IT Trainee",
    organisation: "Kisii Teaching and Referral Hospital",
    location: "Kisii, Kenya",
    description:
      "Maintained computer systems and networks, managed user accounts, provided technical support and assisted with hardware and software troubleshooting.",
  },
];

const skills = [
  {
    category: "DATA ANALYSIS & VISUALISATION",
    items: [
      "Python",
      "Pandas",
      "Microsoft Excel",
      "Google Data Studio",
      "Data Analysis",
      "Data Visualisation",
    ],
  },
  {
    category: "PROGRAMMING & WEB DEVELOPMENT",
    items: [
      "Python",
      "HTML",
      "CSS",
      "Scratch",
      "JavaScript",
      "GitHub",
    ],
  },
  {
    category: "DATABASES & DATA MANAGEMENT",
    items: [
      "Data Integration",
      "Database Management",
      "Data Cleaning",
      "KEMIS / NEMIS",
      "Research & Reporting",
    ],
  },
  {
    category: "NETWORKS & IT INFRASTRUCTURE",
    items: [
      "Network Administration",
      "System Administration",
      "Active Directory",
      "Hardware Support",
      "AnyDesk",
      "TeamViewer",
    ],
  },
  {
    category: "EDUCATIONAL TECHNOLOGY",
    items: [
      "Digital Literacy",
      "Computing Education",
      "Google Classroom",
      "Microsoft Teams",
      "Code.org",
      "Robotics",
    ],
  },
];

const projects = [
  {
    number: "01",
    category: "DATA MANAGEMENT & INTEGRATION",
    title: "KEMIS Data Integration",
    description:
      "Supported school data integration across Etago Sub-County, contributing to an improvement in KEMIS compliance from 6% to 100%. Assisted school administrators and ICT champions with system navigation, accurate data entry and data quality.",
    organisation: "Ministry of Education",
    result: "6% → 100% compliance",
  },
  {
    number: "02",
    category: "EDUCATION DATA & REPORTING",
    title: "Education Data Management",
    description:
      "Collected, compiled and cleaned school datasets to support education research objectives and Ministry reporting requirements.",
    organisation: "Ministry of Education",
    result: "Education data support",
  },
  {
    number: "03",
    category: "DIGITAL TRANSFORMATION",
    title: "Digital Literacy Programme",
    description:
      "Supported digital learning through device implementation, teacher orientation, classroom technology setup and ICT integration.",
    organisation: "Ministry of Education",
    result: "Digital learning implementation",
  },
  {
    number: "04",
    category: "COMPUTING EDUCATION & STEM",
    title: "Coding Club & Robotics",
    description:
      "Established and lead extracurricular activities introducing learners to programming, computational thinking and introductory robotics.",
    organisation: "Luther Park International School",
    result: "Practical STEM learning",
  },
];

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-[#f7f6f2] text-[#18283b]">

      {/* =================================
          HERO SECTION
      ================================= */}

      <section className="px-5 pb-14 pt-5 sm:px-8 sm:pb-16 sm:pt-5 lg:px-12 lg:pb-16 lg:pt-5">

        <div className="mx-auto grid w-full max-w-7xl items-start gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">

          {/* INTRODUCTION */}

          <div className="min-w-0 pt-5 lg:pt-16">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a38448] sm:tracking-[0.25em]">
              EDUCATION · COMPUTING · DATA · TECHNOLOGY
            </p>

            <h1 className="mt-6 font-serif text-5xl leading-[1.08] text-[#0b1f3a] sm:text-6xl lg:text-7xl">
              Stephen Maikara
              <span className="block text-[#a38448]">
                Mogusu.
              </span>
            </h1>

            <h2 className="mt-5 text-base font-bold leading-relaxed text-[#263d57] sm:text-lg">
              Computer Science Teacher | ICT Educator | IT Technician
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-8 text-[#68717b] sm:text-base">
              An Information Technology graduate and educator with
              experience in international school teaching, programming,
              data management and IT infrastructure support. Combining
              technical expertise with practical education to develop
              digital competence, analytical thinking and problem-solving.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">

              <Link
                href="/portfolio"
                className="inline-flex min-h-12 items-center justify-center bg-[#0b1f3a] px-6 py-4 text-center text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#b59656] hover:text-[#0b1f3a]"
              >
                Explore My Work
              </Link>

              <Link
                href="/about"
                className="inline-flex min-h-12 items-center justify-center border border-[#0b1f3a] px-6 py-4 text-center text-xs font-bold uppercase tracking-widest text-[#0b1f3a] transition hover:bg-[#0b1f3a] hover:text-white"
              >
                Professional Profile
              </Link>

            </div>
          </div>

          {/* PHOTO AND PROFILE CARD */}

          <div className="mx-auto flex w-full max-w-[320px] flex-col gap-4 pt-0">

            {/* RECTANGULAR PROFESSIONAL PHOTO */}

            <div className="relative w-full overflow-hidden rounded-lg border-[4px] border-white bg-[#e9e5dd] shadow-[0_12px_30px_rgba(11,31,58,0.12)] ring-1 ring-[#b59656]">

              <div className="relative aspect-[5/4] w-full">

                <Image
                  src="/images/image%202.jpeg"
                  alt="Stephen Maikara Mogusu at work"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, 320px"
                  className="object-cover object-center"
                />

              </div>

            </div>

            {/* PROFESSIONAL PROFILE CARD */}

            <div className="w-full bg-[#0b1f3a] p-6 text-white shadow-[0_10px_25px_rgba(11,31,58,0.10)] sm:p-7">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c6a76b]">
                PROFESSIONAL PROFILE
              </p>

              <h2 className="mt-4 font-serif text-3xl leading-tight text-white">
                Education meets
                <span className="block text-[#c6a76b]">
                  technology.
                </span>
              </h2>

              <div className="mt-5 border-t border-white/20 pt-4">

                <p className="text-[10px] uppercase tracking-widest text-slate-400">
                  Academic Qualification
                </p>

                <p className="mt-2 text-base font-bold text-white">
                  BSc in Informatics
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  University of Eldoret
                </p>

              </div>

              <div className="mt-5 border-t border-white/20 pt-4">

                <p className="text-[10px] uppercase tracking-widest text-slate-400">
                  Professional Focus
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-200">
                  Computing Education · Data Analytics · Programming ·
                  AI Training · IT Systems
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =================================
          PROFESSIONAL EXPERIENCE
      ================================= */}

      <section className="border-t border-[#dedbd2] bg-white px-5 py-14 sm:px-8 lg:px-12">

        <div className="mx-auto w-full max-w-7xl">

          <div className="flex flex-wrap items-end justify-between gap-4">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a38448]">
                PROFESSIONAL JOURNEY
              </p>

              <h2 className="mt-3 font-serif text-4xl text-[#0b1f3a]">
                Experience
              </h2>
            </div>

            <Link
              href="/about"
              className="border-b border-[#b59656] pb-2 text-sm font-bold text-[#0b1f3a]"
            >
              View professional profile →
            </Link>

          </div>

          <div className="mt-10 grid gap-9 md:grid-cols-2 lg:grid-cols-3">

            {experience.map((item) => (
              <article
                key={item.organisation}
                className="min-w-0 border-l-2 border-[#b59656] pl-5"
              >

                <p className="text-xs font-bold tracking-widest text-[#a38448]">
                  {item.period}
                </p>

                <h3 className="mt-4 text-lg font-bold leading-snug text-[#0b1f3a]">
                  {item.role}
                </h3>

                <p className="mt-2 text-sm font-semibold text-[#263d57]">
                  {item.organisation}
                </p>

                <p className="mt-1 text-xs text-[#8a929b]">
                  {item.location}
                </p>

                <p className="mt-4 text-sm leading-7 text-[#68717b]">
                  {item.description}
                </p>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* =================================
          DATA & ANALYTICS
      ================================= */}

      <section className="bg-[#0b1f3a] px-5 py-14 text-white sm:px-8 lg:px-12">

        <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-2">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c6a76b]">
              DATA & ANALYTICS
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-white">
              Turning data into meaningful insights.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-8 text-slate-300">
              Applying programming, data analysis and visualisation
              techniques to organise information, identify patterns
              and support informed decisions.
            </p>

            <Link
              href="/portfolio"
              className="mt-7 inline-block border-b border-[#c6a76b] pb-2 text-sm font-bold text-[#c6a76b]"
            >
              Explore data projects →
            </Link>

          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">

            {[
              "Python",
              "Pandas",
              "Microsoft Excel",
              "Google Data Studio",
              "BeautifulSoup",
              "Data Visualisation",
            ].map((tool) => (
              <div
                key={tool}
                className="flex min-h-20 items-center border border-white/20 px-4 py-5 transition hover:border-[#c6a76b]"
              >
                <span className="text-sm font-bold text-white">
                  {tool}
                </span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =================================
          TECHNICAL SKILLS
      ================================= */}

      <section className="bg-[#f0eee8] px-5 py-14 sm:px-8 lg:px-12">

        <div className="mx-auto w-full max-w-7xl">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a38448]">
            TECHNICAL CAPABILITIES
          </p>

          <h2 className="mt-3 font-serif text-4xl text-[#0b1f3a]">
            Skills & Expertise
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#68717b]">
            A multidisciplinary skill set covering education,
            programming, data, digital systems and technology support.
          </p>

          <div className="mt-9 grid gap-8 md:grid-cols-2">

            {skills.map((group) => (
              <div
                key={group.category}
                className="min-w-0 border-t border-[#cfc9bc] pt-5"
              >

                <h3 className="text-xs font-extrabold tracking-widest text-[#0b1f3a]">
                  {group.category}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">

                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="border border-[#d3cec2] bg-white px-4 py-2 text-xs font-semibold text-[#34475b]"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =================================
          PROJECTS & ACHIEVEMENTS
      ================================= */}

      <section className="bg-white px-5 py-14 sm:px-8 lg:px-12">

        <div className="mx-auto w-full max-w-7xl">

          <div className="flex flex-wrap items-end justify-between gap-4">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a38448]">
                SELECTED PROFESSIONAL ACHIEVEMENTS
              </p>

              <h2 className="mt-3 font-serif text-4xl text-[#0b1f3a]">
                Projects & Impact
              </h2>
            </div>

            <Link
              href="/portfolio"
              className="border-b border-[#b59656] pb-2 text-sm font-bold text-[#0b1f3a]"
            >
              View full portfolio →
            </Link>

          </div>

          <div className="mt-10 grid gap-9 md:grid-cols-2">

            {projects.map((project) => (
              <article
                key={project.number}
                className="min-w-0 border-t-2 border-[#b59656] pt-6"
              >

                <p className="text-xs font-bold tracking-widest text-[#a38448]">
                  {project.number} / {project.category}
                </p>

                <h3 className="mt-5 font-serif text-2xl leading-snug text-[#0b1f3a]">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#68717b]">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#dedbd2] pt-4">

                  <p className="text-xs font-bold text-[#a38448]">
                    {project.organisation}
                  </p>

                  <span className="text-xs font-semibold text-[#263d57]">
                    {project.result}
                  </span>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* =================================
          CONTACT FOOTER
      ================================= */}

      <footer className="bg-[#08182c] px-5 py-12 text-white sm:px-8 lg:px-12">

        <div className="mx-auto w-full max-w-7xl">

          <div className="grid gap-10 md:grid-cols-2">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c6a76b]">
                LET'S CONNECT
              </p>

              <h2 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-4xl">
                Open to meaningful professional opportunities.
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">
                For professional enquiries, collaboration, technology
                projects, data opportunities and educational initiatives,
                feel free to get in touch.
              </p>

            </div>

            <div className="space-y-5">

              <div className="border-b border-white/15 pb-4">

                <p className="text-[10px] font-bold uppercase tracking-widest text-[#c6a76b]">
                  EMAIL
                </p>

                <a
                  href="mailto:maikaramogusu@gmail.com"
                  className="mt-2 inline-block break-all text-sm text-white transition hover:text-[#c6a76b]"
                >
                  maikaramogusu@gmail.com
                </a>

              </div>

              <div className="border-b border-white/15 pb-4">

                <p className="text-[10px] font-bold uppercase tracking-widest text-[#c6a76b]">
                  PHONE
                </p>

                <a
                  href="tel:+254720028762"
                  className="mt-2 inline-block text-sm text-white transition hover:text-[#c6a76b]"
                >
                  +254 720 028 762
                </a>

              </div>

              <div className="border-b border-white/15 pb-4">

                <p className="text-[10px] font-bold uppercase tracking-widest text-[#c6a76b]">
                  LINKEDIN
                </p>

                <a
                  href="https://linkedin.com/in/stephen-mogusu-563a61230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block break-all text-sm text-white transition hover:text-[#c6a76b]"
                >
                  linkedin.com/in/stephen-mogusu-563a61230
                </a>

              </div>

              <div>

                <p className="text-[10px] font-bold uppercase tracking-widest text-[#c6a76b]">
                  LOCATION
                </p>

                <p className="mt-2 text-sm text-white">
                  Nairobi, Kenya · Open to Remote Work
                </p>

              </div>

            </div>

          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6">

            <p className="text-sm font-bold tracking-wide text-white">
              STEPHEN MAIKARA MOGUSU
            </p>

            <p className="text-xs text-slate-400">
              Computer Science Teacher · ICT Educator · IT Professional
            </p>

            <p className="w-full text-xs text-slate-400">
              © {new Date().getFullYear()} Stephen Maikara Mogusu.
              All rights reserved.
            </p>

          </div>

        </div>
      </footer>

    </main>
  );
}
