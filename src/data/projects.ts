export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Resort & Farmhouse' | 'Café' | 'Showroom & Boutique';
  location: string;
  year: string;
  area: string;
  scope: string;
  heroImage: string;
  thumbnail: string;
  gridAspectRatio: 'portrait' | 'landscape' | 'wide' | 'tall';
  statement: string;
  description: string;
  designThinking: {
    concept: string;
    spatialStrategy: string;
    materials: string;
    lightAndCirculation: string;
  };
  gallery: string[];
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "savan-status",
    slug: "savan-status",
    title: "Savan Status",
    category: "Residential",
    location: "Rajkot, Gujarat",
    year: "2023",
    area: "8,500 sq.ft.",
    scope: "Architecture, Interior Design & Vastu Planning",
    heroImage: "https://parasthapatya.in/wp-content/uploads/2023/12/port_savanstatus_thumb.jpg",
    thumbnail: "https://parasthapatya.in/wp-content/uploads/2023/12/port_savanstatus_thumb.jpg",
    gridAspectRatio: "wide",
    statement: "A contemporary sanctuary defined by pure spatial proportions, double-height courtyards, and warm Indian sandstone.",
    description: "Savan Status embodies the studio's core philosophy of creating homes where architecture feels like an organic extension of human living. Designed with a central open courtyard, light filters down through customized brass jalis, casting dynamic sun patterns across Italian marble floors throughout the day.",
    designThinking: {
      concept: "Synthesizing traditional Haveli spatial organization with clean contemporary monolithic geometry.",
      spatialStrategy: "A central family atrium connects public living areas with private upper suites, promoting natural cross-ventilation.",
      materials: "Hand-dressed Dholpur sandstone, solid teakwood, acoustic lime plaster, and brushed antique brass accents.",
      lightAndCirculation: "Deep overhangs shield harsh Western sun while skylights bring soft north light deep into the core."
    },
    gallery: [
      "https://parasthapatya.in/wp-content/uploads/2023/12/port_savanstatus_thumb.jpg",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=85&w=1600"
    ],
    featured: true
  },
  {
    id: "montessa-surat",
    slug: "montessa-surat",
    title: "Montessa Surat",
    category: "Commercial",
    location: "Surat, Gujarat",
    year: "2023",
    area: "14,200 sq.ft.",
    scope: "Commercial Architecture & Interior Architecture",
    heroImage: "https://parasthapatya.in/wp-content/uploads/2023/12/port_comm_MontessaSurat_thumb.jpg",
    thumbnail: "https://parasthapatya.in/wp-content/uploads/2023/12/port_comm_MontessaSurat_thumb.jpg",
    gridAspectRatio: "portrait",
    statement: "An iconic commercial edifice crafted with rhythmic vertical louvers and an imposing bronze canopy.",
    description: "Montessa Surat redefines commercial architecture by balancing high-density urban utility with tactile warmth. The building features custom geometric glass screens that respond to direct sun angles while projecting a powerful architectural identity.",
    designThinking: {
      concept: "Architectural sculpture serving as a corporate landmark.",
      spatialStrategy: "Open column-free floor plates with central service cores allowing total interior flexibility.",
      materials: "Fluted travertine, bronze anodized aluminum louvers, high-performance low-E glass, polished terrazzo.",
      lightAndCirculation: "Double-height entrance lobby bathed in indirect perimeter lighting."
    },
    gallery: [
      "https://parasthapatya.in/wp-content/uploads/2023/12/port_comm_MontessaSurat_thumb.jpg",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=85&w=1600"
    ],
    featured: true
  },
  {
    id: "resort-sasan",
    slug: "resort-sasan",
    title: "Resort Sasan",
    category: "Resort & Farmhouse",
    location: "Gir Forest, Sasan, Gujarat",
    year: "2022",
    area: "22,000 sq.ft. (Site 4 Acres)",
    scope: "Master Planning, Architecture, Resort Interiors & Landscape",
    heroImage: "https://parasthapatya.in/wp-content/uploads/2023/12/port_resortandfarm_resortsasan_thumb.jpg",
    thumbnail: "https://parasthapatya.in/wp-content/uploads/2023/12/port_resortandfarm_resortsasan_thumb.jpg",
    gridAspectRatio: "landscape",
    statement: "A luxury wilderness retreat rooted in local mud-plaster textures, exposed stone walls, and native flora.",
    description: "Nestled on the edge of Sasan Gir, this retreat respects the delicate ecological context. Low-slung pavilions made from reclaimed timber and local river stone dissolve seamlessly into the wilderness.",
    designThinking: {
      concept: "Harmonizing luxury hospitality with vernacular forest architecture.",
      spatialStrategy: "Dispersed private villas linked by lantern-lit pebble pathways and open verandahs.",
      materials: "Unfinished slate, terracotta roof tiles, reclaimed teakwood, raw brass hardware.",
      lightAndCirculation: "Open-air dining pavilions capturing cool forest breezes."
    },
    gallery: [
      "https://parasthapatya.in/wp-content/uploads/2023/12/port_resortandfarm_resortsasan_thumb.jpg",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=85&w=1600"
    ],
    featured: true
  },
  {
    id: "kathiyawadi-kasumbo",
    slug: "kathiyawadi-kasumbo-food-post",
    title: "Kathiyawadi Kasumbo",
    category: "Café",
    location: "Rajkot, Gujarat",
    year: "2023",
    area: "4,200 sq.ft.",
    scope: "Interior Design, Theme Concept & Lighting Architecture",
    heroImage: "https://parasthapatya.in/wp-content/uploads/2019/11/port_cafe_kk1_thumb.jpg",
    thumbnail: "https://parasthapatya.in/wp-content/uploads/2019/11/port_cafe_kk1_thumb.jpg",
    gridAspectRatio: "tall",
    statement: "A tactile dining venue celebrating Kathiawadi heritage with handcrafted terracotta lanterns and lime wash walls.",
    description: "Kathiyawadi Kasumbo bridges traditional Saurashtra culinary culture with modern editorial dining layout. The atmosphere is warm, immersive, and rich with handcrafted wooden details.",
    designThinking: {
      concept: "Cultural immersion through tactile material memory.",
      spatialStrategy: "Varied seating zones from intimate alcoves to communal feast tables under timber pergolas.",
      materials: "Terracotta floor bricks, hand-woven cane lights, brass dinnerware displays, raw clay finishes.",
      lightAndCirculation: "Low-level ambient lighting with warm accent spotlights on textured walls."
    },
    gallery: [
      "https://parasthapatya.in/wp-content/uploads/2019/11/port_cafe_kk1_thumb.jpg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=85&w=1600"
    ],
    featured: true
  },
  {
    id: "signature-prime",
    slug: "signature-prime",
    title: "Signature Prime",
    category: "Commercial",
    location: "Rajkot, Gujarat",
    year: "2022",
    area: "18,500 sq.ft.",
    scope: "Architecture & Structural Aesthetic Design",
    heroImage: "https://parasthapatya.in/wp-content/uploads/2023/12/port_comm_SignaturePrime_thumb.jpg",
    thumbnail: "https://parasthapatya.in/wp-content/uploads/2023/12/port_comm_SignaturePrime_thumb.jpg",
    gridAspectRatio: "landscape",
    statement: "Precision corporate design featuring exposed concrete ribbons and tinted bronze glazing.",
    description: "Signature Prime stands as a monument to precision engineering. Every floor plate is meticulously proportioned to optimize natural daylight while providing optimal thermal mass cooling.",
    designThinking: {
      concept: "Monolithic elegance in a fast-paced urban corridor.",
      spatialStrategy: "Columnless work zones with floor-to-ceiling glass wrapping the north facade.",
      materials: "Architectural concrete, dark bronze metal cladding, polished granite floors.",
      lightAndCirculation: "Automated solar shading systems integrated into exterior mullions."
    },
    gallery: [
      "https://parasthapatya.in/wp-content/uploads/2023/12/port_comm_SignaturePrime_thumb.jpg",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=85&w=1600"
    ],
    featured: false
  },
  {
    id: "wedding-diaries",
    slug: "wedding-diaries",
    title: "Wedding Diaries Boutique",
    category: "Showroom & Boutique",
    location: "Rajkot, Gujarat",
    year: "2023",
    area: "3,800 sq.ft.",
    scope: "Luxury Retail Interior & Custom Furniture Design",
    heroImage: "https://parasthapatya.in/wp-content/uploads/2023/12/port_showroom_weddingdiaries_thumb.jpg",
    thumbnail: "https://parasthapatya.in/wp-content/uploads/2023/12/port_showroom_weddingdiaries_thumb.jpg",
    gridAspectRatio: "portrait",
    statement: "An ethereal bridal atelier where curved plaster arches meet velvet drapes and warm rose-gold detailing.",
    description: "Designed to evoke the intimacy of a private royal wardrobe, Wedding Diaries offers an opulent yet understated consultation space for high-end wedding wear.",
    designThinking: {
      concept: "Sanctuary of celebration and luxury craftsmanship.",
      spatialStrategy: "Sequential viewing chambers leading into a grand bridal lounge.",
      materials: "Micro-cement plaster walls, brass archways, plush silk upholstery, crystal mirrors.",
      lightAndCirculation: "Custom museum-grade 95+ CRI lighting for true garment color rendition."
    },
    gallery: [
      "https://parasthapatya.in/wp-content/uploads/2023/12/port_showroom_weddingdiaries_thumb.jpg",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=85&w=1600"
    ],
    featured: true
  },
  {
    id: "farmhouse-pune",
    slug: "farmhouse-pune",
    title: "Farmhouse Pune",
    category: "Resort & Farmhouse",
    location: "Pune, Maharashtra",
    year: "2021",
    area: "12,000 sq.ft.",
    scope: "Architecture, Pranic FengShui & Landscape Integration",
    heroImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=85&w=1600",
    thumbnail: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=85&w=1600",
    gridAspectRatio: "wide",
    statement: "A serene hilltop pavilion anchored by basalt stone walls and expansive cantilevered decks.",
    description: "Overlooking lush agricultural hills, Farmhouse Pune balances open verandah living with secure indoor sanctuaries, incorporating Pranic FengShui spatial directional alignment.",
    designThinking: {
      concept: "Harmonizing elemental wind and water energies.",
      spatialStrategy: "East-facing morning verandahs and south-west buffer gardens.",
      materials: "Black basalt stone, treated teak deck boards, copper gutters.",
      lightAndCirculation: "Floor-to-ceiling sliding glass panels creating 270-degree landscape panoramas."
    },
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=85&w=1600"
    ],
    featured: false
  },
  {
    id: "siddhi-heritage",
    slug: "siddhi-heritage",
    title: "Siddhi Heritage Villa",
    category: "Residential",
    location: "Rajkot, Gujarat",
    year: "2022",
    area: "9,200 sq.ft.",
    scope: "Architecture & Interior Revamp",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=85&w=1600",
    thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=85&w=1600",
    gridAspectRatio: "landscape",
    statement: "Revitalizing a heritage family residence into a modern light-filled architectural masterpiece.",
    description: "Siddhi Heritage Villa preserves ancestral sentiment while introducing crisp architectural interventions, expanded volume, and modern climate control.",
    designThinking: {
      concept: "Respecting historic memory while elevating contemporary living.",
      spatialStrategy: "Opening dark interior rooms to double-height light wells.",
      materials: "Restored timber beams, white marble, bronze fixtures, fluted oak paneling.",
      lightAndCirculation: "Vertical light chimneys driving ventilation through all levels."
    },
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=85&w=1600"
    ],
    featured: false
  }
];
