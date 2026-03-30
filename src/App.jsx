export default function WaleedPortfolio() {
  const profileImage = "/profile.jpg";

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  const skills = [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Azure",
    "Stripe",
    "REST APIs",
    "Authentication",
    "RBAC",
    "Docker",
    "Microsoft BI stack (SSRS, TSQL, SSAS, SSIS)",
    "Power Query",
    "DAX",
    "SQL"
  ];

  const highlights = [
    {
      title: "Frontend that feels polished",
      text: "I care about interfaces that feel clear, responsive, and easy to trust, not just technically correct.",
    },
    {
      title: "Business logic that holds up",
      text: "From permissions and payments to workflows and reporting, I enjoy building the parts that make products actually useful.",
    },
    {
      title: "Product-minded engineering",
      text: "I like working on software that solves a real need, feels thought through, and is practical to maintain.",
    },
  ];

  const experience = [
    {
      company: "Spicetel LLC",
      role: "Software Engineer",
      date: "Sep 2023 – Aug 2025",
      points: [
        "Worked on AI-supported product features, including job description generation and candidate-matching workflows.",
        "Built and improved secure business flows around authentication, role-based access, payments, and reporting.",
        "Contributed to search, filtering, and transaction-related systems to improve speed and day-to-day usability.",
        "Collaborated on product-facing web interfaces with a focus on clarity, maintainability, and performance.",
      ],
      color: "bg-[#7b61ff]",
    },
    {
      company: "Afiniti",
      role: "React JS Intern",
      date: "May 2023 – Jul 2023",
      points: [
        "Supported frontend feature development in React for an existing web product.",
        "Built reusable UI pieces and helped improve consistency across screens.",
        "Worked with both web and mobile-oriented components during development.",
      ],
      color: "bg-[#63a2ff]",
    },
    {
      company: "Marketing Support Projects",
      role: "Digital Marketing & Social Media Support",
      date: "Alongside technical work",
      points: [
        "Helped with social media posting, content planning, and campaign support.",
        "Worked on audience engagement and basic ad-related coordination.",
        "Supported analytics and reporting to track visibility and performance.",
      ],
      color: "bg-[#f3a24f]",
    },
  ];

  const projects = [
    {
      title: "AI Recruitment Platform",
      category: "Product workflow",
      text: "A hiring-focused system built around job posting support, candidate matching, and smoother recruiter workflows.",
      stack: ["React", "Node.js", "Azure OpenAI", "Search"],
      tone: "bg-[#ebe5fb]",
    },
    {
      title: "Vendor Management Portal",
      category: "Operations platform",
      text: "A business portal for handling vendors, orders, access control, and payment-related flows in one place.",
      stack: ["React", "RBAC", "Stripe", "Dashboards"],
      tone: "bg-[#e5eef9]",
    },
    {
      title: "Bidding & Transactions Module",
      category: "Business system",
      text: "A more efficient workflow for managing bids, transactions, filtering, and reporting without extra friction.",
      stack: ["Node.js", "MongoDB", "Reports", "Filters"],
      tone: "bg-[#f7e7d5]",
    },
    {
      title: "Digital Campaign Support",
      category: "Marketing support",
      text: "Social content coordination, posting support, audience engagement, ad assistance, and reporting across campaigns.",
      stack: ["Content", "Ads", "Engagement", "Analytics"],
      tone: "bg-[#e4efe6]",
    },
  ];

  const links = [
    { label: "GitHub", href: "https://github.com/waleedshaikh-code" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-waleed-shaikh/" },
    { label: "Email", href: "mailto:waleedshaikh.tech@gmail.com" },
  ];

  return (
    <div className="min-h-screen bg-[#f6f2ea] text-[#191816] antialiased">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-[#c7b8ff]/30 blur-3xl" />
        <div className="absolute right-[-5rem] top-32 h-80 w-80 rounded-full bg-[#ffd9a8]/35 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-1/3 h-72 w-72 rounded-full bg-[#b8ddff]/25 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-black/5 bg-[#f6f2ea]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="text-base font-semibold tracking-tight text-[#161515] sm:text-lg">
            Waleed Shaikh
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-black/60 transition hover:text-black"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/Waleed-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium text-[#171717] transition hover:bg-white sm:inline-flex"
            >
              Resume
            </a>
      <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=waleedshykh5@gmail.com"
  target="_blank"
  rel="noreferrer"
  className="rounded-full bg-[#1c1c1a] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
>
  Say hello
</a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-20">
          <div className="order-2 flex flex-col justify-center lg:order-1">
            <p className="mb-4 text-sm font-medium tracking-wide text-black/50">
              Software Engineer based in Sweden
            </p>
            <h1 className="max-w-3xl text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.04em] text-[#131313] sm:text-5xl lg:text-[4.25rem]">
              I build thoughtful web products with strong frontend work, reliable backend logic, and a clean product feel.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-black/66 sm:text-lg">
              I’m Waleed a Software Engineer with experience across web applications, SaaS workflows, AI-supported features, and digital support work. I like products that feel useful, well-structured, and genuinely human.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-[#6f55ff] px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px]"
              >
                See my work
              </a>
              <a
                href="/Waleed-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-black/10 bg-white/75 px-6 py-3 text-sm font-semibold text-[#171717] transition hover:bg-white"
              >
                View resume
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-black/10 bg-white/70 px-4 py-2.5 text-sm text-black/72 transition hover:border-black/20 hover:bg-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="order-1 flex items-center justify-center lg:order-2 lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -left-4 top-8 h-28 w-28 rounded-[2rem] bg-[#6f55ff] opacity-15 blur-2xl" />
              <div className="absolute -right-3 bottom-8 h-28 w-28 rounded-full bg-[#ffb84d] opacity-20 blur-2xl" />
              <div className="relative rounded-[2rem] border border-black/8 bg-white/75 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur">
                <img
                  src={profileImage}
                  alt="Waleed Shaikh"
                  className="h-[22rem] w-full rounded-[1.6rem] object-cover object-center sm:h-[26rem] lg:h-[28rem]"
                />
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-[1.25rem] bg-[#f3eee6] p-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-black/42">Experience</p>
                    <p className="mt-2 text-xl font-semibold text-black">2+ years</p>
                  </div>
                  <div className="rounded-[1.25rem] bg-[#f3eee6] p-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-black/42">Focus</p>
                    <p className="mt-2 text-xl font-semibold text-black">Web & SaaS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8 lg:py-8">
          <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[2rem] border border-black/8 bg-white/72 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:p-7">
              <p className="text-sm font-medium text-[#6f55ff]">A little about me</p>
              <h2 className="mt-3 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#161515] sm:text-3xl">
                I enjoy building things that feel clear, stable, and genuinely useful.
              </h2>
            </div>
            <div className="rounded-[2rem] border border-black/8 bg-[#fffaf2] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:p-7">
              <p className="leading-8 text-black/68">
                My main background is in software engineering, especially frontend and product-focused web work. Alongside that, I’ve also supported digital marketing tasks like content planning, posting, engagement, ad coordination, and reporting, which gave me a stronger feel for how products are seen and used in the real world.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-black/8 bg-white/75 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
              >
                <h3 className="text-lg font-semibold text-[#191816]">{item.title}</h3>
                <p className="mt-3 leading-7 text-black/65">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#6f55ff]">Skills</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-[#161515]">
              Tools and technologies I work with
            </h2>
            <p className="mt-4 leading-8 text-black/62">
              My day-to-day work mostly sits around frontend development, backend flows, APIs, data handling, and product workflows.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-black/8 bg-white/80 px-4 py-2.5 text-sm text-black/75 shadow-[0_6px_18px_rgba(0,0,0,0.03)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#6f55ff]">Experience</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-[#161515]">
              A few places where I’ve learned by building
            </h2>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {experience.map((item) => (
              <div
                key={item.company + item.role}
                className="rounded-[2rem] border border-black/8 bg-white/78 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.04)]"
              >
                <div className={`mb-5 h-2 w-16 rounded-full ${item.color}`} />
                <p className="text-sm text-black/42">{item.company}</p>
                <h3 className="mt-2 text-[1.75rem] font-semibold leading-tight tracking-[-0.03em] text-[#171717]">
                  {item.role}
                </h3>
                <p className="mt-2 text-sm text-black/50">{item.date}</p>
                <ul className="mt-5 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-7 text-black/68">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/45" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-[#6f55ff]">Selected work</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-[#161515]">
              Projects and product stories I’d be happy to discuss in detail
            </h2>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="overflow-hidden rounded-[2rem] border border-black/8 bg-white/80 shadow-[0_18px_40px_rgba(0,0,0,0.04)] transition hover:-translate-y-1"
              >
                <div className={`${project.tone} border-b border-black/5 p-6`}>
                  <p className="text-sm text-black/42">{project.category}</p>
                  <h3 className="mt-3 text-[1.9rem] font-semibold leading-tight tracking-[-0.03em] text-[#171717]">
                    {project.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="leading-7 text-black/68">{project.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full bg-[#f4f0ea] px-3 py-2 text-sm text-black/66">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <div className="rounded-[2rem] border border-black/8 bg-[#171717] px-6 py-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.16)] sm:px-7 md:flex md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm text-white/65">Resume</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em]">
                Want the full background?
              </h2>
              <p className="mt-3 leading-7 text-white/70">
                You can open my resume, browse my GitHub, or connect with me on LinkedIn.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
              <a
                href="/Waleed-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black"
              >
                View Resume
              </a>
              <a
                href="/Waleed-Resume.pdf"
                download
                className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white"
              >
                Download
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-4xl px-4 pb-20 pt-16 text-center sm:px-6 lg:px-8 lg:pb-24">
          <p className="text-sm font-medium text-[#6f55ff]">Contact</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[#161515]">
            Let’s connect.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-black/65">
            I’m open to software engineering, frontend, full-stack, SaaS, and product-focused opportunities.
          </p>
          <div className="mt-8 space-y-3 text-lg">
            <p>
              <a
                className="text-[#171717] transition hover:text-[#6f55ff]"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=waleedshykh5@gmail.com"
 target="_blank" rel="noreferrer"   
              >
                waleedshykh5@gmail.com
              </a>
            </p>
            <p>
              <a className="text-[#171717] transition hover:text-[#6f55ff]" href="tel:+46764568376">
                +46 764568376
              </a>
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-black/10 bg-white/75 px-5 py-3 text-sm font-medium text-black/75 transition hover:border-black/20 hover:bg-white"
              >
                {item.label}
              </a>
            ))}
          </div>
          <p className="mt-10 text-sm text-black/40">© 2026 Waleed Shaikh</p>
        </section>
      </main>
    </div>
  );
}
