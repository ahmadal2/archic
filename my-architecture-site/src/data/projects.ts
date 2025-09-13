
export interface Project {
  id: string
  title: string
  category: string
  location: string
  year: string
  materials: string[]
  description: string
  heroImage: string
  images: string[]
  featured: boolean
  architect?: string
  area?: string
  awards?: string[]
}

export const projects: Project[] = [
  {
    id: 'myrtle-pool-house',
    title: 'Myrtle Pool House',
    category: 'Wohngebäude',
    location: 'München, Deutschland',
    year: '2024',
    materials: ['Beton', 'Glas', 'Holz', 'Naturstein'],
    description: 'Ein minimalistisches Poolhaus, das sich harmonisch in die natürliche Umgebung einfügt. Das Design betont die Verbindung zwischen Innen- und Außenraum durch große Glasflächen und natürliche Materialien.',
    heroImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2724664/pexels-photo-2724664.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    featured: true,
    architect: 'OH Architecture',
    area: '280 m²',
    awards: ['Architektur Preis 2024', 'Sustainable Design Award']
  },
  {
    id: 'urban-loft-renovation',
    title: 'Urban Loft Renovation',
    category: 'Renovierung',
    location: 'Berlin, Deutschland',
    year: '2023',
    materials: ['Stahl', 'Beton', 'Glas', 'Eiche'],
    description: 'Die Transformation eines historischen Industriegebäudes in ein modernes Wohnloft. Industrielle Elemente wurden bewusst erhalten und mit zeitgenössischen Designelementen kombiniert.',
    heroImage: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2724664/pexels-photo-2724664.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    featured: true,
    architect: 'OH Architecture',
    area: '450 m²'
  },
  {
    id: 'forest-retreat',
    title: 'Forest Retreat',
    category: 'Wohngebäude',
    location: 'Schwarzwald, Deutschland',
    year: '2023',
    materials: ['Holz', 'Naturstein', 'Glas'],
    description: 'Ein nachhaltiges Wochenendhaus im Wald, das mit lokalen Materialien und umweltfreundlichen Technologien errichtet wurde. Das Design respektiert die natürliche Topografie des Grundstücks.',
    heroImage: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2724664/pexels-photo-2724664.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    featured: false,
    architect: 'OH Architecture',
    area: '180 m²'
  },
  {
    id: 'glass-pavilion',
    title: 'Glass Pavilion',
    category: 'Gewerbe',
    location: 'Hamburg, Deutschland',
    year: '2024',
    materials: ['Glas', 'Stahl', 'Beton'],
    description: 'Ein transparenter Pavillon für kulturelle Veranstaltungen. Die Struktur aus Glas und Stahl schafft einen fließenden Übergang zwischen Innen- und Außenraum.',
    heroImage: 'https://images.pexels.com/photos/2724664/pexels-photo-2724664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/2724664/pexels-photo-2724664.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    featured: true,
    architect: 'OH Architecture',
    area: '320 m²'
  }
]

export const categories = ['Alle', 'Wohngebäude', 'Renovierung', 'Gewerbe']
