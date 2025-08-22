'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Brain, Globe, Database, Smartphone, Users, TestTube } from 'lucide-react'

const projects = [
  {
    title: 'ASD Detection ML Model',
    description: 'Machine learning model for Autism Spectrum Disorder detection using Random Forest and Decision Tree classifiers with PCA for feature reduction.',
    technologies: ['Python', 'Scikit-learn', 'Random Forest', 'Decision Tree', 'PCA'],
    icon: Brain,
    category: 'Machine Learning',
    status: 'Research Paper Published (ICSECS 2025)'
  },
  {
    title: 'WordPress Development',
    description: 'Dynamic WordPress websites with custom themes and plugins, including SEO optimization and quality assurance.',
    technologies: ['WordPress', 'PHP', 'HTML/CSS', 'JavaScript', 'SEO'],
    icon: Globe,
    category: 'Web Development',
    status: 'Industrial Training Project'
  },
  {
    title: 'Data Analysis Models',
    description: 'Real-world dataset prediction models for various applications with clean and reliable data pipelines.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Data Engineering'],
    icon: Database,
    category: 'Data Science',
    status: 'Academic Project'
  },
  {
    title: 'Mobile App Development',
    description: 'Java-based mobile application prototype with interactive UI for usability studies.',
    technologies: ['Java', 'Android', 'UI/UX', 'Mobile Development'],
    icon: Smartphone,
    category: 'Mobile Development',
    status: 'Academic Project'
  },
  {
    title: 'Human-Computer Interaction',
    description: 'Interactive UI design for usability studies with focus on user experience and accessibility.',
    technologies: ['UI/UX', 'Usability Testing', 'Interactive Design', 'User Research'],
    icon: Users,
    category: 'UI/UX',
    status: 'Academic Project'
  },
  {
    title: 'Software Testing & QA',
    description: 'Comprehensive software testing and quality assurance with project lifecycle management and test plans.',
    technologies: ['Software Testing', 'QA', 'Project Management', 'Test Planning'],
    icon: TestTube,
    category: 'Software Testing',
    status: 'Academic Project'
  }
]

export default function Projects() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my academic and professional projects across different domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <project.icon className="h-8 w-8 text-primary-600 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                  <p className="text-sm text-primary-600">{project.category}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="text-xs text-gray-500 font-medium">
                {project.status}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 