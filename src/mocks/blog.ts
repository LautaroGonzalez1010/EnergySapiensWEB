
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  externalLink?: string;
}

export const blogData: BlogPost[] = [
  {
    id: '1',
    title: 'ABB lanza nueva generación de interruptores de media tensión con tecnología digital',
    excerpt: 'ABB presenta su última innovación en interruptores de media tensión que integran sensores IoT y análisis predictivo para mejorar la confiabilidad de las redes eléctricas.',
    content: 'ABB ha anunciado el lanzamiento de su nueva línea de interruptores de media tensión equipados con tecnología digital avanzada. Estos dispositivos incorporan sensores IoT que permiten el monitoreo en tiempo real y análisis predictivo, revolucionando la gestión de redes eléctricas industriales.',
    image: 'https://readdy.ai/api/search-image?query=Modern%20ABB%20electrical%20switchgear%20and%20medium%20voltage%20circuit%20breakers%20in%20industrial%20facility%20with%20digital%20monitoring%20displays%20and%20IoT%20sensors%20showing%20advanced%20electrical%20engineering%20technology&width=800&height=600&seq=blog1&orientation=landscape',
    category: 'Innovación',
    author: 'ABB Group',
    date: '2024-01-15',
    readTime: '5 min',
    externalLink: 'https://new.abb.com/news',
  },
  {
    id: '2',
    title: 'Schneider Electric revoluciona la eficiencia energética con EcoStruxure Power',
    excerpt: 'La plataforma EcoStruxure Power de Schneider Electric permite reducir hasta un 30% el consumo energético en edificios comerciales mediante gestión inteligente.',
    content: 'Schneider Electric continúa liderando la transformación digital en gestión energética con su plataforma EcoStruxure Power, que combina hardware, software y servicios para optimizar el consumo eléctrico en tiempo real.',
    image: 'https://readdy.ai/api/search-image?query=Schneider%20Electric%20EcoStruxure%20digital%20energy%20management%20system%20with%20smart%20building%20automation%20and%20power%20monitoring%20displays%20showing%20energy%20efficiency%20technology%20in%20modern%20commercial%20facility&width=800&height=600&seq=blog2&orientation=landscape',
    category: 'Eficiencia Energética',
    author: 'Schneider Electric',
    date: '2024-01-10',
    readTime: '6 min',
    externalLink: 'https://www.se.com/ww/en/about-us/newsroom/',
  },
  {
    id: '3',
    title: 'Siemens implementa IA en sistemas de protección eléctrica industrial',
    excerpt: 'Siemens integra inteligencia artificial en sus relés de protección para detectar fallas eléctricas antes de que ocurran, mejorando la seguridad industrial.',
    content: 'La división de electrificación de Siemens ha desarrollado relés de protección con algoritmos de IA que analizan patrones de comportamiento eléctrico para predecir y prevenir fallas en sistemas industriales.',
    image: 'https://readdy.ai/api/search-image?query=Siemens%20industrial%20electrical%20protection%20relays%20with%20artificial%20intelligence%20displays%20and%20digital%20monitoring%20systems%20in%20modern%20control%20room%20showing%20advanced%20safety%20technology&width=800&height=600&seq=blog3&orientation=landscape',
    category: 'Seguridad',
    author: 'Siemens AG',
    date: '2024-01-05',
    readTime: '7 min',
    externalLink: 'https://press.siemens.com/global/en',
  },
  {
    id: '4',
    title: 'Eaton presenta soluciones de respaldo energético para centros de datos',
    excerpt: 'Eaton desarrolla sistemas UPS de nueva generación con baterías de litio que garantizan continuidad operativa en infraestructuras críticas.',
    content: 'Eaton ha lanzado su nueva línea de sistemas de alimentación ininterrumpida (UPS) diseñados específicamente para centros de datos, incorporando tecnología de baterías de litio y gestión inteligente de energía.',
    image: 'https://readdy.ai/api/search-image?query=Eaton%20UPS%20uninterruptible%20power%20supply%20systems%20with%20lithium%20batteries%20in%20modern%20data%20center%20showing%20backup%20power%20infrastructure%20and%20energy%20management%20technology&width=800&height=600&seq=blog4&orientation=landscape',
    category: 'Infraestructura',
    author: 'Eaton Corporation',
    date: '2023-12-28',
    readTime: '5 min',
    externalLink: 'https://www.eaton.com/us/en-us/company/news-insights.html',
  },
  {
    id: '5',
    title: 'GE Vernova avanza en tecnología de transformadores de alta eficiencia',
    excerpt: 'GE Vernova desarrolla transformadores con pérdidas reducidas en un 40% utilizando materiales avanzados y diseño optimizado.',
    content: 'GE Vernova, la división de energía de General Electric, ha presentado su nueva generación de transformadores de potencia que utilizan núcleos de acero de grano orientado y aceites dieléctricos biodegradables.',
    image: 'https://readdy.ai/api/search-image?query=GE%20Vernova%20high%20efficiency%20power%20transformers%20in%20electrical%20substation%20with%20advanced%20cooling%20systems%20and%20modern%20engineering%20design%20showing%20sustainable%20energy%20technology&width=800&height=600&seq=blog5&orientation=landscape',
    category: 'Innovación',
    author: 'GE Vernova',
    date: '2023-12-20',
    readTime: '6 min',
    externalLink: 'https://www.gevernova.com/news',
  },
  {
    id: '6',
    title: 'Legrand innova en sistemas de cableado estructurado para edificios inteligentes',
    excerpt: 'Legrand lanza soluciones de cableado Cat 8 y fibra óptica para soportar las demandas de conectividad de edificios inteligentes y IoT.',
    content: 'Legrand ha desarrollado una nueva línea de sistemas de cableado estructurado que soporta velocidades de hasta 40 Gbps, diseñada para la creciente demanda de conectividad en edificios inteligentes.',
    image: 'https://readdy.ai/api/search-image?query=Legrand%20structured%20cabling%20systems%20and%20fiber%20optic%20network%20infrastructure%20in%20modern%20smart%20building%20showing%20advanced%20connectivity%20and%20data%20center%20technology&width=800&height=600&seq=blog6&orientation=landscape',
    category: 'Automatización',
    author: 'Legrand Group',
    date: '2023-12-15',
    readTime: '5 min',
    externalLink: 'https://www.legrandgroup.com/en/news',
  },
];
