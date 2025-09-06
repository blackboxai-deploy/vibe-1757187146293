interface ExperienceCardProps {
  title: string
  company: string
  duration: string
  achievements: string[]
}

export default function ExperienceCard({ title, company, duration, achievements }: ExperienceCardProps) {
  return (
    <div className="border-l-4 border-blue-500 pl-6 pb-8 last:pb-0">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-blue-600 font-medium text-lg">{company}</p>
        <p className="text-sm text-gray-500 font-medium">{duration}</p>
      </div>
      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-gray-700 leading-relaxed flex items-start">
            <span className="text-blue-500 mr-3 mt-1.5 flex-shrink-0">•</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}