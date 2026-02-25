import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'M. Ndiaye',
    role: ' Directeur, SUNU_DOM ',
    content: 'Une excellente collaboration ! M.THIAM a fait preuve d\'une grande rigueur technique et d\'une capacité à résoudre les problèmes rapidement.',
    rating: 5,
    image: 'https://media.istockphoto.com/id/1196083861/fr/vectoriel/ensemble-simple-dic%C3%B4ne-de-t%C3%AAte-dhomme.jpg?s=612x612&w=0&k=20&c=kgMygzTT32bCHK3iZQH5BrWo-ZpWPiXBw6lnPgo-scU='
  },
  {
    name: 'M. Ndiaye',
    role: 'Fondateur, IND Location',
    content: 'J\'ai été impressionné par la qualité du code et l\'attention aux détails, notamment sur la partie UI/UX. Le projet a été livré dans les délais.',
    rating: 5,
    image: '/src/assets/client1.jpeg'
  },

];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Témoignages
        </h2>
        <p className="text-xl text-gray-600 mb-16 text-center">
          Ce que disent mes clients et collaborateurs
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                />

                <div className="flex-1">
                  <h3 className="font-bold text-slate-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>

                <Quote className="w-8 h-8 text-blue-200" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
