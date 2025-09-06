import SectionContainer from './SectionContainer'

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Digital Financial Analyst & Customer Service Specialist",
      company: "Lizardbear Tasking Inc.",
      duration: "May 2025 – Present",
      status: "CURRENT" as const,
      level: "SENIOR" as const,
      achievements: [
        "Analyzed cross-departmental datasets to uncover trends, risks, and growth opportunities, informing strategic initiatives.",
        "Developed automated dashboards and reporting tools using Excel, Power BI, and BI platforms, improving data accessibility and decision speed.",
        "Collaborated with cross-functional teams to streamline operations, reduce inefficiencies, and implement scalable, data-driven solutions."
      ]
    },
    {
      title: "Customer Service Representative II",
      company: "Concentrix Daksh Services Philippines",
      duration: "Sep 2023 – Apr 2025",
      status: "COMPLETED" as const,
      level: "INTERMEDIATE" as const,
      achievements: [
        "Delivered empathetic, high-impact support across multichannel platforms, consistently exceeding CSAT and FCR targets.",
        "Led process improvement initiatives, contributing to SOP revisions and operational enhancements.",
        "Mentored new hires, fostering a collaborative and performance-driven team culture."
      ]
    },
    {
      title: "Customer Service Representative I",
      company: "Foundever Philippines Corporation",
      duration: "Jun 2019 – Sep 2023",
      status: "COMPLETED" as const,
      level: "FOUNDATION" as const,
      achievements: [
        "Handled customer inquiries with accuracy and empathy, ensuring timely resolution and data integrity.",
        "Maintained CRM records and adhered to compliance standards while meeting KPIs such as CSAT, AHT, and FCR.",
        "Analyzed customer feedback and proposed service enhancements that improved satisfaction and efficiency."
      ]
    }
  ]

  const levelColors: Record<string, string> = {
    SENIOR: "from-purple-400 to-blue-400",
    INTERMEDIATE: "from-blue-400 to-green-400", 
    FOUNDATION: "from-green-400 to-yellow-400"
  };

  const statusColors: Record<string, string> = {
    CURRENT: "bg-green-400",
    COMPLETED: "bg-blue-400"
  };

  return (
    <SectionContainer>
      <div className="space-y-8">
        {/* Section Header */}
        <div className="flex items-center space-x-4">
          <div className="flex space-x-1">
            <div className="w-1 h-8 bg-purple-400 rounded-full"></div>
            <div className="w-1 h-6 bg-blue-400 rounded-full"></div>
            <div className="w-1 h-4 bg-green-400 rounded-full"></div>
          </div>
          <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
            CAREER PROGRESSION
          </h2>
        </div>

        {/* Timeline Visualization */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-blue-400 to-green-400"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12">
                {/* Timeline Dot */}
                <div className={`absolute left-2 w-4 h-4 rounded-full ${statusColors[exp.status]} border-2 border-slate-600 shadow-lg`}></div>
                
                {/* Experience Card */}
                <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <div className={`px-3 py-1 rounded-full text-xs font-bold text-slate-900 bg-gradient-to-r ${levelColors[exp.level]}`}>
                        {exp.level}
                      </div>
                      <div className={`px-2 py-1 rounded text-xs font-semibold text-white ${exp.status === 'CURRENT' ? 'bg-green-500' : 'bg-slate-500'}`}>
                        {exp.status}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-blue-300 mb-1">{exp.title}</h3>
                    <p className="text-green-300 font-semibold text-lg">{exp.company}</p>
                    <p className="text-sm text-gray-400 font-mono">{exp.duration}</p>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                        <p className="text-gray-200 leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>

                  {/* Performance Indicators */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-600/50">
                    {index === 0 && (
                      <>
                        <div className="flex items-center space-x-1 bg-blue-400/20 px-2 py-1 rounded text-xs">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span className="text-blue-300 font-medium">ANALYTICS</span>
                        </div>
                        <div className="flex items-center space-x-1 bg-green-400/20 px-2 py-1 rounded text-xs">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                          <span className="text-green-300 font-medium">AUTOMATION</span>
                        </div>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <div className="flex items-center space-x-1 bg-purple-400/20 px-2 py-1 rounded text-xs">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          <span className="text-purple-300 font-medium">LEADERSHIP</span>
                        </div>
                        <div className="flex items-center space-x-1 bg-yellow-400/20 px-2 py-1 rounded text-xs">
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                          <span className="text-yellow-300 font-medium">OPTIMIZATION</span>
                        </div>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <div className="flex items-center space-x-1 bg-green-400/20 px-2 py-1 rounded text-xs">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                          <span className="text-green-300 font-medium">FOUNDATION</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}