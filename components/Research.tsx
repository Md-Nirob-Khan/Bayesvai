'use client'

import { motion } from 'framer-motion'
import { BookOpen, Award, Calendar, ExternalLink } from 'lucide-react'

export default function Research() {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research & Publications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic research contributions and published work in machine learning
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-8 shadow-lg"
        >
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <BookOpen className="h-12 w-12 text-primary-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Autism Spectrum Disorder Detection Using Machine Learning
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>2024-2025</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Award className="h-5 w-5 mr-2" />
                  <span>ICSECS 2025 Conference</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Research Overview</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Developed a comprehensive machine learning model for Autism Spectrum Disorder detection 
                  using advanced classification techniques and feature engineering approaches.
                </p>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Contributions</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Implemented Random Forest and Decision Tree classifiers with optimized hyperparameters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Applied Principal Component Analysis (PCA) for effective feature reduction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Addressed overfitting and class imbalance issues through advanced techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    <span>Achieved significant improvements in detection accuracy and model performance</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Scikit-learn', 'Random Forest', 'Decision Tree', 'PCA', 'NumPy', 'Pandas', 'Matplotlib'].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center text-primary-600 font-medium">
                <ExternalLink className="h-4 w-4 mr-2" />
                <span>Research paper accepted by ICSECS 2025 conference</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 