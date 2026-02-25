import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center bg-slate-900 text-white">
      <h2 className="text-3xl font-bold mb-4 uppercase">
        Get In <span className="text-cyan-400">Touch</span>
      </h2>

      <div className="flex justify-center gap-8 text-3xl">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/abhinav-m-123-"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 hover:text-cyan-400 transition hover:scale-110"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        {/* Email */}
        <a
          href="mailto:abhinavvvv.m@gmail.com"
          className="text-slate-300 hover:text-cyan-400 transition hover:scale-110"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919207773847"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 hover:text-green-400 transition hover:scale-110"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>

        {/* Call */}
        <a
          href="tel:+919207773847"
          className="text-slate-300 hover:text-indigo-400 transition hover:scale-110"
        >
          <FontAwesomeIcon icon={faPhone} />
        </a>
      </div>
    </section>
  );
}
