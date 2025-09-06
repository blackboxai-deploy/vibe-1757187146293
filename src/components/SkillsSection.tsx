import SectionContainer from './SectionContainer'

export default function SkillsSection() {
  const skillCategories = [
    {
      category: "ANALYTICAL SYSTEMS",
      icon: "📊",
      color: "from-blue-400 to-purple-400",
      skills: [
        { name: "Financial Data Analysis & Reporting", level: 95 },
        { name: "Business Intelligence Tools (Excel, Power BI)", level: 90 },
        { name: "KPI Tracking & Performance Metrics", level: 88 },
        { name: "Process Improvement & Automation", level: 85 }
      ]
    },
    {
      category: "TECHNICAL INFRASTRUCTURE", 
      icon: "⚙️",
      color: "from-green-400 to-blue-400",
      skills: [
        { name: "Digital Systems Optimization", level: 82 },
        { name: "CRM Platforms & Multichannel Support", level: 87 },
        { name: "Campaign Design & Narrative Crafting", level: 75 }
      ]
    },
    {
      category: "HUMAN INTERFACE",
      icon: "👥", 
      color: "from-purple-400 to-pink-400",
      skills: [
        { name: "Empathetic Communication & Conflict Resolution", level: 92 },
        { name: "Cross-functional Collaboration", level: 89 },
        { name: "Multicultural Team Engagement", level: 86 }
      ]
    }
  ]

  return (
    <SectionContainer>
      <div className="space-y-8">
        {/* Section Header */}
        <div className="flex items-center space-x-4">
          <div className="flex space-x-1">
            <div className="w-1 h-8 bg-blue-400 rounded-full"></div>
            <div className="w-1 h-6 bg-green-400 rounded-full"></div>
            <div className="w-1 h-4 bg-purple-400 rounded-full"></div>
          </div>
          <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            SKILL MATRIX
          </h2>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-700/30 p-6 rounded-xl border border-slate-600/50">
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl`}>
                  <span className="filter drop-shadow-sm">{category.icon}</span>
                </div>
                <div>
                  <h3 className={`text-xl font-bold text-transparent bg-gradient-to-r ${category.color} bg-clip-text`}>
                    {category.category}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>ACTIVE SYSTEMS</span>
                  </div>
                </div>
              </div>

              {/* Skills with Progress Bars */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200 font-medium text-sm">{skill.name}</span>
                      <span className="text-blue-300 font-mono text-sm font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Category Stats */}
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-600/50">
                <div className="text-xs text-gray-400">
                  <span>AVG PROFICIENCY: </span>
                  <span className="text-blue-300 font-mono font-bold">
                    {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                  </span>
                </div>
                <div className={`px-2 py-1 rounded text-xs font-semibold text-slate-900 bg-gradient-to-r ${category.color}`}>
                  {category.skills.length} SKILLS
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Performance Dashboard */}
        <div className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 p-6 rounded-xl border border-blue-400/30">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-400 font-mono">88%</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider">Overall Proficiency</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-400 font-mono">11</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider">Core Skills</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-purple-400 font-mono">3</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider">Skill Categories</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-yellow-400 font-mono">6+</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider">Years Applied</div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}