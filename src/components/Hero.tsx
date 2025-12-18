import {Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import imgFond from "../assets/imgFond.jpeg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[url('/src/assets/')] bg-cover bg-center opacity-15"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="mb-8 inline-block">
          <img
            src={imgFond}
            alt="Mamadou THIAM"
            className="w-48 h-48 rounded-full object-cover border-4 border-blue-500 shadow-2xl mx-auto"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Mamadou THIAM
        </h1>

        <p className="text-xl md:text-2xl text-blue-400 mb-6 font-light">
          Développeur MERN Stack | Ingénieur Cloud & DevOps
        </p>

        <p className="text-xl md:text-2xl text-blue-400 mb-6 font-light">
          Administrateur Systèmes | Analyste de données
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a href="mailto:thiammamadou0020@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
            <Mail className="w-5 h-5" />
            <span>thiammamadou0020@gmail.com</span>
          </a>
          <a href="tel:774686623" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
            <Phone className="w-5 h-5" />
            <span>774686623</span>
          </a>
          <span className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-5 h-5" />
            <span>Dakar, Sénégal</span>
          </span>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/mamadou-thiam-309682255"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all hover:scale-105 shadow-lg"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-white hover:bg-gray-100 text-slate-900 px-8 py-3 rounded-lg font-medium transition-all hover:scale-105 shadow-lg"
          >
            <Mail className="w-5 h-5" />
            <span>Me Contacter</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-blue-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
