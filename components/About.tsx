'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, User } from 'lucide-react'

export default function About() {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A motivated and detail-oriented Software Engineering student passionate about 
            creating innovative solutions through technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Who I Am
            </h3>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                I'm a Bachelor of Computer Science (Software Engineering) student at 
                Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA), with a strong 
                foundation in machine learning, web development, and software testing.
              </p>
              <p>
                Recently completed industrial training as a Web Developer Intern at 
                Infinita Tech Solutions Sdn Bhd, where I gained hands-on experience in 
                dynamic website development, quality assurance, and team collaboration.
              </p>
              <p>
                I'm passionate about contributing to real-world software engineering, 
                AI, and data analysis projects that make a meaningful impact.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-primary-600 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900">Education</h4>
              </div>
              <p className="text-gray-700">Bachelor of Computer Science (Software Engineering)</p>
              <p className="text-gray-600 text-sm">Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA)</p>
              <p className="text-gray-600 text-sm">Expected Graduation: 2025 • CGPA: 2.92</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-primary-600 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900">Location</h4>
              </div>
              <p className="text-gray-700">Kuala Lumpur, Malaysia</p>
              <p className="text-gray-600 text-sm">Open to Remote & Relocation</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <User className="h-6 w-6 text-primary-600 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900">Background</h4>
              </div>
              <p className="text-gray-700">Nationality: Bangladeshi</p>
              <p className="text-gray-600 text-sm">Languages: English, Bengali, Malay (basic)</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-primary-600 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900">Availability</h4>
              </div>
              <p className="text-gray-700">Immediate (Full-time/Internship)</p>
              <p className="text-gray-600 text-sm">Ready to start new opportunities</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 