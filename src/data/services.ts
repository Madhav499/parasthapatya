export interface Service {
  number: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  details: string[];
  deliverables: string[];
}

export const SERVICES: Service[] = [
  {
    number: "01",
    id: "architecture",
    title: "ARCHITECTURE",
    subtitle: "Creating timeless structures where space, light, and context converge.",
    description: "Our architectural practice views building not as mere construction, but as sculpting environments that resonate with human purpose. From private residences to commercial landmarks, we craft forms that feel inevitable, enduring, and deeply connected to Indian land and sunlight.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=1200",
    details: [
      "Master Planning & Site Analysis",
      "Conceptual & Schematic Design",
      "Structural System Integration",
      "Vernacular Climate-Responsive Design",
      "Sustainable Material Specifications"
    ],
    deliverables: [
      "3D Volumetric Models",
      "Architectural Working Drawings",
      "Structural Coordination Sets",
      "Authority Approval Documentation"
    ]
  },
  {
    number: "02",
    id: "interior-design",
    title: "INTERIOR DESIGN",
    subtitle: "Sanctuaries crafted around your rituals, comfort, and tactile aesthetics.",
    description: "PARĀ Interiors shapes spaces that nurture the senses. We believe interior architecture is the immediate atmosphere where life unfolds. Every surface, texture, custom joinery piece, and light fixture is selected to create harmony between daily utility and silent luxury.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=85&w=1200",
    details: [
      "Spatial Layout & Flow Optimization",
      "Custom Furniture & Millwork Design",
      "Material Palette & Texture Curation",
      "Acoustic & Thermal Comfort Design",
      "Integrated Architectural Lighting"
    ],
    deliverables: [
      "Detailed Joinery Drawings",
      "Material Board Specifications",
      "Furniture Fabrication Drawings",
      "Lighting & Electrical Layouts"
    ]
  },
  {
    number: "03",
    id: "vastu",
    title: "VASTU SHASTRA",
    subtitle: "Harmonizing solar paths, magnetic orienting, and natural energy currents.",
    description: "Vastu is not treated as a rigid ritual, but as an ancient Indian science of spatial alignment. Ar. Urval Dhruve integrates directional planning, five-element balancing (Pancha Mahabhuta), and natural light cycles directly into modern floor plans without compromising aesthetic purity.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=85&w=1200",
    details: [
      "Directional Energy Grid Alignment",
      "Five-Element Spatial Balancing",
      "Brahmasthan & Core Flow Protection",
      "Non-Invasive Remedial Planning",
      "Astro-Architectural Orientation"
    ],
    deliverables: [
      "Vastu Energy Audit Report",
      "Corrective Layout Overlay Sets",
      "Directional Zoning Diagrams",
      "Elemental Placement Manual"
    ]
  },
  {
    number: "04",
    id: "pranic-fengshui",
    title: "PRANIC FENG SHUI",
    subtitle: "Channeling subtle energetic vitality to enhance health and prosperity.",
    description: "Integrating Pranic energy principles with traditional space clearing techniques, we evaluate how subtle energy moves through doorways, corridors, and rooms. The goal is to eradicate stagnant energy pockets and promote vitality for all inhabitants.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=85&w=1200",
    details: [
      "Subtle Energy Stream Mapping",
      "Environmental Stress Assessment",
      "Color & Frequency Tuning",
      "Doorway & Entryway Energy Flow",
      "Workplace Focus & Vitality Optimization"
    ],
    deliverables: [
      "Energy Flow Assessment Map",
      "Color & Material Frequency Specs",
      "Remedial Spatial Adjustments"
    ]
  },
  {
    number: "05",
    id: "landscape",
    title: "BASIC LANDSCAPE",
    subtitle: "Blurring boundaries between indoor sanctuaries and nature.",
    description: "We design outdoor courtyards, verandah garden borders, and water features that bring natural flora into daily view. Using drought-resistant native Indian trees, soft river stones, and outdoor light, our landscapes evolve gracefully through Saurashtra seasons.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=85&w=1200",
    details: [
      "Courtyard & Patio Garden Design",
      "Native Flora Selection",
      "Water Feature & Reflection Pools",
      "Outdoor Paving & Stone Paths",
      "Atmospheric Garden Illumination"
    ],
    deliverables: [
      "Landscape Master Plan",
      "Plantation & Soil Palette",
      "Irrigation & Lighting Details"
    ]
  },
  {
    number: "06",
    id: "revamp",
    title: "ARCHITECTURE & INTERIOR REVAMP",
    subtitle: "Reimagining existing structures with contemporary clarity and structural integrity.",
    description: "Transforming aging or dysfunctional spaces into vibrant modern environments. We carefully diagnose existing structural skeletons, open up cramped rooms to light wells, and overhaul mechanical and surface finishes to give buildings a second life.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=85&w=1200",
    details: [
      "Adaptive Reuse & Structural Retrofit",
      "Spatial De-cluttering & Volume Expansion",
      "Facade Modernization & Envelope Upgrade",
      "MEP & Energy Efficiency Overhaul"
    ],
    deliverables: [
      "Before & After Spatial Comparison",
      "Demolition & Retrofit Drawings",
      "Structural Reinforcement Plans"
    ]
  },
  {
    number: "07",
    id: "decor-art",
    title: "DÉCOR & ART CURATION",
    subtitle: "The tactile final flourish of sculpture, textiles, and artisanal objects.",
    description: "Decor is the emotional soul of a completed space. We work directly with Indian master craftsmen, contemporary sculptors, and textile weavers to select bespoke artifacts, hand-knotted rugs, and wall hangings that complete the studio's architectural vision.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=85&w=1200",
    details: [
      "Art & Sculpture Acquisition",
      "Bespoke Textile & Soft Furnishing Selection",
      "Artisanal Indian Metalware & Ceramics",
      "Gallery Lighting & Display Mounting"
    ],
    deliverables: [
      "Art Curation Portfolio",
      "Custom Accessory Sourcing List",
      "Installation & Placement Schedule"
    ]
  }
];
