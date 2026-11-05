
import Link from "next/link";
import CurrentYear from "./CurrentYear";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

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

      {/* MAIN FOOTER */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr] lg:px-10">

        {/* BRAND */}
        <div>
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tight text-white"
          >
            STEPHEN MOGUSU
            <span className="text-[#c6a76b]">.</span>
          </Link>

          <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#c6a76b]">
            Educator · Technology Professional
          </p>

          <p className="mt-4 max-w-sm text-xs leading-6 text-gray-300">
            Connecting education, data and technology through learning,
            innovation and practical solutions.
          </p>

          <p className="mt-3 text-xs italic text-[#c6a76b]">
            Per Aspera Ad Astra
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#c6a76b]">
            Explore
          </h3>

          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-xs text-gray-300 transition-colors duration-200 hover:text-[#c6a76b]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#c6a76b]">
            Get in Touch
          </h3>

          <div className="space-y-3 text-xs text-gray-300">

            {/* EMAIL */}
            <a
              href="mailto:maikaramogusu@gmail.com"
              className="flex items-center gap-3 transition-colors hover:text-[#c6a76b]"
            >
              <Mail size={15} className="shrink-0 text-[#c6a76b]" />
              <span>maikaramogusu@gmail.com</span>
            </a>

            {/* PHONE */}
            <a
              href="tel:+254720028762"
              className="flex items-center gap-3 transition-colors hover:text-[#c6a76b]"
            >
              <Phone size={15} className="shrink-0 text-[#c6a76b]" />
              <span>+254 720 028 762</span>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com/in/stephen-mogusu-563a61230"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-[#c6a76b]"
            >
              <FaLinkedinIn size={15} className="shrink-0 text-[#c6a76b]" />
              <span>Connect on LinkedIn ↗</span>
            </a>

            {/* LOCATION */}
            <div className="flex items-center gap-3">
              <MapPin size={15} className="shrink-0 text-[#c6a76b]" />
              <span>Nairobi, Kenya</span>
            </div>

          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 text-center text-[10px] text-gray-400 sm:flex-row sm:items-center sm:justify-between lg:px-10">

          <p>
            © <CurrentYear /> Stephen Maikara Mogusu. All rights reserved.
          </p>

          <p className="tracking-wide">
            Built with purpose. Driven by innovation.
          </p>

        </div>
      </div>

    </footer>
  );
}
