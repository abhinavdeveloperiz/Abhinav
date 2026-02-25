export default function PortfolioSites() {
  const sites = [
    {
      name: "HRK School",
      url: "https://hrkschool.com/",
    },
    {
      name: "Euroluxe FZE",
      url: "https://euroluxefze.com/",
    },

    {
      name: "Albee Cafe",
      url: "https://albeecafe.com/",
    },
    {
      name: "Learners Hub Institute",
      url: "https://learnershubinstitute.com/",
    },
    {
      name: "Fitspace Wardrobes",
      url: "https://fitspacewardrobes.uk/",
    },
  ];

  const techStack = ["Django", "HTML", "Tailwind CSS", "cPanel"];

  return (
    <section className="py-20 px-6 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 uppercase">
          Portfolio <span className="text-cyan-400">Websites</span>
        </h2>

        <p className="text-slate-400 mb-12">
          Professional business websites built with a modern and scalable tech
          stack.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sites.map((site, index) => (
            <a
              key={index}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-400 hover:scale-105 transition block"
            >
              <h3 className="text-lg font-semibold text-cyan-400">
                {site.name}
              </h3>

              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-slate-800 px-3 py-1 rounded-full border border-cyan-400/30 text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-sm text-slate-400 mt-4">Visit Website →</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
