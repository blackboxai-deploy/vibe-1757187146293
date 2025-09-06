'use client'

import { Button } from '@/components/ui/button'
import SectionContainer from './SectionContainer'

export default function HeroSection() {
  return (
    <SectionContainer className="text-center relative">
      {/* Analytics Dashboard Header Effect */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-full blur-xl"></div>
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl"></div>
      
      <div className="space-y-8 relative z-10">
        {/* Performance Metrics Bar */}
        <div className="flex justify-center mb-6">
          <div className="flex space-x-4 text-xs font-mono text-blue-300">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>ACTIVE</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>6+ YRS EXP</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>ANALYST</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text tracking-tight">
            EULALIO V. IBAY JR.
          </h1>
          <div className="space-y-2">
            <p className="text-xl sm:text-2xl text-blue-300 font-semibold tracking-wide">
              DIGITAL FINANCIAL ANALYST
            </p>
            <p className="text-lg text-green-300 font-medium">
              CUSTOMER SERVICE SPECIALIST
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <p className="text-base">Antipolo City, Rizal, Philippines</p>
            </div>
          </div>
        </div>
        
        {/* Data Visualization Style Contact Info */}
        <div className="bg-slate-700/50 rounded-lg p-4 backdrop-blur-sm border border-blue-400/20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <a 
              href="mailto:eulaliovibayjr@gmail.com" 
              className="flex items-center justify-center space-x-2 p-2 rounded border border-blue-400/30 hover:border-blue-400/60 hover:bg-blue-400/10 transition-all duration-200 text-blue-300 hover:text-blue-200"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="font-medium">EMAIL</span>
            </a>
            <a 
              href="tel:+639641792805" 
              className="flex items-center justify-center space-x-2 p-2 rounded border border-green-400/30 hover:border-green-400/60 hover:bg-green-400/10 transition-all duration-200 text-green-300 hover:text-green-200"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="font-medium">PHONE</span>
            </a>
            <a 
              href="https://linkedin.com/in/eulaliovibayjr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 p-2 rounded border border-purple-400/30 hover:border-purple-400/60 hover:bg-purple-400/10 transition-all duration-200 text-purple-300 hover:text-purple-200"
            >
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="font-medium">LINKEDIN</span>
            </a>
          </div>
        </div>

        <div className="pt-6">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-12 py-4 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 border border-blue-400/30"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            INITIALIZE CONNECTION
          </Button>
        </div>
      </div>
    </SectionContainer>
  )
}