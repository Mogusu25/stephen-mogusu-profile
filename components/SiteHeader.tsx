
import Link from "next/link";

const navigation = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "EXPERTISE", href: "/expertise" },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "CONTACT", href: "/contact" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="site-nav">
        <Link href="/" className="brand">
          <span className="brand-name">
            MAIKARA <span className="brand-accent">MOGUSU.</span>
          </span>
          <span className="brand-caption">
            COMPUTER SCIENCE.DATA, AI & ROBOTICS. DIGITAL LITERACY. 
          </span>
        </Link>

        <div className="nav-links">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
