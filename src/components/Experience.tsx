import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
  title: 'Content Manager & Social Media Manager (Freelance)',
  company: 'Mamibi Traiteur',
  type: 'Freelance',
  location: 'Dakar, Sénégal',
  period: '2024 – Present',
  responsibilities: [
    'Gestion et animation des pages Facebook et TikTok',
    'Création de contenus visuels et vidéos promotionnelles',
    'Mise en place de stratégies marketing pour attirer de nouveaux clients',
    'Rédaction de publications engageantes et optimisation de la visibilité',
    'Interaction avec la communauté et gestion des messages clients',
    'Contribution à l’augmentation de la notoriété et des ventes'
  ]
},

  {
    title: 'Instructeur Développeur Web',
    company: 'Gomycode',
    type: 'Temps partiel',
    location: 'Dakar, Sénégal',
    period: '12/2024 – Present',
    responsibilities: [
      'Enseignement des technologies web via des cours pratiques/théoriques',
      'Encadrement des apprenants et suivi de projets',
      'Promotion des bonnes pratiques et outils modernes'
    ]
  },
  {
    title: 'Développeur Web Freelance',
    company: 'Freelance',
    type: 'Indépendant',
    location: 'Dakar, Sénégal',
    period: '01/2024 – Present',
    responsibilities: [
      'Application de gestion de données d\'une pouponnière (SUNU DOM)',
      'Application de gestion des candidatures'
    ]
  },
  {
    title: 'Stagiaire Développeur MERN Stack',
    company: 'Sonatel (DSI/INS/IMOC)',
    type: 'Stage',
    location: 'Dakar, Sénégal',
    period: '12/2023 – 06/2024',
    responsibilities: [
      'Développement du back-office de la plateforme Wesalo avec la stack MERN (MongoDB, Express, React, Node.js)',
      'Conception d\'interfaces dynamiques et responsives avec React.js et Redux',
      'Création d\'API REST sécurisées avec Express.js et intégration de MongoDB',
      'Mise en place de l\'authentification JWT et gestion des rôles utilisateurs',
      'Intégration AWS S3 et déploiement via onRender'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Expériences Professionnelles
        </h2>
        <p className="text-xl text-gray-600 mb-16 text-center">
          Mon parcours professionnel
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-blue-600 font-medium mb-2">
                    <Briefcase className="w-5 h-5" />
                    <span>{exp.company}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600">{exp.type}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-4 md:mt-0 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li
                    key={respIndex}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
