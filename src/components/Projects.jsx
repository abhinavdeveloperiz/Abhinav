export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "Full-stack Django application with React frontend, payment integration, and PostgreSQL database.",
      tech: [
        "Django",
        "React",
        "PostgreSQL",
        "Redis",
        "Razorpay",
        "Cloudinary",
        "Railway Deployment",
      ],
      link: "https://www.jajisinnovation.com/",
    },

    {
      title: "E-Commerce Website",
      description:
        "Full-featured e-commerce platform with secure authentication, product management, and seamless online payments.",
      tech: [
        "Django",
        "HTML",
        "CSS",
        "Bootstrap",
        "Razorpay",
        "Google OAuth",
        "cPanel Deployment",
      ],
      link: "https://auroracadence.com/",
    },

    {
      title: "Placement & Recruitment Portal",
      description:
        "A recruitment platform connecting job seekers with employers, featuring secure login and job management.",
      tech: [
        "Django",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Google OAuth",
        "cPanel Deployment",
      ],
      link: "https://gimsplacements.com/",
    },

    {
      title: "KingKarak CRM",
      description:
        "CRM system for managing multiple branches, tracking sales performance, and monitoring business operations. Currently under active development and will be fully live soon.",
      tech: [
        "Django",
        "MySQL",
        "Branch Management",
        "Sales Tracking",
        "cpanel Deployment",
      ],
      link: "https://king-karakk-crm.up.railway.app",
      status: "Ongoing",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 uppercase">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-1 transition group block" data-aos="fade-left"
            >
              {/* Status badge */}
              {project.status && (
                <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
                  {project.status}
                </span>
              )}

              <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-cyan-400 transition">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-slate-800 text-xs px-3 py-1 rounded-full text-cyan-400 border border-cyan-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <span className="text-cyan-400 font-semibold text-sm">
                View Project →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
