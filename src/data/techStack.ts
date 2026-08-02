import {
  Atom,
  Box,
  Code2,
  Coffee,
  Database,
  GitBranch,
  Globe,
  Wind,
  type LucideIcon,
} from 'lucide-react'

export interface TechItem {
  name: string
  icon: LucideIcon
}

export const TECH_STACK: TechItem[] = [
  { name: 'React', icon: Atom },
  { name: 'Java & Spring Boot', icon: Coffee },
  { name: 'WordPress', icon: Globe },
  { name: 'MySQL', icon: Database },
  { name: 'Docker', icon: Box },
  { name: 'Tailwind CSS', icon: Wind },
  { name: 'PHP', icon: Code2 },
  { name: 'Git', icon: GitBranch },
]
