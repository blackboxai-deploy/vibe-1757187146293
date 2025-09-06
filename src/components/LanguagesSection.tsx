import SectionContainer from './SectionContainer'

export default function LanguagesSection() {
  const languages = [
    { 
      language: "English", 
      proficiency: "Fluent",
      level: 95,
      context: "Global Business Communication",
      color: "from-blue-400 to-purple-400",
      flag: "🇺🇸" 
    },
    { 
      language: "Tagalog", 
      proficiency: "Native",
      level: 100,
      context: "Primary Communication", 
      color: "from-green-400 to-blue-400",
      flag: "🇵🇭"
    }
  ]

  return (
    <SectionContainer>
      <div className="space-y-6">
        {/* Section Header */}
        <div className="flex items-center space-x-4">
          <div className="flex space-x-1">
            <div className="w-1 h-8 bg-purple-400 rounded-full"></div>
            <div className="w-1 h-6 bg-green-400 rounded-full"></div>
            <div className="w-1 h-4 bg-blue-400 rounded-full"></div>
          </div>
          <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text">
            LANGUAGE SYSTEMS
          </h2>
        </div>
        
        {/* Languages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {languages.map((lang, index) => (
            <div key={index} className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-purple-400/50 transition-all duration-300">
              {/* Language Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${lang.color} flex items-center justify-center text-2xl`}>
                  {lang.flag}
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold text-transparent bg-gradient-to-r ${lang.color} bg-clip-text`}>
                    {lang.language.toUpperCase()}
                  </h3>
                  <p className="text-gray-300 text-sm">{lang.context}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold text-slate-900 bg-gradient-to-r ${lang.color}`}>
                  {lang.proficiency.toUpperCase()}
                </div>
              </div>

              {/* Proficiency Level */}
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-medium text-sm">PROFICIENCY LEVEL</span>
                  <span className="text-blue-300 font-mono text-sm font-bold">{lang.level}%</span>
                </div>
                <div className="w-full bg-slate-600 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${lang.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${lang.level}%` }}
                  ></div>
                </div>
              </div>

              {/* Status Indicators */}
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center space-x-2 bg-green-400/20 px-2 py-1 rounded text-xs">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 font-semibold">ACTIVE</span>
                </div>
                {lang.proficiency === "Native" && (
                  <div className="flex items-center space-x-2 bg-purple-400/20 px-2 py-1 rounded text-xs">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    <span className="text-purple-300 font-semibold">PRIMARY</span>
                  </div>
                )}
                {lang.language === "English" && (
                  <div className="flex items-center space-x-2 bg-blue-400/20 px-2 py-1 rounded text-xs">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span className="text-blue-300 font-semibold">BUSINESS</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Communication Summary */}
        <div className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 p-6 rounded-xl border border-purple-400/30">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-purple-400 font-mono">2</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider">Active Languages</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-400 font-mono">97%</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider">Avg Proficiency</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-400 font-mono">GLOBAL</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider">Communication Ready</div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}