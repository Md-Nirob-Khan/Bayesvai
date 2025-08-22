'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'

export default function Contact() {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-primary-600 mr-4" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a href="mailto:nirob.auc@gmail.com" className="text-gray-600 hover:text-primary-600">
                    nirob.auc@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-primary-600 mr-4" />
                <div>
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-gray-600">Kuala Lumpur, Malaysia</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Linkedin className="h-6 w-6 text-primary-600 mr-4" />
                <div>
                  <p className="font-medium text-gray-900">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/md-nirob-khan-957149275" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-600"
                  >
                    linkedin.com/in/md-nirob-khan-957149275
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Github className="h-6 w-6 text-primary-600 mr-4" />
                <div>
                  <p className="font-medium text-gray-900">GitHub</p>
                  <a 
                    href="https://github.com/Md-Nirob-Khan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-600"
                  >
                    github.com/Md-Nirob-Khan
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Reference</h4>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">Bayes Ahmed Shoharto</span>
                </p>
                <p className="text-gray-600 text-sm">Industrial Training Supervisor</p>
                <p className="text-gray-600 text-sm">Infinita Tech Solutions Sdn Bhd</p>
                <p className="text-gray-600 text-sm">Email: shoharto@gmail.com</p>
                <p className="text-gray-600 text-sm">Phone: +601111413971</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary py-3 text-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 