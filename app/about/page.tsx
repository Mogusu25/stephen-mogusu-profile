
import CurrentYear from "@/components/CurrentYear";
import Image from "next/image";
import Link from "next/link";

const career = [
  {
    number: "01",
    period: "SEP 2021 – DEC 2021",
    role: "ICT Attaché / IT Trainee",
    organisation: "Kisii Teaching and Referral Hospital",
    description:
      "Gained practical experience in computer systems, network operations, user account management, technical support and hardware and software troubleshooting.",
  },
  {
    number: "02",
    period: "FEB 2023 – FEB 2024",
    role: "ICT Officer Intern",
    organisation: "Ministry of Education",
    description:
      "Supported the Digital Literacy Programme, teacher orientation, school data management and KEMIS implementation across public primary schools in Etago Sub-County.",
  },
  {
    number: "03",
    period: "SEP 2024 – PRESENT",
    role: "Computer Science Teacher & IT Technician",
    organisation: "Luther Park International School",
    description:
      "Teaching Computing, ICT and Digital Literacy while supporting programming education, digital learning, school networks and IT infrastructure. Established and lead a Coding Club and introductory Robotics programme.",
  },
];

const interests = [
  "Computing Education",
  "Programming & Coding",
  "Data Analytics",
  "Robotics",
  "Digital Transformation",
  "IT Infrastructure",
];

