export const products = [
  {
    id: 1, category: "oils",
    name: "Cold-Pressed Groundnut Oil",
    nameTA: "கடலை எண்ணெய்",
    badge: "Best Seller",
    rating: 4.9, reviews: 342,
    description: "Stone-pressed peanut oil retaining full natural flavour and nutrients.",
    image: "/assets/gn/1L GN Bottle.png",
    variants: [
      {
        id: "v1",
        size: "0.5L",
        price: "₹180",
        images: [
          "/assets/gn/.5 L bck.png",
          "/assets/gn/.5 L frnt.png",
          "/assets/gn/.5 L left.png",
          "/assets/gn/.5 L right.png"
        ]
      },
      {
        id: "v2",
        size: "1L",
        price: "₹350",
        images: [
          "/assets/gn/1L GN Bottle.png",
          "/assets/gn/1L GN Left Bottle.png",
          "/assets/gn/1L Gn Right Bottle.png"
        ]
      }
    ]
  },
  {
    id: 2, category: "oils",
    name: "Pure Gingelly Oil",
    nameTA: "நல்லெண்ணெய்",
    badge: "Organic",
    rating: 4.8, reviews: 218,
    description: "Traditional sesame oil cold-pressed to preserve antioxidants and aroma.",
    image: "/assets/gn/1L GN Bottle.png",
    variants: [
      {
        id: "v1",
        size: "0.5L",
        price: "₹200",
        images: [
          "https://placehold.co/400x400/f5f0e8/1a1209?text=Gingelly+0.5L+1",
          "https://placehold.co/400x400/f5f0e8/1a1209?text=Gingelly+0.5L+2",
          "https://placehold.co/400x400/f5f0e8/1a1209?text=Gingelly+0.5L+3",
          "https://placehold.co/400x400/f5f0e8/1a1209?text=Gingelly+0.5L+4",
          "https://placehold.co/400x400/f5f0e8/1a1209?text=Gingelly+0.5L+5"
        ]
      },
      {
        id: "v2",
        size: "1L",
        price: "₹380",
        images: [
          "https://placehold.co/400x400/f5f0e8/1a1209?text=Gingelly+1L+1",
          "https://placehold.co/400x400/f5f0e8/1a1209?text=Gingelly+1L+2",
          "https://placehold.co/400x400/f5f0e8/1a1209?text=Gingelly+1L+3"
        ]
      }
    ]
  },
  {
    id: 3, category: "oils",
    name: "Virgin Coconut Oil",
    nameTA: "தேங்காய் எண்ணெய்",
    badge: "Pure",
    rating: 4.8, reviews: 214,
    description: "Naturally extracted coconut oil — ideal for cooking, skin and hair care.",
    image: "/assets/co/Co oil.png",
    variants: [
      // {
      //   id: "v1",
      //   size: "0.5L",
      //   price: "₹250",
      //   images: [
      //     "https://placehold.co/400x400/f5f0e8/1a1209?text=Coconut+0.5L+1",
      //     "https://placehold.co/400x400/f5f0e8/1a1209?text=Coconut+0.5L+2",
      //     "https://placehold.co/400x400/f5f0e8/1a1209?text=Coconut+0.5L+3",
      //     "https://placehold.co/400x400/f5f0e8/1a1209?text=Coconut+0.5L+4"
      //   ]
      // },
      {
        id: "v2",
        size: "1L",
        price: "₹480",
        images: [
          "/assets/co/Co oil 3.png",
          "/assets/co/Co oil 2.png"
        ]
      }
    ]
  },
  {
    id: 4, category: "dairy",
    name: "Organic Bilona Ghee",
    nameTA: "சித்தமான நாட்டுப் பசுமை நெய்",
    badge: "Premium",
    rating: 4.9, reviews: 427,
    description: "Slow-churned A2 cow ghee made by the ancient bilona method. Rich, golden, pure.",
    image: "/assets/ghee/GHEE 1.png",
    variants: [
      {
        id: "v1",
        size: "250ml",
        price: "₹350",
        images: [
          "/assets/ghee/Ghee Glass 2.png",
          "/assets/ghee/Ghee Glass 1.png"
        ]
      },
      {
        id: "v2",
        size: "500ml",
        price: "₹650",
        images: [
          "/assets/ghee/Ghee 2.png",
          "/assets/ghee/ghee 3.png",
          "/assets/ghee/Ghee 4.png",
        ]
      }
    ]
  },
  {
    id: 5, category: "dairy",
    name: "Natural Wild Honey",
    nameTA: "சித்தமான தேன்",
    badge: "Raw",
    rating: 4.9, reviews: 312,
    description: "Raw, unfiltered forest honey harvested with zero adulteration.",
    image: "/assets/honey/Honey 1.png",
    variants: [
      {
        id: "v1",
        size: "250g",
        price: "₹220",
        images: [
          "/assets/honey/Honey 2.png",
          "/assets/honey/Honey 1.png"
        ]
      },
      {
        id: "v2",
        size: "500g",
        price: "₹400",
        images: [
          "https://placehold.co/400x400/f5f0e8/1a1209?text=Honey+500g+1",
          "https://placehold.co/400x400/f5f0e8/1a1209?text=Honey+500g+2",
          "https://placehold.co/400x400/f5f0e8/1a1209?text=Honey+500g+3"
        ]
      }
    ]
  },
  {
    id: 6, category: "grains",
    name: "Organic Millet Rice",
    nameTA: "பாரம்பரிய அரிசி வகைகள்",
    badge: "Heritage",
    rating: 4.7, reviews: 98,
    description: "Heritage grain varieties — rich in fibre, iron and traditional goodness.",
    image: "/assets/products/millet-rice.jpg",
    variants: [
      {
        id: "v1",
        size: "500g",
        price: "₹90",
        images: [
          "https://placehold.co/400x400/f5f0e8/1a1209?text=Millet+500g+1",
          "https://placehold.co/400x400/f5f0e8/1a1209?text=Millet+500g+2"
        ]
      },
      {
        id: "v2",
        size: "1kg",
        price: "₹170",
        images: [
          "https://placehold.co/400x400/f5f0e8/1a1209?text=Millet+1kg+1",
          "https://placehold.co/400x400/f5f0e8/1a1209?text=Millet+1kg+2",
          "https://placehold.co/400x400/f5f0e8/1a1209?text=Millet+1kg+3"
        ]
      }
    ]
  },
  {
    id: 7, category: "spices",
    name: "Organic Masala Powders",
    nameTA: "இயற்கை முறை பொடிகள்",
    badge: "Artisan",
    rating: 4.7, reviews: 178,
    description: "Sun-dried, stone-ground spice blends — sambar powder, kaaṉi & more.",
    image: "/assets/products/masala-powders.jpg",
    variants: [
      {
        id: "v1",
        size: "100g",
        price: "₹60",
        images: [
          "https://placehold.co/400x400/f5f0e8/1a1209?text=Masala+100g+1",
          "https://placehold.co/400x400/f5f0e8/1a1209?text=Masala+100g+2"
        ]
      },
      {
        id: "v2",
        size: "250g",
        price: "₹140",
        images: [
          "https://placehold.co/400x400/f5f0e8/1a1209?text=Masala+250g+1",
          "https://placehold.co/400x400/f5f0e8/1a1209?text=Masala+250g+2",
          "https://placehold.co/400x400/f5f0e8/1a1209?text=Masala+250g+3"
        ]
      }
    ]
  },
  {
    id: 8, category: "spices",
    name: "Nattu Jaggery Powder",
    nameTA: "சித்தமான நாட்டுச் சர்க்கரை",
    badge: "Natural",
    rating: 4.7, reviews: 201,
    description: "Unrefined sugarcane jaggery in fine powder form. Zero chemicals added.",
    image: "/assets/products/jaggery-powder.jpg",
    variants: [
      {
        id: "v1",
        size: "500g",
        price: "₹80",
        images: [
          "https://placehold.co/400x400/f5f0e8/1a1209?text=Jaggery+500g+1",
          "https://placehold.co/400x400/f5f0e8/1a1209?text=Jaggery+500g+2"
        ]
      },
      {
        id: "v2",
        size: "1kg",
        price: "₹150",
        images: [
          "https://placehold.co/400x400/f5f0e8/1a1209?text=Jaggery+1kg+1",
          "https://placehold.co/400x400/f5f0e8/1a1209?text=Jaggery+1kg+2",
          "https://placehold.co/400x400/f5f0e8/1a1209?text=Jaggery+1kg+3"
        ]
      }
    ]
  },
];

