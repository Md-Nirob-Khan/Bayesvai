'use client'

import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">MD Nirob Khan</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Software Engineering student passionate about machine learning, web development, 
            and creating innovative solutions through technology.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/Md-Nirob-Khan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/md-nirob-khan-957149275"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:nirob.auc@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 MD Nirob Khan. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 