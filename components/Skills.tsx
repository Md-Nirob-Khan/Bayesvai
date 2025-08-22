'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Machine Learning',
    skills: [
      { name: 'Random Forest', level: 85 },
      { name: 'Decision Tree', level: 80 },
      { name: 'PCA', level: 75 },
      { name: 'Scikit-learn', level: 80 },
      { name: 'Data Analysis', level: 85 }
    ]
  },
  {
    category: 'Web Development',
    skills: [
      { name: 'WordPress', level: 90 },
      { name: 'PHP', level: 75 },
      { name: 'HTML/CSS', level: 85 },
      { name: 'JavaScript', level: 70 },
      { name: 'SEO', level: 80 }
    ]
  },
  {
    category: 'Software Engineering',
    skills: [
      { name: 'Software Testing', level: 85 },
      { name: 'QA', level: 80 },
      { name: 'Project Management', level: 75 },
      { name: 'UI/UX Collaboration', level: 80 },
      { name: 'Research Writing', level: 85 }
    ]
  },
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Java', level: 70 },
      { name: 'JavaScript', level: 70 },
      { name: 'PHP', level: 75 }
    ]
  }
]

export default function Skills() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technical skills and competencies developed through academic projects and professional experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-primary-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 