import { ExternalLink, Briefcase, Server, FileText, Users, HardDrive, Database } from 'lucide-react';

const projects = [
  {
    title: 'BackOffice pour la Sonatel',
    description: 'Développement du back-office de la plateforme Wesalo avec la stack MERN. Interfaces dynamiques avec React.js et Redux, API REST sécurisées avec Express.js et MongoDB.',
    icon: Briefcase,
    tags: ['React.js', 'Node.js', 'MongoDB', 'Redux', 'AWS S3']
  },
  {
    title: 'API REST avec MongoDB',
    description: 'Création d\'API RESTful robustes et sécurisées utilisant Express.js et MongoDB pour une gestion efficace des données.',
    icon: Server,
    tags: ['Express.js', 'MongoDB', 'JWT', 'REST API']
  },
  {
    title: 'Plateforme de E-Candidature',
    description: 'Application complète de gestion des candidatures avec système d\'authentification, gestion des profils et suivi des candidatures.',
    icon: FileText,
    tags: ['MERN Stack', 'JWT', 'React.js']
  },
  {
    title: 'Projet SUNU DOM',
    description: 'Application de gestion de données d\'une pouponnière incluant suivi des enfants, gestion administrative et rapports.',
    icon: Users,
    tags: ['Full Stack', 'Node.js', 'React.js', 'MongoDB']
  },
  {
    title: 'Serveur Proxmox en Cluster Ceph',
    description: 'Mise en place d\'infrastructure haute disponibilité avec Proxmox, Cluster Ceph pour stockage distribué, backup automatisé et orchestration avec Terraform.',
    icon: HardDrive,
    tags: ['Proxmox', 'Ceph', 'Terraform', 'HA']
  },
  {
    title: 'Serveur FreeNAS',
    description: 'Déploiement et configuration d\'une solution de stockage réseau (NAS) pour centralisation et sécurisation des données d\'entreprise.',
    icon: Database,
    tags: ['FreeNAS', 'Storage', 'Network']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          Réalisations
        </h2>
        <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          Découvrez quelques projets que j'ai réalisés
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full"
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-40 flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                  <Icon className="w-24 h-24 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="mt-auto w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    <span>Voir le projet</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
