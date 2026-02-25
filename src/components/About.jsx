import Image from "../assets/website.png";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE IMAGE */}
        <div className="flex justify-center" data-aos="fade-right">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>
            <img
              src={Image}
              alt="profile"
              className="relative w-80 h-80 object-cover object-top rounded-2xl border border-slate-700 shadow-lg"
            />
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div data-aos="fade-left">
          <h2 className="text-4xl font-bold mb-6 uppercase">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-slate-300 leading-relaxed mb-6">
            I am a passionate Python Full-Stack Developer specializing in
            building scalable web applications using Django and modern frontend
            technologies like React and Tailwind CSS.
          </p>

          <p className="text-slate-400 leading-relaxed mb-6">
            I focus on performance, clean architecture, and delivering
            user-friendly digital solutions
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6" data-aos="flip-right" data-aos-delay="200">
            <div className="bg-slate-800 p-4 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-cyan-400">30+</h3>
              <p className="text-slate-400 text-sm">Projects Built</p>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl text-center" data-aos="flip-right" data-aos-delay="400">
              <h3 className="text-2xl font-bold text-cyan-400">10+</h3>
              <p className="text-slate-400 text-sm">Technologies</p>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl text-center" data-aos="flip-right" data-aos-delay="600">
              <h3 className="text-2xl font-bold text-cyan-400">Fast</h3>
              <p className="text-slate-400 text-sm">Performance</p>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl text-center" data-aos="flip-right" data-aos-delay="800">
              <h3 className="text-2xl font-bold text-cyan-400">SEO</h3>
              <p className="text-slate-400 text-sm">Optimized</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
