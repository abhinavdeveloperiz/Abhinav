import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faHtml5,
  faCss3Alt,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import {
  faServer,
  faDatabase,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  const skills = [
    {
      category: "Backend",
      items: [
        { name: "Python", icon: faPython },
        { name: "Django", icon: faServer },
        { name: "Django REST Framework", icon: faServer },
        { name: "FastAPI (Learning)", icon: faServer },
        { name: "Redis", icon: faServer },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "PostgreSQL", icon: faDatabase },
        { name: "MySQL", icon: faDatabase },
        { name: "SQLite", icon: faDatabase },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "HTML", icon: faHtml5 },
        { name: "CSS", icon: faCss3Alt },
        { name: "Tailwind CSS", icon: faCss3Alt },
        { name: "Bootstrap", icon: faCss3Alt },
      ],
    },
    {
      category: "Deployment",
      items: [
        { name: "Railway", icon: faCloud },
        { name: "Render", icon: faCloud },
        { name: "PythonAnywhere", icon: faCloud },
        { name: "cPanel Hosting", icon: faCloud },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: faGitAlt },
        { name: "GitHub", icon: faGitAlt },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 uppercase">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <p className="text-slate-400 mb-12">
          Technologies and tools I use to build scalable, high-performance web
          applications.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 transition"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-semibold mb-6 text-cyan-400">
                {group.category}
              </h3>

              <div className="space-y-3 text-left">
                {group.items.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <FontAwesomeIcon
                      icon={skill.icon}
                      className="text-cyan-400"
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
