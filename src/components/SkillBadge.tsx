import { Badge } from '@/components/ui/badge'

interface SkillBadgeProps {
  skill: string
  variant?: 'default' | 'secondary' | 'outline'
}

export default function SkillBadge({ skill, variant = 'secondary' }: SkillBadgeProps) {
  return (
    <Badge 
      variant={variant} 
      className="px-3 py-1 text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-md"
    >
      {skill}
    </Badge>
  )
}