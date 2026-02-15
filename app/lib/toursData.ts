/* ─── Dynamic Tours Data ─── */

export interface Tour {
  id: string;
  title: string;
  desc: string;
  img: string;
  category: "Ancient" | "Heritage" | "Hill" | "Beach" | "Wildlife";
  price: number;
  rating: number;
  duration: string;
}

const baseToursData: Tour[] = [
  {
    id: "tour-1",
    img: "https://images.unsplash.com/photo-1594391045445-64ea3c6ff16b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "ANCIENT OF CEYLON",
    rating: 4.9,
    duration: "6 Days / 5 Nights",
    desc: "The 6-day Ancient Ceylon tour package offers you the best days of your life inside the ancient kingdoms in Sri Lanka.",
    price: 149.00,
    category: "Ancient"
  },
  {
    id: "tour-2",
    img: "https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "CEYLON HERITAGE TOUR",
    rating: 4.8,
    duration: "8 Days / 7 Nights",
    desc: "Explore the rich ancient history of Sri Lanka, designed for the visitors interested in antiquities",
    price: 1020.00,
    category: "Heritage"
  },
  {
    id: "tour-3",
    img: "https://images.unsplash.com/photo-1639401672371-0c4be4389107?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "CEYLON HILL TOUR",
    rating: 5.0,
    duration: "5 Days / 4 Nights",
    desc: "Perfect getaway for visitors who want to experience the cool breezy hill country of Sri Lanka",
    price: 370.00,
    category: "Hill"
  },
  {
    id: "tour-4",
    img: "https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "EAST COAST",
    rating: 5.0,
    duration: "5 Days / 4 Nights",
    desc: "The 6 day East Coast tour package offers you the perfect blend of beach and the cultural experience.",
    price: 370.00,
    category: "Hill"
  },
  {
    id: "tour-5",
    img: "https://images.unsplash.com/photo-1736142260757-6effc558100a?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "ENJOY 3 NIGHTS IN COLOMBO",
    rating: 5.0,
    duration: "5 Days / 4 Nights",
    desc: "Perfect getaway for visitors who want to experience the cool breezy hill country of Sri Lanka",
    price: 370.00,
    category: "Hill"
  },
  {
    id: "tour-6",
    img: "https://images.unsplash.com/photo-1708338914870-797de586672d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "WONDERS OF HILL COUNTRIES",
    rating: 5.0,
    duration: "5 Days / 4 Nights",
    desc: "The 6-day fascination hill country tour package offers you the most scenic experience of the magical island.",
    price: 370.00,
    category: "Hill"
  },
  {
    id: "tour-7",
    img: "https://plus.unsplash.com/premium_photo-1723914073487-91df23fa3b72?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "HONEYMOON / ROMANTIC SPECIAL TOUR",
    rating: 5.0,
    duration: "5 Days / 4 Nights",
    desc: "The 6-day Ancient Ceylon tour package offers you the best days of your life inside the ancient kingdoms in Sri Lanka.",
    price: 370.00,
    category: "Hill"
  },
  {
    id: "tour-8",
    img: "https://images.unsplash.com/photo-1700739746391-26561c282181?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "OWN SWEET TIME ON THE BEACH",
    rating: 5.0,
    duration: "5 Days / 4 Nights",
    desc: "The 7 days Own Sweet Time on the Beach tour package offers you the best experience on the beaches of southern Sri Lanka.",
    price: 370.00,
    category: "Hill"
  },
  {
    id: "tour-9",
    img: "https://plus.unsplash.com/premium_photo-1661876643563-00656cbd1d41?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "PARADISE NATURE & WILD LIFE",
    rating: 5.0,
    duration: "5 Days / 4 Nights",
    desc: "Perfect getaway for visitors who want to experience the cool breezy hill country of Sri Lanka",
    price: 370.00,
    category: "Hill"
  },
  {
    id: "tour-10",
    img: "https://images.unsplash.com/photo-1581420456035-58b8efadcdea?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "SERENDIPITY OF SRI LANKA",
    rating: 5.0,
    duration: "5 Days / 4 Nights",
    desc: "This package give you the perfect stays for your holiday. Starting the tour with the exclusive experience in Negombo in the western coastline.",
    price: 370.00,
    category: "Hill"
  },
];

/**
 * Dynamically generate tour data
 * Can be extended to fetch from API or apply filters
 */
export function getTourData() {
  return {
    tours: baseToursData,
    totalTours: baseToursData.length,
    categories: ["All", "Ancient", "Heritage", "Hill", "Beach", "Wildlife"],
  };
}

/**
 * Get tours by category
 */
export function getToursByCategory(category: string): Tour[] {
  if (category === "All") {
    return baseToursData;
  }
  return baseToursData.filter((tour) => tour.category === category);
}

/**
 * Get a single tour by ID
 */
export function getTourById(id: string): Tour | undefined {
  return baseToursData.find((tour) => tour.id === id);
}

export const tourData = getTourData();
