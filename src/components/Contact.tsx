import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[url('/src/assets/hero.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Me Contacter
        </h2>
        <p className="text-xl text-gray-300 mb-16 text-center">
          Discutons de votre prochain projet
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Informations de Contact
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:thiammamadou0020@gmail.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group"
                >
                  <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium">thiammamadou0020@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:774686623"
                  className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group"
                >
                  <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Téléphone</p>
                    <p className="font-medium">774686623</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-3 bg-blue-500/10 rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Localisation</p>
                    <p className="font-medium">Dakar, Sénégal</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Réseaux Sociaux
              </h3>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/mamadou-thiam-309682255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-blue-500/10 hover:bg-blue-500 rounded-xl transition-colors group"
                >
                  <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="p-4 bg-blue-500/10 hover:bg-blue-500 rounded-xl transition-colors group"
                >
                  <Github className="w-6 h-6 text-gray-300 group-hover:text-white" />
                </a>
              </div>
            </div>

            <div className="bg-blue-500/10 rounded-2xl p-6 border border-blue-500/20">
              <h3 className="text-lg font-bold text-white mb-2">
                Disponible pour des projets freelance
              </h3>
              <p className="text-gray-300 text-sm">
                Je suis actuellement disponible pour des missions freelance en développement web, DevOps, et administration système. N'hésitez pas à me contacter.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Envoyez-moi un message
            </h3>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-medium transition-all hover:scale-105 shadow-lg"
              >
                <span>Envoyer le message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © 2025 Mamadou THIAM. Tous droits réservés.
          </p>
        </div>
      </div>
    </section>
  );
}
