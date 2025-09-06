import SectionContainer from './SectionContainer'

export default function ProfessionalSummary() {
  const metrics = [
    { label: "Years Experience", value: "6+", color: "text-blue-400" },
    { label: "Data Analysis Projects", value: "100+", color: "text-green-400" },
    { label: "Client Satisfaction", value: "95%", color: "text-purple-400" },
    { label: "Process Optimization", value: "40%", color: "text-yellow-400" }
  ];

  return (
    <SectionContainer>
      <div className="space-y-6">
        {/* Header with Data Visualization Style */}
        <div className="flex items-center space-x-4">
          <div className="flex space-x-1">
            <div className="w-1 h-8 bg-blue-400 rounded-full"></div>
            <div className="w-1 h-6 bg-purple-400 rounded-full"></div>
            <div className="w-1 h-4 bg-green-400 rounded-full"></div>
          </div>
          <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            EXECUTIVE SUMMARY
          </h2>
        </div>

        {/* Performance Metrics Dashboard */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-slate-700/50 p-4 rounded-lg border border-slate-600/50 text-center">
              <div className={`text-2xl font-bold ${metric.color} font-mono`}>
                {metric.value}
              </div>
              <div className="text-xs text-gray-300 uppercase tracking-wider mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Analysis Report Style Content */}
        <div className="space-y-4">
          <div className="bg-slate-700/30 p-5 rounded-lg border-l-4 border-blue-400">
            <p className="text-lg leading-relaxed text-gray-200 font-light">
              <span className="text-blue-300 font-semibold">ANALYTICAL PROFILE:</span> Customer-centric Digital Financial Analyst with 
              <span className="text-green-300 font-bold mx-1">6+ years of validated experience</span> 
              in financial data analysis, business intelligence, and customer service across global markets. 
            </p>
          </div>
          
          <div className="bg-slate-700/30 p-5 rounded-lg border-l-4 border-purple-400">
            <p className="text-lg leading-relaxed text-gray-200 font-light">
              <span className="text-purple-300 font-semibold">CORE COMPETENCIES:</span> Proven ability to transform complex datasets into actionable insights, optimize digital systems, and elevate client satisfaction through empathetic communication and process innovation.
            </p>
          </div>

          <div className="bg-slate-700/30 p-5 rounded-lg border-l-4 border-green-400">
            <p className="text-lg leading-relaxed text-gray-200 font-light">
              <span className="text-green-300 font-semibold">CREDENTIALS:</span> Holds a 
              <span className="text-yellow-300 font-bold mx-1">Bachelor of Science in Information Systems</span>
              , with recognized excellence in leadership and technical performance. Adept at bridging analytical precision with human connection to drive operational success in multicultural environments.
            </p>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="flex flex-wrap gap-2 pt-4">
          <div className="flex items-center space-x-2 bg-green-400/20 px-3 py-1 rounded-full border border-green-400/30">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 text-sm font-semibold">AVAILABLE</span>
          </div>
          <div className="flex items-center space-x-2 bg-blue-400/20 px-3 py-1 rounded-full border border-blue-400/30">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-blue-300 text-sm font-semibold">REMOTE READY</span>
          </div>
          <div className="flex items-center space-x-2 bg-purple-400/20 px-3 py-1 rounded-full border border-purple-400/30">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span className="text-purple-300 text-sm font-semibold">GLOBAL EXPERIENCE</span>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}