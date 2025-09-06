import SectionContainer from './SectionContainer'

export default function EducationSection() {
  const awards = [
    { name: "Technical Excellence Award", year: "2019", type: "ACADEMIC" },
    { name: "Leadership Award", year: "2019", type: "LEADERSHIP" }, 
    { name: "Dean's Lister", year: "2018-2019", type: "HONOR" }
  ]

  const subjects = [
    "Data Structures & Algorithms",
    "Database Management Systems", 
    "Systems Analysis & Design",
    "Business Intelligence"
  ]

  return (
    <SectionContainer>
      <div className="space-y-6">
        {/* Section Header */}
        <div className="flex items-center space-x-4">
          <div className="flex space-x-1">
            <div className="w-1 h-8 bg-green-400 rounded-full"></div>
            <div className="w-1 h-6 bg-blue-400 rounded-full"></div>
            <div className="w-1 h-4 bg-purple-400 rounded-full"></div>
          </div>
          <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">
            ACADEMIC CREDENTIALS
          </h2>
        </div>
        
        {/* Main Education Block */}
        <div className="bg-slate-700/50 p-6 rounded-xl border border-green-400/30">
          {/* Degree Header */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center text-2xl">
              🎓
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-300 mb-1">
                BACHELOR OF SCIENCE IN INFORMATION SYSTEMS
              </h3>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>COMPLETED 2019</span>
              </div>
            </div>
          </div>

          {/* Institution */}
          <div className="bg-slate-600/50 p-4 rounded-lg mb-4">
            <p className="text-lg text-blue-300 font-semibold mb-2">
              Don Mariano Marcos Memorial State University – North La Union Campus
            </p>
            <p className="text-gray-300 flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
              <span>Sapilang, Bacnotan, La Union, Philippines</span>
            </p>
          </div>

          {/* Key Subjects */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-purple-300 uppercase tracking-wider mb-3">
              CORE COMPETENCIES ACQUIRED:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {subjects.map((subject, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-200 text-sm">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  <span>{subject}</span>
                </div>
              ))}
            </div>
          </div>
            
          {/* Awards & Honors */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-yellow-300 uppercase tracking-wider">
              ACADEMIC DISTINCTIONS:
            </h4>
            <div className="space-y-3">
              {awards.map((award, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-600/30 rounded-lg border border-yellow-400/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center text-xs font-bold text-slate-900">
                      🏆
                    </div>
                    <div>
                      <div className="text-yellow-300 font-semibold">{award.name}</div>
                      <div className="text-gray-400 text-xs">{award.year}</div>
                    </div>
                  </div>
                  <div className="px-2 py-1 rounded text-xs font-semibold text-slate-900 bg-gradient-to-r from-yellow-400 to-orange-400">
                    {award.type}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Performance */}
          <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-600/50">
            <div className="text-xs text-gray-400">
              <span>ACADEMIC STATUS: </span>
              <span className="text-green-300 font-mono font-bold">GRADUATED WITH DISTINCTION</span>
            </div>
            <div className="px-3 py-1 rounded text-xs font-semibold text-slate-900 bg-gradient-to-r from-green-400 to-blue-400">
              BS INFORMATION SYSTEMS
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}