
import Image from "next/image";
import Link from "next/link";

const expertise = [
  {
    number: "01",
    title: "Computer Science & Education",
    description:
      "Computing education, digital literacy, curriculum delivery and practical learning experiences.",
    tags: ["Computing", "Digital Literacy", "Robotics"],
  },
  {
    number: "02",
    title: "Programming & Technology",
    description:
      "Programming foundations, computational thinking and web technologies for practical problem-solving.",
    tags: ["Python", "Scratch", "HTML & CSS", "JavaScript"],
  },
  {
    number: "03",
    title: "Data Analytics",
    description:
      "Working with datasets, data cleaning, analysis and visual communication of information.",
    tags: ["Python", "Pandas", "Excel", "Power BI"],
  },
  {
    number: "04",
    title: "IT Systems & Support",
    description:
      "Supporting users, devices, networks and the digital systems that keep organisations running.",
    tags: ["Networking", "System Administration", "IT Support"],
  },
];

const projects = [
  {
    number: "01",
    category: "DATA MANAGEMENT",
    title: "KEMIS Data Integration",
    description:
      "Supported school data integration across Etago Sub-County, contributing to an improvement in KEMIS compliance from 6% to 100%.",
    organisation: "Ministry of Education",
  },
  {
    number: "02",
    category: "EDUCATION & DIGITAL TRANSFORMATION",
    title: "Digital Literacy Programme",
    description:
      "Supported teacher training, digital device implementation, school data management and ICT integration in public primary schools.",
    organisation: "Ministry of Education",
  },
  {
    number: "03",
    category: "COMPUTING & STEM",
    title: "Coding Club & Robotics",
    description:
      "Established and lead extracurricular activities introducing learners to programming, computational thinking and introductory robotics.",
    organisation: "Luther Park International School",
  },
];

const experience = [
  {
    period: "SEP 2024 — PRESENT",
    role: "Computer Science Teacher & IT Technician",
    organisation: "Luther Park International School",
    location: "Kisii, Kenya",
  },
  {
    period: "FEB 2023 — FEB 2024",
    role: "ICT Officer Intern",
    organisation: "Ministry of Education",
    location: "Nairobi, Kenya",
  },
  {
    period: "SEP 2021 — DEC 2021",
    role: " IT Trainee",
    organisation: "Kisii Teaching and Referral Hospital",
    location: "Kisii, Kenya",
  },
];

