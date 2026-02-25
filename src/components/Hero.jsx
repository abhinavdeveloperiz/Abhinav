export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?semt=ais_user_personalization&w=740&q=80')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/80"></div>

      {/* Gradient Glow Effects */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500 opacity-20 blur-[120px] rounded-full top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-indigo-500 opacity-20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]"></div>

      {/* Content */}
      <div className="relative max-w-3xl">
        <p
          className="text-cyan-400 font-medium mb-4 tracking-wide"
          data-aos="fade-right"
        >
          👋 Hello, I'm
        </p>

        <h1
          className="text-5xl md:text-6xl font-extrabold leading-tight mb-4"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent uppercase">
            Abhinav M
          </span>
        </h1>

        <h2
          className="text-2xl md:text-3xl text-slate-200 mb-6 font-semibold uppercase tracking-wide"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          Python Full-Stack Developer
        </h2>

        <p
          className="text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          I build scalable, high-performance web applications using Django,
          React, and modern technologies — helping businesses grow with fast,
          secure, and user-friendly digital solutions.
        </p>

        {/* Tech badges */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-10"
          data-aos="fade-right"
          data-aos-delay="800"
        >
          {[
            "Django",
            "React",
            "Tailwind",
            "REST APIs",
            "PostgreSQL",
            "Redis",
            "Deployment",
          ].map((tech, i) => (
            <span
              key={i}
              className="px-4 py-1 text-sm rounded-full bg-slate-800/80 backdrop-blur border border-cyan-400/20 text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            data-aos="zoom-in"
            href="#projects"
            className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            data-aos="zoom-in"
            data-aos-delay="150"
            href="#contact"
            className="border border-slate-500 px-8 py-3 rounded-xl hover:bg-slate-800 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
