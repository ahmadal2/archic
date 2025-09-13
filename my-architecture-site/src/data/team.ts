
export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  bio: string
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Anna Müller',
    role: 'Gründer & Chefarchitekt',
    image: '',
    bio: 'Mit über 10 Jahren Erfahrung in der Architektur führt Anna unser Studio mit einer Vision für nachhaltiges und innovatives Design.'
  },
  {
    id: '2',
    name: 'Marcus Weber',
    role: 'Senior Architekt',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Marcus spezialisiert sich auf Wohnarchitektur und bringt eine einzigartige Perspektive für moderne Wohnkonzepte mit.'
  },
  {
    id: '3',
    name: 'Ahmad Al',
    role: 'Projektmanager',
    image: '',
    bio: 'Sarah koordiniert unsere Projekte von der Konzeption bis zur Fertigstellung und sorgt für reibungslose Abläufe.'
  },
  {
    id: '4',
    name: 'Tom Fischer',
    role: 'Innenarchitekt',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Tom gestaltet Innenräume, die Funktionalität und Ästhetik perfekt miteinander verbinden.'
  }
]
