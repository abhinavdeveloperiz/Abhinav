import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faServer, faDatabase, faCloud } from "@fortawesome/free-solid-svg-icons";

import {
  SiPython,
  SiDjango,
  SiFastapi,
  SiRedis,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiRailway,
  SiRender,
  SiVercel,
  SiGithub,
  SiCpanel
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      category: "Backend",
      items: [
        { name: "Python", icon: <SiPython /> },
        { name: "Django", icon: <SiDjango /> },
        {
          name: "Django REST Framework",
          icon: <FontAwesomeIcon icon={faServer} />,
        },
        { name: "FastAPI (Learning)", icon: <SiFastapi /> },
        { name: "Redis", icon: <SiRedis /> },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "SQLite", icon: <SiSqlite /> },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React", icon: <SiReact /> },
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
      ],
    },
    {
      category: "Deployment",
      items: [
        { name: "Railway", icon: <SiRailway /> },
        { name: "Render", icon: <SiRender /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "PythonAnywhere", icon: <FontAwesomeIcon icon={faCloud} /> },
        { name: "cPanel Hosting", icon: <FontAwesomeIcon icon={faCloud} /> },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: <FontAwesomeIcon icon={faGitAlt} /> },
        { name: "GitHub", icon: <SiGithub /> },
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
                    <span className="text-cyan-400 text-lg">{skill.icon}</span>
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