export default function Home() {
  return (
    <main className="home-page">

      {/* HERO */}

      <section className="home-hero">
        <div className="home-container hero-layout">

          <div className="hero-content">
            <p className="eyebrow">
              EDUCATOR <span>·</span> TECHNOLOGY PROFESSIONAL
            </p>

            <h1>
              Stephen Maikara
              <span>Mogusu.</span>
            </h1>

            <h2>
              Computer Science Teacher
              <span>ICT Educator · Data & Tech Professional</span>
            </h2>

            <p className="hero-description">
              Connecting education, computing and technology through
              practical teaching, digital innovation, data analysis
              and technical problem-solving.
            </p>

            <div className="hero-buttons">
              <Link href="/about" className="home-button button-filled">
                Discover my profile
                <span>↗</span>
              </Link>

              <Link href="/portfolio" className="home-button button-outline">
                Explore my work
              </Link>
            </div>

            <div className="hero-location">
              <span>NAIROBI, KENYA</span>
              <span className="location-divider">|</span>
              <span>OPEN TO REMOTE OPPORTUNITIES</span>
            </div>
          </div>

          <div className="hero-photo-area">
            <div className="hero-photo">
              <Image
                src="/images/image%202.jpeg"
                alt=" Maikara Mogusu"
                fill
                priority
                sizes="(max-width: 768px) 85vw, 420px"
                className="hero-image"
              />
            </div>

            <div className="photo-caption">
              <span>EDUCATION AND INFORMATION TECHNOLOGY </span>
             
            </div>
          </div>

        </div>
      </section>

      {/* PROFESSIONAL IDENTITY */}

      <section className="identity-section">
        <div className="home-container">

          <p className="eyebrow">MY PROFESSIONAL FOCUS</p>

          <div className="identity-grid">
            <div>
              <span className="identity-number">01</span>
              <h3>Computer Science</h3>
              <p>
                Teaching programming, computational thinking and
                digital literacy.
              </p>
            </div>

            <div>
              <span className="identity-number">02</span>
              <h3>Data Analytics</h3>
              <p>
                Transforming information into organised and
                meaningful insights.
              </p>
            </div>

            <div>
              <span className="identity-number">03</span>
              <h3>Technology</h3>
              <p>
                Building and supporting practical digital systems
                and solutions.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT PREVIEW */}

      <section className="home-about">
        <div className="home-container about-layout">

          <div>
            <p className="eyebrow">A LITTLE ABOUT ME</p>

            <h2 className="section-title">
              Different disciplines.
              <span>One connected purpose.</span>
            </h2>
          </div>

          <div className="about-description">
            <p>
              I am an Information Technology graduate with a
              background in Informatics and professional experience
              across international education, government digital
              initiatives and IT support.
            </p>

            <p>
              My work brings together teaching, programming,
              data management and technology to solve problems
              and create practical value.
            </p>

            <Link href="/about" className="home-text-link">
              Read my professional story ↗
            </Link>
          </div>

        </div>
      </section>

      {/* EXPERTISE PREVIEW */}

      <section className="home-expertise">
        <div className="home-container">

          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT I BRING</p>
              <h2 className="section-title">
                Areas of expertise.
              </h2>
            </div>

            <Link href="/expertise" className="home-text-link">
              View all expertise ↗
            </Link>
          </div>

          <div className="expertise-grid">
            {expertise.map((item) => (
              <article className="expertise-item" key={item.number}>
                <span className="card-number">{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="expertise-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* SELECTED PROJECTS */}

      <section className="home-projects">
        <div className="home-container">

          <div className="section-heading">
            <div>
              <p className="eyebrow">SELECTED PROFESSIONAL WORK</p>
              <h2 className="section-title">
                Projects & impact.
              </h2>
            </div>

            <Link href="/portfolio" className="home-text-link">
              Explore my portfolio ↗
            </Link>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="home-project-card" key={project.number}>
                <span className="card-number">
                  {project.number}
                </span>

                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-organisation">
                  {project.organisation}
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* EXPERIENCE PREVIEW */}

      <section className="home-experience">
        <div className="home-container">

          <div className="section-heading">
            <div>
              <p className="eyebrow">CAREER JOURNEY</p>
              <h2 className="section-title">
                Professional experience.
              </h2>
            </div>

            <Link href="/about" className="home-text-link">
              Full professional background ↗
            </Link>
          </div>

          <div className="experience-list">
            {experience.map((item, index) => (
              <article className="experience-row" key={item.organisation}>
                <span className="experience-index">
                  0{index + 1}
                </span>

                <div className="experience-main">
                  <p className="experience-period">
                    {item.period}
                  </p>

                  <h3>{item.role}</h3>

                  <p className="experience-organisation">
                    {item.organisation}
                  </p>
                </div>

                <span className="experience-location">
                  {item.location}
                </span>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT PREVIEW */}

      <section className="home-contact">
        <div className="home-container contact-layout">

          <div>
            <p className="eyebrow">LET'S CONNECT</p>

            <h2>
              Good work begins
              <span>with a conversation.</span>
            </h2>

            <p>
              Open to professional opportunities, collaboration,
              technology projects and educational initiatives.
            </p>
          </div>

          <div className="contact-action">
            <Link href="/contact" className="home-button button-filled">
              Get in touch ↗
            </Link>

            <a href="mailto:maikaramogusu@gmail.com">
              maikaramogusu@gmail.com
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
