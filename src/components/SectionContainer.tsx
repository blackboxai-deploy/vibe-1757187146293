import { ReactNode } from 'react'
import { Card } from '@/components/ui/card'

interface SectionContainerProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function SectionContainer({ children, className = '', id }: SectionContainerProps) {
  return (
    <Card id={id} className={`p-6 sm:p-8 shadow-2xl border border-blue-400/20 bg-slate-800/90 backdrop-blur-md rounded-xl ${className}`}>
      {children}
    </Card>
  )
}