export const testimonials = [
  { id: 1, name: "Priya Lakshmi", location: "Hosur", rating: 5, text: "The A2 bilona ghee is absolutely amazing. My family has been using it for 6 months — clearly see the difference in health!", avatar: "PL" },
  { id: 2, name: "Rajesh Kumar", location: "Bangalore", rating: 5, text: "The groundnut oil has that authentic wood-pressed flavour. Nothing compares to it in the market.", avatar: "RK" },
  { id: 3, name: "Meena Sundaram", location: "Hosur", rating: 4, text: "Wild honey is the best I've ever tasted. Pure, thick, and fast delivery!", avatar: "MS" },
  { id: 4, name: "Arjun Nair", location: "Coimbatore", rating: 5, text: "Started ordering gingelly oil. Great quality and great customer service. Highly recommend!", avatar: "AN" },
];

export const services = [
  { id: 1, icon: "🌿", title: "Organic Farm Delivery", description: "Fresh organic produce delivered from certified farms directly to your doorstep every week." },
  { id: 2, icon: "🧹", title: "Eco House Cleaning", description: "Professional home cleaning using 100% natural, chemical-free cleaning products." },
  { id: 3, icon: "🪴", title: "Garden & Terrace Setup", description: "Expert setup of kitchen gardens, terrace gardens, and indoor plant arrangements." },
  { id: 4, icon: "💆", title: "Ayurvedic Wellness", description: "At-home Ayurvedic massage and wellness treatments by certified therapists." },
  { id: 5, icon: "🍳", title: "Organic Meal Prep", description: "Weekly meal preparation using farm-fresh organic ingredients by trained cooks." },
  { id: 6, icon: "🐄", title: "Dairy Subscription", description: "Daily fresh A2 cow milk, curd, and butter delivered at sunrise from local farms." },
];
