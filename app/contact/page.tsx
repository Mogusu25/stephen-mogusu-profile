
"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:maikaramogusu@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#18283b]">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#0b1f3a] px-6 py-24 text-white md:py-32 lg:px-16">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-[#c6a76b]/20" />
        <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full border border-[#c6a76b]/20" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-[#c6a76b]">
            Get in Touch
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Let's Start a
            <span className="block text-[#c6a76b]">
              Conversation.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
            Have a project in mind, a professional opportunity, or an idea
            worth exploring? I would be glad to hear from you. Let's connect
            and explore how we can create meaningful impact.
          </p>

          <div className="mt-10 h-1 w-20 bg-[#c6a76b]" />
        </div>
      </section>

      {/* CONTACT DETAILS AND FORM */}
      <section className="px-6 py-20 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.85fr_1.15fr]">

          {/* LEFT: CONTACT DETAILS */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#b59656]">
              Contact Information
            </p>

            <h2 className="text-3xl font-bold leading-tight text-[#0b1f3a] md:text-4xl">
              Let's Connect.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-8 text-[#68717b]">
              I welcome conversations around education, computing,
              digital transformation, data analytics, artificial intelligence
              and opportunities to collaborate.
            </p>

            <div className="mt-12 space-y-8">

              {/* EMAIL */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0b1f3a] text-[#c6a76b]">
                  <Mail size={21} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#b59656]">
                    Email
                  </p>

                  <a
                    href="mailto:maikaramogusu@gmail.com"
                    className="mt-2 inline-block text-sm font-medium text-[#0b1f3a] transition hover:text-[#b59656]"
                  >
                    maikaramogusu@gmail.com
                  </a>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0b1f3a] text-[#c6a76b]">
                  <Phone size={21} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#b59656]">
                    Phone
                  </p>

                  <a
                    href="tel:+254720028762"
                    className="mt-2 inline-block text-sm font-medium text-[#0b1f3a] transition hover:text-[#b59656]"
                  >
                    +254 720 028 762
                  </a>
                </div>
              </div>

              {/* WHATSAPP */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0b1f3a] text-[#c6a76b]">
                  <FaWhatsapp size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#b59656]">
                    WhatsApp
                  </p>

                  <a
                    href="https://wa.me/254720028762?text=Hello%20Stephen%2C%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20connect."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-medium text-[#0b1f3a] transition hover:text-[#b59656]"
                  >
                    Chat with me on WhatsApp ↗
                  </a>
                </div>
              </div>

              {/* LINKEDIN */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0b1f3a] text-[#c6a76b]">
                  <FaLinkedinIn size={21} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#b59656]">
                    LinkedIn
                  </p>

                  <a
                    href="https://linkedin.com/in/stephen-mogusu-563a61230"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-medium text-[#0b1f3a] transition hover:text-[#b59656]"
                  >
                    Connect professionally ↗
                  </a>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0b1f3a] text-[#c6a76b]">
                  <MapPin size={21} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#b59656]">
                    Location
                  </p>

                  <p className="mt-2 text-sm font-medium text-[#0b1f3a]">
                    Nairobi, Kenya
                  </p>
                </div>
              </div>

            </div>

            {/* OPPORTUNITIES CARD */}
            <div className="mt-14 border-l-2 border-[#c6a76b] bg-white px-6 py-7 shadow-sm">
              <h3 className="text-sm font-bold text-[#0b1f3a]">
                Open to Opportunities
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#68717b]">
                Open to meaningful collaborations, remote opportunities,
                professional engagements and projects in education,
                technology, data analytics and artificial intelligence.
              </p>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="border border-[#dedbd2] bg-white p-7 shadow-sm md:p-10">

            <div className="mb-9">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#b59656]">
                Send a Message
              </p>

              <h2 className="text-2xl font-bold text-[#0b1f3a] md:text-3xl">
                How Can I Help You?
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#68717b]">
                Complete the form below to prepare a message for my email.
                I look forward to hearing from you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0b1f3a]"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full border border-[#dedbd2] bg-[#f7f6f2] px-4 py-4 text-sm outline-none transition focus:border-[#b59656] focus:bg-white"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0b1f3a]"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full border border-[#dedbd2] bg-[#f7f6f2] px-4 py-4 text-sm outline-none transition focus:border-[#b59656] focus:bg-white"
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0b1f3a]"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  className="w-full border border-[#dedbd2] bg-[#f7f6f2] px-4 py-4 text-sm outline-none transition focus:border-[#b59656] focus:bg-white"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0b1f3a]"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full resize-y border border-[#dedbd2] bg-[#f7f6f2] px-4 py-4 text-sm outline-none transition focus:border-[#b59656] focus:bg-white"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 bg-[#0b1f3a] px-8 py-5 text-xs font-bold uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-[#b59656] hover:text-[#08182c]"
              >
                Send Message
                <span className="text-lg">→</span>
              </button>

              <p className="text-center text-xs leading-6 text-[#68717b]">
                Your default email application will open with your message
                prepared for sending.
              </p>

            </form>
          </div>

        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="bg-white px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b59656]">
            Looking Ahead
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#0b1f3a] md:text-4xl">
            Meaningful Connections.
            <span className="block text-[#b59656]">
              Lasting Impact.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-[#68717b]">
            Great ideas begin with conversations. I look forward to
            connecting, sharing ideas and exploring new possibilities.
          </p>
        </div>
      </section>

    </main>
  );
}
