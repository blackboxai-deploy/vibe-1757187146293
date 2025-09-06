import HeroSection from '@/components/HeroSection'
import ProfessionalSummary from '@/components/ProfessionalSummary'
import ExperienceSection from '@/components/ExperienceSection'
import EducationSection from '@/components/EducationSection'
import SkillsSection from '@/components/SkillsSection'
import LanguagesSection from '@/components/LanguagesSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.3) 2px, transparent 0),
                           radial-gradient(circle at 75px 75px, rgba(34, 197, 94, 0.2) 1px, transparent 0)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>
      
      {/* Grid Lines for Data Theme */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-16">
        <HeroSection />
        <ProfessionalSummary />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <LanguagesSection />
        <ContactSection />
      </div>
    </main>
  )
}