export default function AboutPage() {
  return (
    <main className="bg-[#f7f6f2] text-[#18283b]">

      {/* INTRODUCTION */}
      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-[1.1fr_0.9fr]">

          {/* INTRODUCTION CARD */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a38448]">
              ABOUT ME · PROFESSIONAL PROFILE
            </p>

            <h1 className="mt-6 font-serif text-5xl leading-[1.1] text-[#0b1f3a] md:text-6xl">
              Beyond the title.
              <span className="mt-2 block text-[#a38448]">
                The person behind the work.
              </span>
            </h1>

            <div className="mt-7 rounded-sm border border-[#e3dfd5] border-l-4 border-l-[#b59656] bg-white p-6 shadow-[0_10px_35px_rgba(11,31,58,0.05)] md:p-8">

              <p className="text-base leading-8 text-[#536274]">
                I am Stephen Maikara Mogusu, an IT graduate and educator
                passionate about computing, digital learning and technology.
              </p>

              <p className="mt-5 text-base leading-8 text-[#536274]">
                My work combines technical experience with education —
                helping learners develop digital skills while supporting
                practical technology solutions.
              </p>

              <p className="mt-5 text-base leading-8 text-[#536274]">
                I believe technology should empower people, inspire
                innovation and solve meaningful problems.
              </p>

            </div>

            {/* CALL TO ACTION BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/expertise"
                className="inline-flex min-h-14 items-center justify-center bg-[#c6a76b] px-7 py-4 text-xs font-extrabold uppercase tracking-widest text-[#0b1f3a] transition duration-300 hover:bg-[#0b1f3a] hover:text-white"
              >
                Explore My Expertise
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex min-h-14 items-center justify-center bg-[#0b1f3a] px-7 py-4 text-xs font-extrabold uppercase tracking-widest text-white transition duration-300 hover:bg-[#263d57]"
              >
                View My Work
              </Link>

            </div>
          </div>

          {/* PROFESSIONAL PORTRAIT */}
          <div className="mx-auto w-full max-w-[400px]">

            <div className="relative rounded-t-[48%] rounded-b-sm border border-[#b59656] p-[7px] pb-3">

              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[48%] rounded-b-sm bg-[#e9e5dd]">

                <Image
                  src="/images/stephen-mogusu.jpg"
                  alt="Portrait of Stephen Maikara Mogusu"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 400px"
                  className="object-cover object-[center_25%]"
                />

              </div>
            </div>

            {/* NAME PLAQUE */}
            <div className="relative mx-auto -mt-1 w-[88%] bg-[#0b1f3a] px-5 py-5 text-center shadow-[0_12px_25px_rgba(11,31,58,0.15)]">

              <p className="font-serif text-xl text-white">
                Stephen Maikara Mogusu
              </p>

              <div className="mx-auto mt-3 h-px w-12 bg-[#c6a76b]" />

              <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.22em] text-[#c6a76b]">
                Educator · Technologist
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* PROFESSIONAL PHILOSOPHY */}
      <section className="bg-[#0b1f3a] px-6 py-16 text-white md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr]">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c6a76b]">
              MY PHILOSOPHY
            </p>

            <h2 className="mt-5 font-serif text-3xl leading-tight text-white md:text-4xl">
              Learning should prepare people for the world ahead.
            </h2>
          </div>

          <div className="border-l border-[#c6a76b]/50 pl-7 md:pl-10">

            <p className="text-lg leading-9 text-slate-200">
              I see education as more than the transfer of knowledge.
              It is an opportunity to develop curiosity, creativity,
              confidence and independent thinking.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-300">
              In Computing education, I encourage learners to move
              beyond simply using technology. I want them to understand
              how it works, explore how it can be created and develop
              the confidence to use it responsibly.
            </p>

          </div>

        </div>
      </section>

      {/* CAREER JOURNEY */}
      <section className="bg-white px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a38448]">
              THE JOURNEY SO FAR
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#0b1f3a] md:text-5xl">
              Experience that connects technology and education.
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#68717b]">
              Each professional experience has contributed to my
              understanding of technology, information systems
              and the role of digital skills in education.
            </p>

          </div>

          <div className="mt-14">

            {career.map((item) => (
              <article
                key={item.number}
                className="grid gap-5 border-t border-[#dedbd2] py-9 md:grid-cols-[100px_1fr_1.2fr] md:gap-10"
              >

                <div>
                  <span className="font-serif text-3xl text-[#b59656]">
                    {item.number}
                  </span>
                </div>

                <div>

                  <p className="text-xs font-bold uppercase tracking-widest text-[#a38448]">
                    {item.period}
                  </p>

                  <h3 className="mt-3 text-xl font-bold leading-snug text-[#0b1f3a]">
                    {item.role}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-[#263d57]">
                    {item.organisation}
                  </p>

                </div>

                <p className="text-sm leading-8 text-[#68717b]">
                  {item.description}
                </p>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* EDUCATION */}
      <section className="bg-[#eeece5] px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a38448]">
              ACADEMIC FOUNDATION
            </p>

            <h2 className="mt-4 font-serif text-4xl text-[#0b1f3a]">
              Education
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#68717b]">
              My academic background provided the foundation for
              my work in information technology, computing,
              digital systems and data.
            </p>

          </div>

          <div className="border-l-2 border-[#b59656] bg-white p-7 md:p-10">

            <p className="text-xs font-bold uppercase tracking-widest text-[#a38448]">
              UNIVERSITY EDUCATION
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#0b1f3a]">
              Bachelor of Science in Informatics
            </h3>

            <p className="mt-4 text-base font-semibold text-[#263d57]">
              University of Eldoret
            </p>

            <p className="mt-3 text-sm leading-7 text-[#68717b]">
              An academic foundation in information technology,
              computing and information systems.
            </p>

          </div>

        </div>
      </section>

      {/* PROFESSIONAL INTERESTS */}
      <section className="bg-white px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a38448]">
            AREAS THAT INSPIRE ME
          </p>

          <h2 className="mt-4 font-serif text-4xl text-[#0b1f3a]">
            Professional Interests
          </h2>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 md:grid-cols-3">

            {interests.map((interest, index) => (
              <div
                key={interest}
                className="flex items-center gap-4 border border-[#dedbd2] px-5 py-6 transition hover:border-[#b59656]"
              >

                <span className="font-serif text-xl text-[#b59656]">
                  0{index + 1}
                </span>

                <span className="text-sm font-bold text-[#0b1f3a]">
                  {interest}
                </span>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="bg-[#0b1f3a] px-6 py-16 text-white md:px-12 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c6a76b]">
              CONTINUE EXPLORING
            </p>

            <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-white md:text-4xl">
              Discover the skills, work and ideas behind my journey.
            </h2>

          </div>

          <Link
            href="/portfolio"
            className="border border-[#c6a76b] px-7 py-4 text-xs font-bold uppercase tracking-widest text-[#c6a76b] transition hover:bg-[#c6a76b] hover:text-[#0b1f3a]"
          >
            Explore My Portfolio →
          </Link>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#08182c] px-6 py-7 text-white md:px-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">

          <p className="text-sm font-bold tracking-wide">
            STEPHEN MAIKARA MOGUSU
          </p>

          <p className="text-xs text-slate-400">
            Computer Science Teacher · ICT Educator · IT Technician
          </p>

          <p className="w-full border-t border-white/10 pt-5 text-xs text-slate-400">
            © <CurrentYear /> Stephen Maikara Mogusu.
            All rights reserved.
          </p>

        </div>
      </footer>

    </main>
  );
}
