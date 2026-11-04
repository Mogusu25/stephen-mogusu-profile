
import Link from "next/link";
import CurrentYear from "./CurrentYear";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Expertise", href: "/expertise" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#08182c] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">

        {/* Brand */}
        <div>
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight text-white"
          >
            STEPHEN MOGUSU
            <span className="text-[#c6a76b]">.</span>
          </Link>

          <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-[#c6a76b]">
            Educator · Technology Professional
          </p>

          <p className="mt-6 max-w-sm text-sm leading-7 text-gray-300">
            Connecting education, data and technology to create meaningful
            impact through learning, innovation and practical solutions.
          </p>

          <p className="mt-6 text-sm italic text-[#c6a76b]">
            Per Aspera Ad Astra
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-[#c6a76b]">
            Explore
          </h3>

          <ul className="space-y-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm text-gray-300 transition-colors duration-200 hover:text-[#c6a76b]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-[#c6a76b]">
            Get in Touch
          </h3>

          <div className="space-y-5 text-sm text-gray-300">
            <div>
              <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">
                Email
              </p>
              <a
                href="mailto:maikaramogusu@gmail.com"
                className="transition-colors hover:text-[#c6a76b]"
              >
                maikaramogusu@gmail.com
              </a>
            </div>

            <div>
              <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">
                Phone
              </p>
              <a
                href="tel:+254720028762"
                className="transition-colors hover:text-[#c6a76b]"
              >
                +254 720 028 762
              </a>
            </div>

            <div>
              <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">
                LinkedIn
              </p>
              <a
                href="https://linkedin.com/in/stephen-mogusu-563a61230"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#c6a76b]"
              >
                Connect on LinkedIn ↗
              </a>
            </div>

            <div>
              <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">
                Location
              </p>
              <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-center text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>
           © <CurrentYear /> Stephen Maikara Mogusu. All rights reserved.
            reserved.
          </p>

          <p className="tracking-wide">
            Built with purpose. Driven by innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}
