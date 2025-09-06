'use client'

import { Button } from '@/components/ui/button'
import SectionContainer from './SectionContainer'

export default function ContactSection() {
  const contactMethods = [
    {
      type: "EMAIL",
      value: "eulaliovibayjr@gmail.com",
      action: () => window.location.href = 'mailto:eulaliovibayjr@gmail.com?subject=Professional Opportunity - Digital Financial Analyst Position',
      color: "from-blue-500 to-purple-500",
      status: "PRIORITY",
      icon: "📧"
    },
    {
      type: "LINKEDIN",
      value: "linkedin.com/in/eulaliovibayjr",
      action: () => window.open('https://linkedin.com/in/eulaliovibayjr', '_blank'),
      color: "from-blue-400 to-blue-600",
      status: "PROFESSIONAL",
      icon: "💼"
    },
    {
      type: "PHONE", 
      value: "+63 964-179-2805",
      action: () => window.location.href = 'tel:+639641792805',
      color: "from-green-500 to-blue-500",
      status: "DIRECT",
      icon: "📱"
    }
  ];

  return (
    <SectionContainer id="contact">
      <div className="text-center space-y-8">
        {/* Section Header */}
        <div className="flex items-center justify-center space-x-4">
          <div className="flex space-x-1">
            <div className="w-1 h-8 bg-green-400 rounded-full"></div>
            <div className="w-1 h-6 bg-blue-400 rounded-full"></div>
            <div className="w-1 h-4 bg-purple-400 rounded-full"></div>
          </div>
          <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">
            INITIALIZE CONNECTION
          </h2>
        </div>

        {/* Connection Status */}
        <div className="bg-slate-700/50 p-4 rounded-lg border border-green-400/30 max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 font-bold text-sm tracking-wider">AVAILABLE FOR OPPORTUNITIES</span>
          </div>
          <p className="text-lg text-gray-200 leading-relaxed">
            Ready to deploy analytical expertise and customer-centric solutions to optimize your organization&apos;s performance. 
            Specialized in transforming complex datasets into strategic business intelligence.
          </p>
        </div>
        
        {/* Communication Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((contact, index) => (
            <div key={index} className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 cursor-pointer group" onClick={contact.action}>
              <div className="text-center space-y-4">
                {/* Icon & Status */}
                <div className="flex items-center justify-center space-x-2">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${contact.color} flex items-center justify-center text-2xl`}>
                    {contact.icon}
                  </div>
                  <div className={`px-2 py-1 rounded text-xs font-bold text-slate-900 bg-gradient-to-r ${contact.color}`}>
                    {contact.status}
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className={`text-lg font-bold text-transparent bg-gradient-to-r ${contact.color} bg-clip-text mb-2`}>
                    {contact.type}
                  </h3>
                  <p className="text-gray-300 text-sm font-mono break-all">{contact.value}</p>
                </div>

                {/* Action Button */}
                <Button 
                  className={`w-full bg-gradient-to-r ${contact.color} hover:shadow-lg hover:shadow-blue-500/25 text-white font-bold py-2 rounded-lg transition-all duration-300 transform group-hover:scale-105 border border-blue-400/30`}
                  onClick={contact.action}
                >
                  CONNECT
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Availability Dashboard */}
        <div className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 p-6 rounded-xl border border-green-400/30 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 font-bold text-sm">AVAILABLE</span>
              </div>
              <div className="text-xs text-gray-300">Full-time Opportunities</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-blue-300 font-bold text-sm">REMOTE READY</span>
              </div>
              <div className="text-xs text-gray-300">Global Collaboration</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-purple-300 font-bold text-sm">24H RESPONSE</span>
              </div>
              <div className="text-xs text-gray-300">Professional Inquiries</div>
            </div>
          </div>
        </div>

        {/* System Information */}
        <div className="pt-6 border-t border-slate-600/50">
          <div className="flex items-center justify-center space-x-4 text-xs text-gray-400 font-mono">
            <span>LOCATION: Philippines (UTC+8)</span>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span>STATUS: Active & Available</span>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span>RESPONSE: &lt; 24hrs</span>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}