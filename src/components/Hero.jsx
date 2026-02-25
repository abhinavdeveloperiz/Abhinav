export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 text-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500 opacity-20 blur-[120px] rounded-full top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-indigo-500 opacity-20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]"></div>

      <div className="relative max-w-3xl">
        {/* Greeting */}
        <p className="text-cyan-400 font-medium mb-4 tracking-wide">
          👋 Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent uppercase">
            Abhinav m
          </span>
        </h1>

        {/* Role */}
        <h2 className="text-2xl md:text-3xl text-slate-300 mb-6 font-semibold uppercase">
          Python Full-Stack Developer
        </h2>

        {/* Description */}
        <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
          I build scalable, high-performance web applications using Django,
          React, and modern technologies — helping businesses grow with fast,
          secure, and user-friendly digital solutions.
        </p>

        {/* Tech Highlights */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            "Django",
            "React",
            "Tailwind",
            "REST APIs",
            "PostgreSQL",
            "MySQL",
            "Redis",
            "Deployment",
          ].map((tech, i) => (
            <span
              key={i}
              className="px-4 py-1 text-sm rounded-full bg-slate-800 border border-cyan-400/20 text-cyan-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-slate-600 px-8 py-3 rounded-xl hover:bg-slate-800 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
